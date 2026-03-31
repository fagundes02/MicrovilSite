import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/marketing-page";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre captura de XML, operacao do coletor e boas praticas para contabilidades.",
  alternates: { canonical: `${getSiteUrl()}/blog` },
};

const posts = [
  {
    slug: "coleta-xml-automatica",
    title: "Coleta automatica de XML: o que contabilidades precisam saber",
    excerpt:
      "Como reduzir retrabalho, evitar perda de arquivos e manter o time alinhado com o coletor.",
    date: "2026-03-15",
  },
];

export default function BlogPage() {
  return (
    <MarketingPage mainClassName="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-slate-200 bg-white px-6 py-16 dark:border-white/10 dark:bg-slate-950 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Conteudo para sua operacao fiscal
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Dicas praticas sobre XML, coletor e processos — sem promessas
            irreais, foco em execucao.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-sky-500/30">
                <time
                  dateTime={post.date}
                  className="text-xs text-slate-500 dark:text-slate-500"
                >
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-slate-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
                >
                  Ler artigo
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </MarketingPage>
  );
}
