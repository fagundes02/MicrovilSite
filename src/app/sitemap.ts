import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "",
    "/planos",
    "/contato",
    "/sobre",
    "/blog",
    "/blog/coleta-xml-automatica",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/blog" || path.startsWith("/blog/")
          ? 0.75
          : 0.7,
  }));
}
