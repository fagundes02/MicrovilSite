/**
 * Configure via .env.local (see .env.example).
 * Valores default permitem rodar localmente sem configurar nada.
 */

function stripNonDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "http://localhost:3000";
}

export function getAppUrl(): string {
  const url = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "/";
}

export function getContactEmail(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    "contato@microvilcontabil.com.br"
  );
}

/** Apenas digitos, ex: 5535990012345 */
export function getWhatsappDigits(): string {
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "5511999999999";
  return stripNonDigits(raw);
}

export function getWhatsappUrl(message?: string): string {
  const phone = getWhatsappDigits();
  const base = `https://wa.me/${phone}`;
  const text =
    message?.trim() ||
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    "Ola! Quero agendar uma demonstracao do Microvil Contabil.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getPlausibleDomain(): string | null {
  const d = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  return d || null;
}

export function getGaMeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return id || null;
}
