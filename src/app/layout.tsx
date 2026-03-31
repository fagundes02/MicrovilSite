import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl } from "@/lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Microvil Contabil",
    template: "%s | Microvil Contabil",
  },
  description:
    "Captura automatica de XML, monitoramento de dispositivos e relatorios para contabilidades e empresas.",
  keywords: [
    "Microvil",
    "contabil",
    "XML",
    "NFe",
    "NFC-e",
    "coletor",
    "monitoramento",
    "relatorios fiscais",
  ],
  icons: {
    icon: "/ico retaguarda.ico",
    shortcut: "/ico retaguarda.ico",
    apple: "/ico retaguarda.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Microvil Contabil",
    title: "Microvil Contabil",
    description:
      "Captura automatica de XML, monitoramento de dispositivos e relatorios para contabilidades e empresas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microvil Contabil",
    description:
      "Captura automatica de XML, monitoramento de dispositivos e relatorios para contabilidades e empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <a
            href="#conteudo-principal"
            className="sr-only rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:shadow-lg"
          >
            Pular para o conteudo
          </a>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
