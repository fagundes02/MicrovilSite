import Link from "next/link";
import { MarketingPage } from "@/components/marketing-page";

export default function NotFound() {
  return (
    <MarketingPage mainClassName="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
      <p className="text-7xl font-bold text-slate-200 dark:text-slate-800">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
        Pagina nao encontrada
      </h1>
      <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
        O link pode estar incorreto ou a pagina foi movida. Verifique o endereco
        ou volte ao inicio.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      >
        Voltar ao inicio
      </Link>
    </MarketingPage>
  );
}
