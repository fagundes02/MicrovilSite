import { getContactEmail, getSiteUrl } from "@/lib/site-config";

export function JsonLd() {
  const url = getSiteUrl();
  const email = getContactEmail();

  const graph = [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: "Microvil Contabil",
      url,
      description:
        "Captura automatica de XML, monitoramento de dispositivos e relatorios para contabilidades e empresas.",
      ...(email ? { email } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: "Microvil Contabil",
      url,
      publisher: { "@id": `${url}/#organization` },
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
