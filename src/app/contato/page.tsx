import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { MarketingPage } from "@/components/marketing-page";
import {
  getContactEmail,
  getWhatsappUrl,
} from "@/lib/site-config";

export const metadata = {
  title: "Contato",
  description: "Entre em contato com a equipe Microvil Contabil.",
};

export default function ContatoPage() {
  const email = getContactEmail();
  const whatsappUrl = getWhatsappUrl();

  return (
    <MarketingPage mainClassName="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
          Contato
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Vamos conversar sobre sua operacao fiscal
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Agende uma demonstracao, peca uma proposta ou tire duvidas sobre
          implantacao e monitoramento de XML.
        </p>

        <div className="mt-12 space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Resposta rapida para demo e proposta
              </p>
            </div>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-200/80 text-slate-700 dark:bg-white/10 dark:text-slate-300">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">Atendimento</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Brasil. Horario comercial combinado apos o primeiro contato.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
          Voltar para a{" "}
          <Link href="/" className="font-semibold text-sky-600 dark:text-sky-400">
            pagina inicial
          </Link>{" "}
          ou ver{" "}
          <Link href="/planos" className="font-semibold text-sky-600 dark:text-sky-400">
            planos
          </Link>
          .
        </p>
      </div>
    </MarketingPage>
  );
}
