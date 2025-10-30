import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontSize: 44,
          fontWeight: 600,
        }}
      >
        <div style={{ opacity: 0.7, fontSize: 20, marginBottom: 16 }}>
          Michael Aristarco
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1 }}>
          Fullstack Developer
        </div>
        <div style={{ marginTop: 10, fontSize: 28, opacity: 0.85 }}>
          AI Platforms • Electron • Web
        </div>
        <div style={{ marginTop: 32, fontSize: 20, opacity: 0.6 }}>
          www.aristar.it
        </div>
      </div>
    ),
    { ...size }
  )
}

