import {
  Activity,
  ArrowRight,
  Blocks,
  Building2,
  CheckCircle2,
  CircleDashed,
  FileBarChart2,
  FileCode2,
  FolderSync,
  MessageSquareMore,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { MarketingPage } from "@/components/marketing-page";
import { getContactEmail, getWhatsappUrl } from "@/lib/site-config";

const problems = [
  {
    title: "XML chegando manualmente e fora do prazo.",
    description:
      "Quando a empresa precisa lembrar de enviar arquivo por arquivo, o escritorio perde tempo cobrando e conferindo documentos.",
  },
  {
    title: "Sem visao clara de quem esta enviando ou parou de enviar.",
    description:
      "Sem monitoramento do coletor, o problema so aparece quando falta XML na apuracao ou no fechamento.",
  },
  {
    title: "Planilhas e pastas soltas nao escalam a operacao fiscal.",
    description:
      "Importacao manual, retrabalho e pouca rastreabilidade travam o crescimento do escritorio e da sua equipe.",
  },
];

const method = [
  "Implantacao com pacote de instalacao por empresa e configuracao pronta.",
  "Coletor local monitora pastas de notas e eventos automaticamente.",
  "XMLs sao enviados, processados e vinculados a empresa correta.",
  "Painel web mostra dispositivos, status de envio e fila pendente.",
  "Relatorios consolidam periodo, modelo, CFOP, serie e cancelamentos.",
];

const modules = [
  {
    eyebrow: "Coletor de XML",
    title: "Envio automatico direto do ambiente do cliente.",
    description:
      "Instalacao simples com token por empresa, monitoramento de pasta local e processamento continuo de NF-e e NFC-e.",
    bullets: [
      "Pacote de instalacao com configuracao pronta",
      "Captura automatica de XML e eventos",
      "Importacao manual por ZIP quando precisar",
    ],
  },
  {
    eyebrow: "Painel de monitoramento",
    title: "Visibilidade real sobre a operacao de cada empresa.",
    description:
      "Acompanhe dispositivos online e offline, ultima comunicacao, versao instalada e possiveis erros de envio.",
    bullets: [
      "Status online e offline dos dispositivos",
      "Fila pendente e ultima atualizacao",
      "Acompanhamento centralizado por empresa",
    ],
  },
  {
    eyebrow: "Relatorios contabeis",
    title: "Conferencia rapida para escritorio e empresa.",
    description:
      "Transforme XMLs importados em visao gerencial e fiscal para reduzir retrabalho e acelerar analises.",
    bullets: [
      "Totais por periodo, modelo e serie",
      "Resumo por CFOP e notas canceladas",
      "Consulta e exportacao de informacoes",
    ],
  },
];

const results = [
  "Menos cobranca manual de XML",
  "Mais controle sobre empresas ativas",
  "Reducao de retrabalho na importacao",
  "Rastreabilidade do envio por dispositivo",
];

const highlights = [
  {
    title: "Implantacao por empresa",
    description: "Pacote pronto com token, configuracao e ativacao mais rapida.",
    icon: FolderSync,
  },
  {
    title: "Monitoramento em tempo real",
    description: "Status do coletor, ultima comunicacao e fila pendente em um painel unico.",
    icon: Activity,
  },
  {
    title: "Relatorios para decisao",
    description: "Periodo, modelo, serie, CFOP e notas canceladas com leitura simples.",
    icon: FileBarChart2,
  },
];

const audience = [
  {
    title: "Escritorios contabeis",
    description:
      "Para quem precisa reduzir cobranca manual de XML e ganhar visibilidade sobre os clientes.",
    icon: Building2,
  },
  {
    title: "Empresas com varias maquinas",
    description:
      "Para quem precisa controlar o envio de XML entre lojas, PDVs ou dispositivos locais.",
    icon: MonitorSmartphone,
  },
  {
    title: "Operacao fiscal com volume",
    description:
      "Para quem quer menos improviso operacional e mais previsibilidade no fechamento.",
    icon: FileCode2,
  },
];

const differentials = [
  {
    title: "Venda software + servico",
    description:
      "O produto permite empacotar implantacao, suporte e monitoramento como oferta recorrente.",
    icon: Blocks,
  },
  {
    title: "Experiencia pronta para demonstracao",
    description:
      "Landing, narrativa comercial e CTA organizados para parecer uma solucao madura.",
    icon: Sparkles,
  },
  {
    title: "Fluxo rastreavel de ponta a ponta",
    description:
      "Do PC do cliente ao escritorio, tudo fica mais claro para operacao e suporte.",
    icon: Workflow,
  },
  {
    title: "Base confiavel para crescer",
    description:
      "Tema dark/light, identidade visual consistente e estrutura pronta para novas paginas.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "O que e o Microvil Contabil?",
    answer:
      "E uma plataforma para capturar XML automaticamente, monitorar o coletor instalado nos clientes e centralizar relatorios para escritorio e empresa.",
  },
  {
    question: "Precisa instalar algo no computador do cliente?",
    answer:
      "Sim. O cliente recebe um pacote de instalacao com configuracao pronta para conectar o coletor ao sistema.",
  },
  {
    question: "O sistema mostra quando uma empresa parou de enviar?",
    answer:
      "Sim. O painel de dispositivos ajuda a identificar quedas, falta de comunicacao e fila pendente por empresa.",
  },
  {
    question: "Posso importar XML manualmente tambem?",
    answer:
      "Sim. Alem da captura automatica, voce pode enviar XMLs manualmente e importar arquivos ZIP para processamento.",
  },
];

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const whatsappUrl = getWhatsappUrl();
  const contactEmail = getContactEmail();

  return (
    <MarketingPage mainClassName="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_32%),linear-gradient(180deg,#eff6ff_0%,#ffffff_42%,#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.08),transparent_32%),linear-gradient(180deg,#18181b_0%,#18181b_45%,#111827_100%)] dark:text-white">
      <section className="overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-200">
              <CircleDashed className="h-3.5 w-3.5" />
              Plataforma para contabilidades e empresas
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Captura automatica de XML, monitoramento do coletor e relatorios
              em uma unica plataforma.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              O Microvil Contabil centraliza o envio de XML das empresas,
              acompanha dispositivos em tempo real e entrega visao fiscal para o
              escritorio agir com mais controle e menos retrabalho.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Instalacao assistida
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Monitoramento continuo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Operacao preparada para crescer
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Agendar demonstracao
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#modulos"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-800/70"
              >
                Conhecer a solucao
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:shadow-[0_10px_40px_rgba(2,6,23,0.25)]"
                  >
                    <span className="inline-flex rounded-2xl border border-sky-200 bg-sky-50 p-2.5 text-sky-700 dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-4xl bg-sky-300/40 blur-3xl dark:bg-zinc-800/30" />
            <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:shadow-[0_20px_70px_rgba(2,6,23,0.45)]">
              <div className="flex items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200">
                    Operacao fiscal
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Microvil Contabil
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Coletor ativo
                </span>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-950 dark:text-white">
                          Da pasta local ao painel web
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          Instalacao com pacote pronto, token por empresa e envio
                          automatico de XML para centralizacao da operacao.
                        </p>
                      </div>
                      <span className="inline-flex rounded-2xl border border-sky-200 bg-sky-50 p-2 text-sky-700 dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-200">
                        <FolderSync className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Status operacional
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-300">Dispositivo</p>
                        <p className="mt-1 font-medium text-slate-950 dark:text-white">
                          PDV-Loja-01
                        </p>
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-300">
                          Último heartbeat
                        </p>
                        <p className="mt-1 font-medium text-emerald-600 dark:text-emerald-300">
                          há 32s
                        </p>
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-300">Fila pendente</p>
                        <p className="mt-1 font-medium text-slate-950 dark:text-white">
                          0 XMLs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Monitoramento
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                      24/7
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Online, offline, fila pendente e ultima atualizacao.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Implantacao
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                      Rapida
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Pacote configurado para cada empresa e dispositivo.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-400/20 dark:bg-sky-400/10">
                  <p className="text-sm font-semibold text-sky-700 dark:text-sky-200">
                    Fluxo completo
                  </p>
                  <p className="mt-2 text-sm leading-6 text-sky-800 dark:text-sky-100/90">
                    Coleta automatica, processamento de XML, acompanhamento do
                    status e relatorios consolidados para o escritorio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/70 dark:border-zinc-700/70 dark:bg-slate-950/40">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-6 lg:grid-cols-4 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-zinc-700/70 dark:bg-zinc-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Modelo comercial
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
              Software + implantacao
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-zinc-700/70 dark:bg-zinc-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Operacao
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
              Coleta e controle centralizados
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-zinc-700/70 dark:bg-zinc-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Entrega
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
              Painel + monitoramento + relatorios
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-zinc-700/70 dark:bg-zinc-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Foco
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
              Crescimento com previsibilidade
            </p>
          </div>
        </div>
      </section>

      <section id="problema" className="border-y border-slate-200 bg-white/70 dark:border-zinc-700/70 dark:bg-slate-950/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="O problema que resolvemos"
            title="Escritorios e empresas perdem controle quando o XML depende de processos manuais."
            description="O problema nao e so receber arquivo. O desafio esta em implantar, monitorar, conferir e agir rapido quando algo para de funcionar."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item.title}
                className="rounded-4xl border border-slate-200 bg-slate-50 p-8 backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/60"
              >
                <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="Para quem e"
            title="Posicionamento claro para vender melhor."
            description="A pagina agora conversa com quem realmente sente a dor operacional do XML e precisa de uma solucao com cara de produto serio."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:shadow-[0_20px_50px_rgba(2,6,23,0.25)]"
                >
                  <span className="inline-flex rounded-2xl border border-sky-200 bg-sky-50 p-3 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="Metodo"
            title="Do ambiente do cliente ao escritorio, com um fluxo simples e rastreavel."
            description="Inspirado em uma operacao comercial clara: implantacao, captura, processamento, monitoramento e gestao."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {method.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/60"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="Diferenciais"
            title="O que deixa a apresentacao mais profissional."
            description="Nao e so uma landing bonita. E uma narrativa que posiciona o Microvil Contabil como solucao comercializavel."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-4xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:shadow-[0_20px_50px_rgba(2,6,23,0.25)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex rounded-2xl border border-sky-200 bg-sky-50 p-3 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="modulos" className="bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="Produtos e servicos"
            title="Tudo que sua operacao fiscal precisa em um so lugar."
            description="O Microvil Contabil combina software, implantacao e visibilidade operacional para vender mais do que simples envio de XML."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="flex h-full flex-col rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:shadow-[0_20px_50px_rgba(2,6,23,0.3)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
                  {module.eyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {module.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/70">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              Na pratica
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Um fluxo comercial claro para vender a transformacao, nao apenas
              a ferramenta.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              O cliente instala o coletor, os XMLs entram automaticamente na
              plataforma e o escritorio acompanha tudo em um painel unico com
              mais rastreabilidade e menos friccao.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Lead ou cliente contrata implantacao e ativacao do coletor.",
              "Pacote de instalacao e configuracao sao gerados para cada empresa.",
              "Dispositivo monitora as pastas locais e envia XMLs automaticamente.",
              "Painel mostra status operacional e relatorios para conferencia.",
            ].map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-900/60"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="Resultados"
            title="O que muda com o Microvil Contabil."
            description="Mais previsibilidade operacional para quem implanta, monitora e depende dos XMLs certos no momento certo."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-zinc-700/70 dark:bg-zinc-900/60"
              >
                <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-slate-200 bg-slate-50 dark:border-zinc-700/70 dark:bg-slate-900/70">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
          <SectionTitle
            label="FAQ"
            title="Perguntas frequentes"
            description="Respostas objetivas para apresentar o produto com clareza comercial."
          />

          <div className="mt-14 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 dark:border-zinc-700/70 dark:bg-zinc-900/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950 marker:hidden dark:text-white">
                  <span>{item.question}</span>
                  <MessageSquareMore className="h-5 w-5 text-slate-400 transition group-open:rotate-180 dark:text-slate-500" />
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/5 px-8 py-12 md:px-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Vamos conversar
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Transforme o envio de XML em uma operacao monitorada,
                  escalavel e comercializavel.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Venda implantacao, software e monitoramento em uma unica
                  oferta. O site ja nasce preparado para isso.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Agendar demonstracao
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}

