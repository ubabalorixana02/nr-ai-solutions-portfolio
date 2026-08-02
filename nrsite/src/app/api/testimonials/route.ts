import { NextResponse } from "next/server";
import { testimonialFormSchema } from "@/lib/validation";
import { isRateLimited, getClientIp } from "@/lib/rateLimit";
import { writeClient } from "@/sanity/lib/writeClient";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(`testimonial:${ip}`)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = testimonialFormSchema.safeParse(body);
  if (!parsed.success) {
    if (parsed.error.issues.some((i) => i.path[0] === "website")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
      { status: 400 }
    );
  }

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("[testimonials] SANITY_API_WRITE_TOKEN is not set — see README for setup.");
    return NextResponse.json(
      { error: "Testimonial submissions aren't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const { clientName, role, company, review, rating } = parsed.data;

  try {
    await writeClient.create({
      _type: "testimonial",
      status: "pending", // always starts unpublished — reviewed in Studio before it goes live
      clientName,
      role: role || undefined,
      company: company || undefined,
      review,
      rating,
      submittedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[testimonials] Failed to create Sanity document:", err);
    return NextResponse.json(
      { error: "Failed to submit your testimonial. Please try again." },
      { status: 502 }
    );
  }
}
