"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  getAppUrl,
  getWhatsappUrl,
} from "@/lib/site-config";

const navItems = [
  { href: "/#problema", label: "Problema" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/#modulos", label: "Solucao" },
  { href: "/planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const appUrl = getAppUrl();
  const whatsappUrl = getWhatsappUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/microvil-logo-removebg-preview.png"
            alt="Microvil Contabil"
            width={48}
            height={48}
            priority
          />
          <div className="hidden min-[380px]:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Microvil
            </p>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Contabil
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={appUrl}
            className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/70 md:inline-flex lg:px-4"
          >
            Acessar sistema
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 sm:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 p-2.5 text-slate-700 dark:border-zinc-700 dark:text-zinc-100 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 dark:text-zinc-100 dark:hover:bg-zinc-800/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={appUrl}
              className="mt-2 rounded-xl border border-slate-200 px-3 py-3 text-center text-base font-semibold text-slate-800 dark:border-zinc-700 dark:text-zinc-100"
              onClick={() => setOpen(false)}
            >
              Acessar sistema
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-500 px-3 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

