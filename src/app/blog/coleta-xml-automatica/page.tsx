import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/marketing-page";
import { getSiteUrl } from "@/lib/site-config";

const canonical = `${getSiteUrl()}/blog/coleta-xml-automatica`;

export const metadata: Metadata = {
  title: "Coleta automatica de XML",
  description:
    "Checklist para contabilidades: padronizar pastas, monitorar o coletor e nao depender de e-mail para receber XML.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    publishedTime: "2026-03-15T12:00:00-03:00",
  },
};

export default function BlogPostColetaXmlPage() {
  return (
    <MarketingPage mainClassName="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          <Link
            href="/blog"
            className="font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400"
          >
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Operacao</span>
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Coleta automatica de XML: o que contabilidades precisam saber
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Publicado em 15 de marco de 2026
        </p>
        <div className="prose prose-slate mt-10 max-w-none space-y-6 text-slate-700 dark:prose-invert dark:text-slate-300">
          <p>
            A dor nao e so &quot;baixar XML&quot;. E garantir que nada se perca,
            que o time saiba onde esta cada arquivo e que o cliente nao precise
            lembrar de enviar nota por e-mail toda semana.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            1. Padronize destino e nomenclatura
          </h2>
          <p>
            Defina pastas por CNPJ, por competencia ou por filial — o importante
            e ser repetivel. Quem entra novo no time precisa entender o mapa em
            minutos, nao em dias.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            2. Monitore o coletor, nao so o resultado
          </h2>
          <p>
            Maquina desligada, antivirus bloqueando pasta ou certificado
            expirado geram buracos silenciosos. Ter visao de dispositivo e
            status reduz surpresa na entrega do fechamento.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            3. Relatorios para cliente e interno
          </h2>
          <p>
            Exportar um resumo por periodo ajuda o cliente a confiar no processo
            e o escritorio a provar entrega. Transparencia vira retencao.
          </p>
          <p>
            O Microvil Contabil foi pensado para esse fluxo: captura, painel e
            exportacao. Se quiser ver na pratica,{" "}
            <Link
              href="/contato"
              className="font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
            >
              fale com a gente
            </Link>
            .
          </p>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-white/10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
          >
            Voltar ao blog
          </Link>
        </div>
      </article>
    </MarketingPage>
  );
}
