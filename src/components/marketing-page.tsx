import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function MarketingPage({
  mainClassName,
  children,
}: {
  mainClassName: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal" className={mainClassName} tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
