import Link from "next/link";
import { MarketingPage } from "@/components/marketing-page";

export const metadata = {
  title: "Politica de privacidade",
  description:
    "Politica de privacidade e tratamento de dados do site Microvil Contabil.",
};

export default function PoliticaPage() {
  return (
    <MarketingPage mainClassName="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-semibold tracking-tight">
          Politica de privacidade
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")}. Este
          texto e um modelo informativo. Revise com assessoria juridica antes de
          publicar em producao.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            1. Quem somos
          </h2>
          <p>
            O site Microvil Contabil apresenta produtos e servicos relacionados
            a captura e gestao de documentos fiscais eletronicos. O responsavel
            pelo tratamento dos dados coletados por este site deve ser indicado
            em contrato ou aviso legal especifico da sua empresa.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            2. Dados que podemos coletar
          </h2>
          <p>
            Ao usar formularios, WhatsApp ou e-mail, podemos receber nome,
            telefone, e-mail, mensagem e dados enviados voluntariamente. Ferramentas
            de analytics, se ativadas, podem coletar dados de uso anonimizados
            conforme a politica do provedor escolhido.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            3. Finalidade
          </h2>
          <p>
            Utilizamos os dados para responder solicitacoes, agendar
            demonstracoes, enviar propostas comerciais e melhorar o site, sempre
            com base legal aplicavel e retencao compativel com a finalidade.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            4. Compartilhamento
          </h2>
          <p>
            Dados podem ser compartilhados com prestadores de servico
            essenciais, como hospedagem, e-mail e analytics, mediante contratos
            e boas praticas de seguranca. Nao vendemos dados pessoais.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            5. Seus direitos
          </h2>
          <p>
            Nos termos da LGPD, voce pode solicitar confirmacao de tratamento,
            acesso, correcao, anonimizacao, portabilidade ou eliminacao, quando
            aplicavel. Entre em contato pelos canais indicados na pagina de
            contato.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
            6. Cookies
          </h2>
          <p>
            O site pode usar cookies ou tecnologias similares para funcionamento,
            preferencias de tema ou metricas. Voce pode gerenciar cookies no seu
            navegador.
          </p>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/contato" className="font-semibold text-sky-600 dark:text-sky-400">
            Contato
          </Link>
          {" · "}
          <Link href="/" className="font-semibold text-sky-600 dark:text-sky-400">
            Inicio
          </Link>
        </p>
      </article>
    </MarketingPage>
  );
}
