import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Microvil Contabil",
    short_name: "Microvil",
    description:
      "Captura automatica de XML, monitoramento de dispositivos e relatorios para contabilidades e empresas.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0ea5e9",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
