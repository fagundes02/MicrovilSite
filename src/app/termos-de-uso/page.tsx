import Link from "next/link";
import { MarketingPage } from "@/components/marketing-page";

export const metadata = {
  title: "Termos",
  description: "Termos de uso do site Microvil Contabil.",
};

export default function TermosPage() {
  return (
    <MarketingPage mainClassName="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-semibold tracking-tight">Termos de uso</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")}. Modelo
          informativo. Ajuste com seu advogado antes do uso oficial.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            1. Aceitacao
          </h2>
          <p>
            Ao acessar este site, voce concorda com estes termos. Se nao
            concordar, interrompa o uso.
          </p>

          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            2. Objeto
          </h2>
          <p>
            O site divulga informacoes sobre o Microvil Contabil e canais de
            contato. Contratos de software ou servicos seguem documentos
            especificos assinados entre as partes.
          </p>

          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            3. Uso permitido
          </h2>
          <p>
            E proibido usar o site para fins ilicitos, violar sistemas,
            extrair dados de forma abusiva ou prejudicar terceiros.
          </p>

          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            4. Propriedade intelectual
          </h2>
          <p>
            Textos, marcas e elementos visuais pertencem aos respectivos
            titulares. Nao copie ou distribua sem autorizacao.
          </p>

          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            5. Isencao e limitacao
          </h2>
          <p>
            O conteudo e apresentado como esta. Nao garantimos disponibilidade
            ininterrupta ou ausencia de erros. Decisoes fiscais e contabeis
            dependem de profissional habilitado.
          </p>

          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            6. Alteracoes
          </h2>
          <p>
            Podemos atualizar estes termos. A data no topo indica a revisao mais
            recente.
          </p>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/politica-de-privacidade" className="font-semibold text-sky-600 dark:text-sky-400">
            Politica de privacidade
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
