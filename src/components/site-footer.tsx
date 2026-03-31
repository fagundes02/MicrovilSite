import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const legal = [
  { href: "/politica-de-privacidade", label: "Privacidade" },
  { href: "/termos-de-uso", label: "Termos" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 text-sm text-slate-500 dark:text-slate-400 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/microvil-logo-removebg-preview.png"
              alt="Microvil Contabil"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">
                Microvil Contabil
              </p>
              <p className="mt-1 max-w-sm">
                Captura automatica de XML, monitoramento de dispositivos e
                relatorios para contabilidades e empresas.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:justify-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Site
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/planos"
                    className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Legal
              </p>
              <ul className="mt-3 space-y-2">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-slate-200 pt-8 text-xs dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Microvil Contabil. Todos os direitos reservados.</p>
          <p className="text-slate-400 dark:text-slate-500">
            Dados fiscais exigem cuidado. Revise politicas com seu advogado.
          </p>
        </div>
      </div>
    </footer>
  );
}
