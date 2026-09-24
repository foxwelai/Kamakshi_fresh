import Link from "next/link";
import { Logo } from "./brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-100 bg-brand-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-5 md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <span className="inline-flex rounded-2xl bg-white px-4 py-2.5">
            <Logo className="h-8" />
          </span>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-brand-200/60">
            Fresh vegetables for hotels &amp; restaurants — direct from the
            market, at market rates, on subscription.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-2 text-xs font-semibold text-brand-200/80 md:items-start">
          <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
            Delivery Partner App
          </span>
          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/account-deletion" className="transition hover:text-white">
            Account &amp; Data Deletion
          </Link>
        </nav>
        <div className="text-xs text-brand-200/60">
          <p className="font-semibold text-brand-200">www.kamakshifresh.com</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Kamakshi Fresh · A venture by the team
            behind Kamakshi Catering
          </p>
        </div>
      </div>
    </footer>
  );
}
