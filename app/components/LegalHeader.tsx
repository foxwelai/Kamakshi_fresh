import Link from "next/link";
import { Icon, Logo } from "./brand";

export function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:h-[72px] sm:px-5">
        <Link href="/" aria-label="Kamakshi Fresh home">
          <Logo className="h-8 sm:h-9" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 transition hover:text-brand-500 sm:text-sm"
        >
          <Icon name="arrowLeft" className="h-4 w-4" />
          Back to site
        </Link>
      </div>
    </header>
  );
}
