import { ImageResponse } from "next/og";

export const alt =
  "Yalla Fundraising — fundraising counsel for Jewish & Israel-connected nonprofits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE = "https://yallafundraising.com";

// Force Google Fonts to serve a Satori-compatible TTF (woff2 isn't supported)
// by using an old user-agent string.
async function loadFraunces(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      },
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const fraunces = await loadFraunces();
  const display = fraunces ? "Fraunces" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf6ec",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            width: "740px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 60px",
            // warm terracotta glow in the top-right of the panel
            backgroundImage:
              "radial-gradient(60% 60% at 95% 0%, rgba(196,88,60,0.12), transparent 60%)",
          }}
        >
          {/* wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "13px",
                background: "#c4583c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: display,
                fontSize: "34px",
                color: "#fbf6ec",
                fontWeight: 600,
              }}
            >
              Y
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: display,
                fontSize: "30px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "#1c2a37" }}>Yalla&nbsp;</span>
              <span style={{ color: "#c4583c" }}>Fundraising</span>
            </div>
          </div>

          {/* headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: display,
              fontWeight: 600,
              fontSize: "68px",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#1c2a37",
            }}
          >
            <div style={{ display: "flex" }}>Raise more.</div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span>Build a board that&nbsp;</span>
              <span style={{ color: "#c4583c" }}>gives.</span>
            </div>
            <div style={{ display: "flex" }}>Run a campaign that lasts.</div>
          </div>

          {/* subline */}
          <div
            style={{
              display: "flex",
              fontSize: "25px",
              lineHeight: 1.3,
              color: "#43525d",
              maxWidth: "600px",
            }}
          >
            Fundraising counsel for Jewish &amp; Israel-connected nonprofits —
            from someone who has sat in the development chair.
          </div>
        </div>

        {/* Right: portrait with terracotta edge */}
        <div style={{ display: "flex", width: "460px", height: "100%" }}>
          <div style={{ display: "flex", width: "10px", background: "#c4583c" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SITE}/images/sharon-headshot.jpeg`}
            alt="Sharon Weiss-Greenberg"
            width={450}
            height={630}
            style={{ width: "450px", height: "630px", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, weight: 600, style: "normal" }]
        : [],
    },
  );
}
