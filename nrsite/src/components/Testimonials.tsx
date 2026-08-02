import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import TestimonialForm from "./TestimonialForm";
import { getApprovedTestimonials } from "@/lib/testimonials";
import { urlForImage } from "@/sanity/lib/image";

export default async function Testimonials() {
  const testimonials = await getApprovedTestimonials();

  return (
    <section id="testimonials" className="px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Client Feedback</p>
        <h2 className="section-title">
          <em>Testimonials</em>
        </h2>
        <div className="divider" />

        {testimonials.length === 0 ? (
          <div className="card mx-auto max-w-xl px-8 py-12 text-center">
            <p className="font-display text-2xl text-heading">
              &ldquo;This space is reserved for the people I&apos;ve had the privilege of working with.&rdquo;
            </p>
            <p className="mt-4 text-sm text-mid">
              I&apos;m early in building out client relationships through this site — testimonials will
              appear here as projects and consultations are completed. If we&apos;ve worked together,
              I&apos;d love your feedback.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t._id} className="card flex flex-col gap-3 px-6 py-6">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={16}
                      className={n <= t.rating ? "fill-rose text-rose" : "text-rosePale"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-heading">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2">
                  {t.photo ? (
                    <Image
                      src={urlForImage(t.photo).width(80).height(80).fit("crop").url()}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rosePale text-sm font-medium text-roseText">
                      {t.clientName.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-medium text-heading">{t.clientName}</p>
                    {(t.role || t.company) && (
                      <p className="text-xs text-mid">
                        {[t.role, t.company].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <TestimonialForm />
      </Reveal>
    </section>
  );
}
