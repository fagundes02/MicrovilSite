import { ImageResponse } from "next/og";

export const runtime = "edge";

function displayHost(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "microvilcontabil.com.br";
  try {
    return new URL(raw).hostname || "microvilcontabil.com.br";
  } catch {
    return "microvilcontabil.com.br";
  }
}

export const alt =
  "Microvil Contabil — captura de XML e monitoramento para contabilidades";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(145deg, #020617 0%, #0f172a 45%, #075985 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#f8fafc",
            lineHeight: 1.05,
            letterSpacing: -0.02,
            maxWidth: 980,
          }}
        >
          Microvil Contabil
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 400,
            color: "#bae6fd",
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          Captura automatica de XML, monitoramento do coletor e relatorios em
          uma unica plataforma.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            fontWeight: 600,
            color: "#38bdf8",
          }}
        >
          {displayHost()}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
