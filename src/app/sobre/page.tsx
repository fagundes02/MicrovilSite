import Link from "next/link";
import { Target, Users, Zap } from "lucide-react";
import { MarketingPage } from "@/components/marketing-page";

export const metadata = {
  title: "Sobre",
  description:
    "Conheca a proposta do Microvil Contabil para captura de XML e gestao fiscal.",
};

export default function SobrePage() {
  return (
    <MarketingPage mainClassName="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
          Sobre
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Operacao fiscal com menos atrito e mais controle
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          O Microvil Contabil existe para ajudar escritorios e empresas a sair
          do modelo de cobranca manual de XML e entrar em um fluxo monitorado,
          com implantacao clara e painel unificado.
        </p>

        <div className="mt-12 space-y-8">
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Missao</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Reduzir retrabalho na coleta e conferencia de documentos fiscais
                eletronicos, com visibilidade operacional para quem gerencia
                muitos CNPJs.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Para quem</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Contabilidades que atendem varejo e servicos, empresas com varios
                pontos de emissao e equipes que precisam de previsibilidade no
                fechamento.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-600 dark:text-violet-400">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Diferencial</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Combina software, pacote de instalacao e narrativa comercial para
                voce vender nao so envio de arquivo, mas operacao completa.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/planos" className="font-semibold text-sky-600 dark:text-sky-400">
            Ver planos
          </Link>{" "}
          ou{" "}
          <Link href="/contato" className="font-semibold text-sky-600 dark:text-sky-400">
            falar com a gente
          </Link>
          .
        </p>
      </div>
    </MarketingPage>
  );
}
