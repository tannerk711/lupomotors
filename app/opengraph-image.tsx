import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lupo Motors — Sell Your Car Fast in the Pacific Northwest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          position: "relative",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at top right, rgba(74,93,35,0.12), transparent 60%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: "60px 80px",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              LUPO
            </span>
            <span
              style={{
                fontSize: 56,
                fontWeight: 300,
                color: "#C0C0C0",
                letterSpacing: "-0.02em",
              }}
            >
              MOTORS
            </span>
          </div>

          {/* Headline */}
          <span
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#F5F5F5",
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Get a Real Offer on Your Car in Minutes
          </span>

          {/* Subheadline */}
          <span
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 600,
            }}
          >
            From daily drivers to exotics. $10K–$150K. Cash in hand within
            24-48 hours.
          </span>

          {/* Badge row */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 16,
            }}
          >
            {[
              { value: "2-5 min", label: "Offers" },
              { value: "10+ yrs", label: "Experience" },
              { value: "500+", label: "Cars" },
              { value: "6 States", label: "Coverage" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#5C7A2E",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, #3B4A1C, #5C7A2E, #3B4A1C)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
