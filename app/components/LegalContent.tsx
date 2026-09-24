import type { ReactNode } from "react";
import { Icon } from "./brand";

export function LegalHero({
  eyebrow,
  title,
  updated,
}: {
  eyebrow: string;
  title: string;
  updated: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-5 sm:pt-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
        {eyebrow}
      </span>
      <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm font-medium text-brand-800/60">
        Last updated: {updated}
      </p>
    </div>
  );
}

export function LegalToc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="mx-auto mb-10 max-w-3xl px-4 sm:px-5">
      <details className="group rounded-2xl border border-brand-100 bg-brand-50/60 open:pb-2 sm:open:pb-3">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-bold text-brand-800">
          On this page
          <span className="text-brand-500 transition group-open:rotate-180">
            <Icon name="arrowLeft" className="h-4 w-4 -rotate-90" />
          </span>
        </summary>
        <ol className="grid gap-1 px-5 pb-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-lg px-2 py-1.5 text-sm text-brand-700/80 transition hover:bg-white hover:text-brand-700"
              >
                {i + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-brand-100 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-extrabold tracking-tight text-brand-950 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-brand-800/80">
        {children}
      </div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-2 text-base font-bold text-brand-900">{children}</h3>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalEmail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 transition hover:text-brand-700 hover:decoration-brand-400"
    >
      {address}
    </a>
  );
}

export function LegalCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[13px] text-brand-700">
      {children}
    </code>
  );
}

export function LegalPlaceholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-amber-50 px-1.5 py-0.5 italic text-amber-700 ring-1 ring-amber-200">
      {children}
    </span>
  );
}

export function LegalCallout({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-bold text-brand-900">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-brand-800/75">
          {children}
        </div>
      </div>
    </div>
  );
}
