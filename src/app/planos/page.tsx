import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MarketingPage } from "@/components/marketing-page";
import { getWhatsappUrl } from "@/lib/site-config";

const tiers = [
  {
    name: "Essencial",
    price: "Sob consulta",
    description: "Para comecar com captura e organizacao de XML.",
    features: [
      "Coletor com pacote de instalacao",
      "Painel de XMLs e importacao ZIP",
      "Suporte por canal definido no contrato",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "Sob consulta",
    description: "Para escritorios que precisam de monitoramento e escala.",
    features: [
      "Tudo do Essencial",
      "Painel de dispositivos e status",
      "Relatorios por periodo, CFOP e serie",
      "Prioridade no suporte",
    ],
    highlighted: true,
  },
  {
    name: "Gerenciado",
    price: "Sob consulta",
    description: "Implantacao completa e acompanhamento proximo.",
    features: [
      "Tudo do Profissional",
      "Implantacao assistida multi-empresa",
      "Playbook comercial para revenda",
      "Canal direto para incidentes",
    ],
    highlighted: false,
  },
];

export const metadata = {
  title: "Planos",
  description:
    "Planos para captura de XML, monitoramento e relatorios para contabilidade.",
};

export default function PlanosPage() {
  const whatsappUrl = getWhatsappUrl(
    "Ola! Quero uma proposta comercial do Microvil Contabil.",
  );

  return (
    <MarketingPage mainClassName="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
            Planos
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Escolha o nivel de operacao do seu escritorio
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Precos e limites sao definidos com voce. Abaixo esta a estrutura
            comercial sugerida para apresentar ao mercado.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-4xl border p-8 ${
                tier.highlighted
                  ? "border-sky-500/50 bg-white shadow-xl shadow-sky-500/10 dark:border-sky-400/30 dark:bg-slate-900/80"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"
              }`}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                  Mais escolhido
                </span>
              ) : null}
              <h2 className="text-xl font-semibold">{tier.name}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {tier.description}
              </p>
              <p className="mt-6 text-3xl font-semibold tracking-tight">
                {tier.price}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-slate-700 dark:text-slate-200">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Pedir proposta
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500 dark:text-slate-400">
          Valores dependem de numero de empresas, dispositivos e nivel de
          suporte.{" "}
          <Link href="/contato" className="font-semibold text-sky-600 dark:text-sky-400">
            Fale conosco
          </Link>{" "}
          para um diagnostico rapido.
        </p>
      </div>
    </MarketingPage>
  );
}
