"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ---------- Scroll-reveal helper ---------- */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
  from = "translate-y-10",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        inView ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${from}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Logo (official brand assets) ---------- */

function LeafMark({ className = "h-9 w-9" }: { className?: string }) {
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

function Logo({ className = "h-9 sm:h-10" }: { className?: string }) {
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

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
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
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}

/* ---------- Launching Soon modal ---------- */

function LaunchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Launching soon"
    >
      <div
        className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-2xl animate-pop-in">
        <div className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 pb-8 pt-8 text-center sm:px-8 sm:pb-10 sm:pt-9">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10" />
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <LeafMark className="h-12 w-12" />
            </span>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-brand-100">
            Kamakshi Fresh
          </p>
          <h3 className="mt-2 text-3xl font-extrabold text-white">
            Launching Soon
          </h3>
        </div>
        <div className="px-6 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-sm leading-relaxed text-brand-800/80">
            We&apos;re busy loading the crates. Very soon your hotel or
            restaurant will get market-fresh vegetables — ordered on WhatsApp,
            priced at daily market rates, delivered to your door.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
            WhatsApp ordering &amp; subscriptions open shortly
          </div>
          <button
            onClick={onClose}
            className="btn-shine mt-6 w-full rounded-full bg-brand-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-800 active:scale-[0.98]"
          >
            Got it — can&apos;t wait!
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Content ---------- */

const features = [
  {
    icon: "whatsapp",
    title: "WhatsApp Ordering",
    text: "No apps to learn. Your chef sends tomorrow's list on WhatsApp and it's confirmed in minutes — as easy as messaging a friend.",
  },
  {
    icon: "refresh",
    title: "Daily Price Updates",
    text: "Live market rates shared with you every day. Total transparency — you always know exactly what you're paying and why.",
  },
  {
    icon: "tag",
    title: "True Market Rates",
    text: "We buy directly from the wholesale market, so you pay real market prices. No middlemen stacking margins on your produce.",
  },
  {
    icon: "truck",
    title: "Direct Door Delivery",
    text: "From the market straight to your kitchen door, every morning. Your team starts prep on time, every time.",
  },
  {
    icon: "leafCheck",
    title: "Highest Quality, Zero Damage",
    text: "Hand-picked, carefully graded and handled like it's for our own kitchen — because it was, for 15+ years of catering.",
  },
  {
    icon: "headset",
    title: "Direct Support",
    text: "A real person on the other end. Wrong item, short supply, urgent add-on? One message and it's handled.",
  },
];

const steps = [
  {
    icon: "shield",
    step: "01",
    title: "Subscribe",
    text: "Your hotel or restaurant joins Kamakshi Fresh on a simple subscription. That's the only fee — vegetables stay at market rate.",
  },
  {
    icon: "whatsapp",
    step: "02",
    title: "Order on WhatsApp",
    text: "Send your daily requirement on WhatsApp. Get the day's prices, confirm your list, done.",
  },
  {
    icon: "basket",
    step: "03",
    title: "We Pick the Best",
    text: "Our team hand-selects the freshest produce at the wholesale market at dawn — graded, weighed and packed with zero damage.",
  },
  {
    icon: "truck",
    step: "04",
    title: "Delivered to Your Door",
    text: "Fresh stock reaches your kitchen before service prep begins. No trips to the market, no wastage, no surprises.",
  },
];

const trustItems = [
  { icon: "shield", label: "Subscription-based supply" },
  { icon: "tag", label: "True market-rate pricing" },
  { icon: "truck", label: "Direct from wholesale market" },
  { icon: "leafCheck", label: "Zero damage, zero wastage" },
  { icon: "whatsapp", label: "Order in one WhatsApp message" },
  { icon: "refresh", label: "Prices updated every morning" },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);

  return (
    <main className="flex-1 overflow-x-clip">
      <LaunchModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-5">
          <a href="#top" aria-label="Kamakshi Fresh home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-brand-800 md:flex">
            <a href="#how" className="transition hover:text-brand-500">How It Works</a>
            <a href="#why" className="transition hover:text-brand-500">Why Us</a>
            <a href="#story" className="transition hover:text-brand-500">Our Story</a>
          </nav>
          <button
            onClick={openModal}
            className="btn-shine rounded-full bg-brand-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-800 active:scale-[0.97] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get Early Access
          </button>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#e0f5e6_0%,transparent_55%)]" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-5 sm:pt-16 md:grid-cols-2 md:gap-14 md:pb-28 md:pt-24">
          <div className="animate-rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-2 w-2 rounded-full bg-brand-500 animate-pulse-ring" />
                <span className="h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Launching Soon
            </span>
            <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-[3.4rem]">
              Market-fresh vegetables,{" "}
              <span className="hero-accent text-brand-500">delivered</span> to
              your kitchen door.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-800/75 sm:text-lg">
              Kamakshi Fresh supplies hotels and restaurants with the
              highest-quality vegetables at true market rates — ordered on
              WhatsApp, priced fresh daily, and delivered directly from the
              market. One simple subscription. Zero wastage.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                onClick={openModal}
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand-700/25 transition hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/30 active:scale-[0.97]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Order on WhatsApp
              </button>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-200 bg-white px-7 py-[14px] text-base font-bold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 active:scale-[0.97]"
              >
                View Subscription Plans
              </button>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["15+", "Years in food service"],
                ["Daily", "Market price updates"],
                ["0%", "Damage & wastage"],
              ].map(([num, label], i) => (
                <Reveal key={label} delay={i * 120}>
                  <p className="text-2xl font-extrabold text-brand-700">{num}</p>
                  <p className="mt-1 text-xs font-medium leading-snug text-brand-800/60">
                    {label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hero visual: WhatsApp order mockup */}
          <div className="relative mx-auto w-full max-w-sm animate-rise-in pt-4 md:pt-0" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-200/70 to-brand-100/30 blur-xl" />
            <div className="relative rounded-[2rem] border border-brand-100 bg-white p-4 shadow-2xl shadow-brand-900/10 sm:p-5">
              <div className="flex items-center gap-3 border-b border-brand-50 pb-4">
                <LeafMark className="h-11 w-11" />
                <div>
                  <p className="text-sm font-bold text-brand-950">Kamakshi Fresh</p>
                  <p className="flex items-center gap-1.5 text-xs font-medium text-brand-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> online · replies instantly
                  </p>
                </div>
                <Icon name="whatsapp" className="ml-auto h-6 w-6 text-brand-500" />
              </div>
              <div className="space-y-3 py-4 text-[13px] leading-relaxed">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-50 px-4 py-2.5 text-brand-900 animate-bubble-in" style={{ animationDelay: "0.7s" }}>
                  Good morning! 🌱 Today&apos;s rates: Tomato ₹28/kg · Onion ₹28/kg · Beans ₹52/kg · Capsicum ₹60/kg
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-white animate-bubble-in" style={{ animationDelay: "1.3s" }}>
                  Tomato 25kg, Onion 40kg, Beans 10kg, Coriander 3kg for tomorrow 👍
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-50 px-4 py-2.5 text-brand-900 animate-bubble-in" style={{ animationDelay: "1.9s" }}>
                  Confirmed ✅ Hand-picked at the market tonight — at your kitchen door by 7 AM.
                </div>
              </div>
              <button
                onClick={openModal}
                className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white transition hover:bg-brand-600 active:scale-[0.98]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Start Ordering
              </button>
            </div>
            <div className="absolute -top-1 right-0 animate-float-slow rounded-2xl border border-brand-100 bg-white px-3.5 py-2.5 shadow-xl shadow-brand-900/10 sm:-right-4 sm:-top-5 sm:px-4 sm:py-3">
              <p className="flex items-center gap-2 text-xs font-bold text-brand-700">
                <Icon name="clock" className="h-4 w-4 text-brand-500" />
                Delivered by 7:00 AM
              </p>
            </div>
            <div className="absolute -bottom-4 left-0 animate-float-slow rounded-2xl border border-brand-100 bg-white px-3.5 py-2.5 shadow-xl shadow-brand-900/10 sm:-bottom-5 sm:-left-4 sm:px-4 sm:py-3" style={{ animationDelay: "1.2s" }}>
              <p className="flex items-center gap-2 text-xs font-bold text-brand-700">
                <Icon name="leafCheck" className="h-4 w-4 text-brand-500" />
                Fresh from today&apos;s market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trust marquee ---------- */}
      <section className="marquee-group border-y border-brand-100 bg-brand-50/60 py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...trustItems, ...trustItems].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700/80"
              >
                <Icon name={item.icon} className="h-4 w-4 text-brand-500" />
                {item.label}
                <span className="ml-8 h-1 w-1 rounded-full bg-brand-300" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            From the market to your kitchen, in four simple steps
          </h2>
          <p className="mt-4 text-brand-800/70">
            We&apos;ve stripped away everything that makes produce sourcing
            painful — the haggling, the quality lottery, the early-morning
            market runs. What&apos;s left is simple.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 110}>
              <div className="group relative h-full rounded-3xl border border-brand-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl">
                <span className="absolute right-6 top-6 text-4xl font-extrabold text-brand-100 transition group-hover:text-brand-200">
                  {s.step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-800/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Why us / features ---------- */}
      <section id="why" className="relative bg-brand-950 py-16 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1b5431_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
              Why Kamakshi Fresh
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Technology-driven supply, with a caterer&apos;s eye for quality
            </h2>
            <p className="mt-4 text-brand-200/80">
              We&apos;ve bought vegetables for thousands of plates a day. Now we
              bring that same obsession with freshness to your kitchen.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 110}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400">
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-200/75">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Story / About ---------- */}
      <section id="story" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <Reveal from="-translate-x-10" className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-100/50 blur-2xl" />
            <div className="relative">
              <div className="group relative overflow-hidden rounded-[2rem] border border-brand-100 shadow-2xl shadow-brand-900/15">
                <Image
                  src="/chaitanya-kini.png"
                  alt="Chaitanya Kini serving guests at a Kamakshi Catering event"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-14 sm:p-7 sm:pb-16">
                  <p className="text-lg font-extrabold text-white">Chaitanya Kini</p>
                  <p className="text-sm font-medium text-brand-200">
                    Founder, Kamakshi Fresh · Kamakshi Catering
                  </p>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-700 backdrop-blur">
                  <LeafMark className="h-4 w-4" />
                  15+ years of serving fresh
                </div>
              </div>
              <div className="relative z-10 -mt-8 ml-4 mr-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-xl shadow-brand-900/10 sm:-mt-10 sm:ml-8 sm:mr-0 sm:p-6">
                <blockquote className="text-sm font-semibold leading-relaxed text-brand-900 sm:text-base">
                  &ldquo;For over a decade at Kamakshi Catering, I picked every
                  vegetable like my reputation depended on it — because it did.
                  Kamakshi Fresh brings that same standard to every kitchen we
                  serve.&rdquo;
                </blockquote>
              </div>
            </div>
          </Reveal>
          <Reveal from="translate-x-10" className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Born in a catering kitchen, built for yours
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-brand-800/75">
              <p>
                Kamakshi Fresh is led by <strong className="text-brand-900">Chaitanya Kini</strong>,
                the force behind <strong className="text-brand-900">Kamakshi Catering</strong> —
                a name trusted for serving fresh, delicious food at scale.
              </p>
              <p>
                Years of buying produce for large events taught us exactly what
                commercial kitchens struggle with: unpredictable prices, hidden
                margins, damaged stock and unreliable delivery. So we built the
                supply chain we always wished we had — and opened it up to
                every hotel and restaurant.
              </p>
              <p>
                Direct market sourcing. Honest daily rates. Technology-first
                ordering. And produce handled with the care of people who cook
                for a living.
              </p>
            </div>
            <button
              onClick={openModal}
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-700/25 transition hover:-translate-y-0.5 hover:bg-brand-800 active:scale-[0.97]"
            >
              Partner With Us
            </button>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="px-4 pb-16 sm:px-5 md:pb-28">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-14 text-center shadow-2xl sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 animate-float-slow" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 animate-float-slow" style={{ animationDelay: "1.5s" }} />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready for fresher vegetables and fairer prices?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-brand-100">
              Be among the first hotels and restaurants to join Kamakshi Fresh.
              Early partners get priority onboarding when we launch.
            </p>
            <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                onClick={openModal}
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50 active:scale-[0.97]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Join the Waitlist
              </button>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-[14px] text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:scale-[0.97]"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-brand-100 bg-brand-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-5 md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-flex rounded-2xl bg-white px-4 py-2.5">
              <Logo className="h-8" />
            </span>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-brand-200/60">
              Fresh vegetables for hotels &amp; restaurants — direct from the
              market, at market rates, on subscription.
            </p>
          </div>
          <div className="text-xs text-brand-200/60">
            <p className="font-semibold text-brand-200">www.kamakshifresh.com</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Kamakshi Fresh · A venture by the team
              behind Kamakshi Catering
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
