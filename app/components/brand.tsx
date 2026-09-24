import Image from "next/image";
import type { ReactNode } from "react";

/* ---------- Logo (official brand assets) ---------- */

export function LeafMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden
      width={740}
      height={740}
      className={`${className} object-contain`}
    />
  );
}

export function Logo({ className = "h-9 sm:h-10" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Kamakshi Fresh"
      width={2816}
      height={798}
      priority
      className={`${className} w-auto`}
    />
  );
}

/* ---------- Icons ---------- */

const ICON_PATHS: Record<string, ReactNode> = {
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2Zm5 13.9c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.4-.7-2.8-1.2-4.7-4-4.8-4.2-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.5.7 1.9.8 2 .1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.1.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.5.3 0 .2 0 .8-.2 1.5Z" fill="currentColor" />
  ),
  truck: (
    <path d="M3 5h11v10H3V5Zm11 3h4l3 3v4h-2a2.5 2.5 0 1 1-5 0h-4a2.5 2.5 0 1 1-5 0H3v-3m13.5 3.9a1 1 0 1 0 0 .1M7 15.9a1 1 0 1 0 0 .1" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
  ),
  tag: (
    <path d="m3 12 9-9h9v9l-9 9-9-9Zm13.5-5.5h.01M20 3l-1.5 1.5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  leafCheck: (
    <path d="M20 4S9 4 5.5 9.5C3 13.5 5 18 5 18s-.5 1.5-1 2m1-2s5.5 1 9-2c3.5-3 3-8 3-8M9 15l2 2 4.5-4.5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  refresh: (
    <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  headset: (
    <path d="M4 13a8 8 0 1 1 16 0m-16 0v3a2 2 0 0 0 2 2h1v-5H4Zm16 0v3a2 2 0 0 1-2 2h-1v-5h3Zm-3 6a3 3 0 0 1-3 3h-2" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  basket: (
    <path d="M5 10h14l-1.4 9a2 2 0 0 1-2 1.7H8.4a2 2 0 0 1-2-1.7L5 10Zm3 0 4-7 4 7M9.5 13.5v3.5m5-3.5v3.5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  clock: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  lock: (
    <path d="M6 10V7a6 6 0 1 1 12 0v3m-14 0h16v10H4V10Zm8 5v3" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  mail: (
    <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  trash: (
    <path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 13h6l1-13" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  arrowLeft: (
    <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {ICON_PATHS[name]}
    </svg>
  );
}
