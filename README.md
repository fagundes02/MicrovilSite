Site institucional **Microvil Contabil** (landing + paginas legais + SEO basico).

## Configuracao

Copie `.env.example` para `.env.local` e preencha URLs, WhatsApp e e-mail reais.

- `NEXT_PUBLIC_SITE_URL` — URL publica do site (sitemap, Open Graph, robots)
- `NEXT_PUBLIC_APP_URL` — URL do painel ou `/`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — apenas digitos com DDI (ex: `5535990012345`)
- `NEXT_PUBLIC_CONTACT_EMAIL` — e-mail exibido no site
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` ou `NEXT_PUBLIC_GA_MEASUREMENT_ID` — analytics opcional

## Paginas

- `/` — landing
- `/planos` — planos comerciais
- `/contato` — contato
- `/sobre` — sobre
- `/blog` — listagem de artigos
- `/blog/coleta-xml-automatica` — primeiro artigo (exemplo)
- `/politica-de-privacidade` e `/termos-de-uso` — modelos legais (revise com advogado)
- `not-found` — pagina 404 com layout do site
- `/manifest.webmanifest` — PWA basico (nome, cores, icone)
- `/opengraph-image` — imagem OG gerada (compartilhamento em redes)

**SEO / dados estruturados:** JSON-LD (`Organization` + `WebSite`) no `layout`. **Headers:** `nosniff`, `Referrer-Policy`, `Permissions-Policy` em `next.config.mjs`.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
