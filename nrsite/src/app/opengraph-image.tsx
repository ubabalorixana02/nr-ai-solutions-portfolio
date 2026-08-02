import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { SITE_NAME, SITE_ROLES } from "@/lib/site";

// Not edge runtime — reads the logo file from disk via fs, which needs Node.
export const alt = `${SITE_NAME} — ${SITE_ROLES.slice(0, 2).join(" · ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoPath = path.join(process.cwd(), "public/brand/logo-mark.png");
  const logoBase64 = fs.readFileSync(logoPath).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #163A70 0%, #8E4A5D 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "#FFF9F6",
            marginBottom: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={80} height={80} alt="" />
        </div>
        <div style={{ display: "flex", fontSize: 64, color: "#fff", fontWeight: 600 }}>
          Nolubabalo Rixana
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#E8B6C8", marginTop: 16 }}>
          {SITE_ROLES.slice(0, 3).join(" · ")}
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.75)", marginTop: 36 }}>
          {SITE_ROLES.slice(3).join(" · ")}
        </div>
      </div>
    ),
    { ...size }
  );
}
