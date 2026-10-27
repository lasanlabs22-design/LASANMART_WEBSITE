import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  Clock,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  SlidersHorizontal,
  Undo2,
  Wallet,
} from "lucide-react";
import Nav from "@/components/Nav";
import Aurora from "@/components/Aurora";
import PointerFX from "@/components/PointerFX";
import HeroStage from "@/components/HeroStage";
import AppTour from "@/components/AppTour";
import Device from "@/components/Device";
import { HubScreen, SCREEN_LABELS } from "@/components/AppScreens";
import ServiceLists from "@/components/ServiceLists";
import PoweredBy from "@/components/PoweredBy";
import RequestJourney from "@/components/RequestJourney";
import Reveal from "@/components/Reveal";
import StoreButton from "@/components/StoreButton";
import ServiceCarousel from "@/components/ServiceCarousel";
import Faq from "@/components/Faq";
import { PLANS, CONTACT } from "@/lib/site";

/** Eyebrow, heading and an optional line under it, centred */
function SectionIntro({
  eyebrow,
  c = "var(--violet)",
  children,
  sub,
}: {
  eyebrow: string;
  c?: string;
  children: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <Reveal>
      <p className="eyebrow text-center" style={{ color: c }}>
        {eyebrow}
      </p>
      <h2
        className="display text-center mt-4"
        style={{ fontSize: "clamp(30px, 5vw, 50px)" }}
      >
        {children}
      </h2>
      {sub && (
        <p
          className="text-center mt-5 text-[16px] sm:text-[17px] max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Aurora />
      <PointerFX />

      {/* ==================== HERO ==================== */}
      <section
        data-spot
        className="relative pt-28 sm:pt-36 lg:pt-24 pb-12 sm:pb-20 lg:pb-10 px-5 overflow-hidden z-10"
        style={{ "--spot": "rgba(95,37,159,0.07)" } as React.CSSProperties}
      >
        <div className="absolute inset-0 grid-bg" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] lg:gap-4 items-center">
          <div className="relative z-[2] text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 rise"
              style={{
                background: "rgba(109,59,245,0.09)",
                border: "1px solid rgba(109,59,245,0.18)",
              }}
            >
              <MapPin size={14} style={{ color: "var(--violet)" }} aria-hidden />
              <span
                className="text-[12.5px] font-semibold"
                style={{ color: "var(--violet-deep)" }}
              >
                Made in Tirupati, for businesses across Andhra Pradesh
              </span>
            </div>

            <h1 className="display text-[clamp(40px,8vw,80px)] lg:text-[clamp(54px,5.2vw,76px)]">
              <span className="mask-line">
                <span style={{ animationDelay: "0.1s" }}>Your whole</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.18s" }}>marketing team,</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.26s" }}>
                  <span className="gradient-text">in one app.</span>
                </span>
              </span>
            </h1>

            <p
              className="max-w-xl mx-auto lg:mx-0 mt-7 text-[17px] sm:text-[18px] leading-relaxed rise"
              style={{ color: "var(--muted)", animationDelay: "0.36s" }}
            >
              Lasan Mart puts 30 marketing services on your phone, from
              Instagram reels and Google ads to hoardings and events. Pick one,
              tell us what you need, and our team calls you back with a plan
              and a price.
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-9 rise"
              style={{ animationDelay: "0.44s" }}
            >
              <StoreButton />
              <a
                href="#app"
                className="nudge inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 transition hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-white"
                style={{ borderColor: "var(--ink)" }}
              >
                Take the tour
                <ArrowRight size={17} strokeWidth={2.2} />
              </a>
            </div>

            <ul
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-8 text-[13.5px] font-medium rise"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                "Free to download",
                "Callback in 4–6 working hours",
                "Pay only for work you approve",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="w-[18px] h-[18px] rounded-full flex items-center justify-center"
                    style={{ background: "rgba(14,169,122,0.14)", color: "#0B8457" }}
                  >
                    <Check size={11} strokeWidth={3.2} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <HeroStage />
        </div>
      </section>

      {/* ==================== INSIDE THE APP ==================== */}
      <section id="app" className="relative z-10 py-16 sm:py-24 px-5 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <SectionIntro
            eyebrow="Inside the app"
            sub="Here's what you'll find when you open Lasan Mart."
          >
            One app.
            <br />
            Every way to <span className="marker">get noticed.</span>
          </SectionIntro>

          <AppTour />
        </div>
      </section>

      {/* ==================== HOW A REQUEST WORKS ==================== */}
      <section id="how" className="relative z-10 px-5 pt-8 sm:pt-16 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <SectionIntro
            eyebrow="How a request works"
            c="var(--orange)"
            sub="Follow one hoarding request from the form to the finished job."
          >
            You tap once.
            <br />
            <span className="marker">We do the rest.</span>
          </SectionIntro>

          <RequestJourney />
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="relative z-10 py-16 sm:py-24 px-5 scroll-mt-16">
        <div className="relative max-w-5xl mx-auto">
          <SectionIntro
            eyebrow="30 services"
            c="var(--orange)"
            sub="If it helps people find your business, it's in the app."
          >
            Online, offline,
            <br />
            and everything between.
          </SectionIntro>

          <Reveal delay={0.1} className="mt-12 sm:mt-14">
            <ServiceCarousel />
          </Reveal>

          {/* Every service on the app's Home screen, by name */}
          <ServiceLists />

          <Reveal delay={0.2}>
            <p
              className="text-center mt-8 text-[14.5px] max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Don&apos;t see it? Tap{" "}
              <strong style={{ color: "var(--ink)" }}>Something else in mind?</strong>{" "}
              on the Home screen and describe it in your own words.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== PLANS ==================== */}
      <section id="plans" className="relative z-10 py-16 sm:py-24 px-5 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <SectionIntro
            eyebrow="Monthly plans"
            sub="Reels, posters, ads and a manager, bundled at one monthly price."
          >
            Want it handled
            <br />
            every month?
          </SectionIntro>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
            {PLANS.map((plan, i) => {
              const tone =
                plan.tone === "orange"
                  ? {
                      bg: "#fff",
                      text: "var(--ink)",
                      accent: "var(--orange)",
                      border: "var(--line)",
                    }
                  : plan.tone === "violet"
                    ? {
                        bg: "linear-gradient(160deg,#7C4DFF,#4B21C4)",
                        text: "#fff",
                        accent: "var(--yellow)",
                        border: "transparent",
                      }
                    : {
                        bg: "var(--ink)",
                        text: "#fff",
                        accent: "var(--orange)",
                        border: "transparent",
                      };

              return (
                <Reveal key={plan.name} delay={i * 0.1}>
                  <div
                    data-spot
                    className={`rounded-[24px] p-7 h-full relative tilt ${plan.tone === "violet" ? "glow-ring" : ""}`}
                    style={
                      {
                        "--spot":
                          plan.tone === "orange"
                            ? "rgba(255,107,53,0.08)"
                            : "rgba(255,255,255,0.1)",
                        background: tone.bg,
                        border: `1px solid ${tone.border}`,
                        boxShadow:
                          plan.tone === "violet"
                            ? "0 24px 50px rgba(75,33,196,0.26)"
                            : "0 4px 16px rgba(20,16,46,0.05)",
                      } as React.CSSProperties
                    }
                  >
                    {plan.badge && (
                      <span
                        className="absolute -top-3 left-7 text-[11px] font-bold px-3 py-1 rounded-full"
                        style={{
                          background: "var(--yellow)",
                          color: "var(--ink)",
                        }}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <p
                      className="eyebrow"
                      style={{ color: tone.accent, opacity: 0.9 }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="text-[13px] mt-1.5"
                      style={{ color: tone.text, opacity: 0.6 }}
                    >
                      {plan.subtitle}
                    </p>

                    <div className="flex items-end gap-2 mt-4">
                      <span
                        className="display text-[36px]"
                        style={{ color: tone.text }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-[13px] pb-2"
                        style={{ color: tone.text, opacity: 0.55 }}
                      >
                        / {plan.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mt-2 text-[13px]">
                      <s style={{ color: tone.text, opacity: 0.45 }}>
                        {plan.strikePrice}
                      </s>
                      <span
                        className="font-bold"
                        style={{ color: tone.accent }}
                      >
                        {plan.savings}
                      </span>
                    </div>

                    <div
                      className="h-px my-6"
                      style={{
                        background:
                          plan.tone === "orange"
                            ? "var(--line)"
                            : "rgba(255,255,255,0.16)",
                      }}
                    />

                    <ul className="ticks space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[14px]"
                          style={{ color: tone.text, opacity: 0.85 }}
                        >
                          <span
                            aria-hidden
                            className="w-[18px] h-[18px] shrink-0 mt-px rounded-full flex items-center justify-center"
                            style={{
                              background: `color-mix(in srgb, ${tone.accent} 18%, transparent)`,
                              color: tone.accent,
                            }}
                          >
                            <Check size={11} strokeWidth={3.2} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* What the app tells someone at the foot of the plan enquiry */}
          <Reveal delay={0.2}>
            <ul className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-10">
              {[
                {
                  icon: Wallet,
                  title: "Enquiring is free",
                  body: "Nothing is booked or charged until you've seen the quote and said yes.",
                },
                {
                  icon: CalendarClock,
                  title: "We call within a working day",
                  body: "To go through what you need and what the plan covers.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Shaped to your business",
                  body: "Anything that doesn't suit you gets changed before you agree.",
                },
              ].map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span
                    aria-hidden
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,107,53,0.1)", color: "var(--orange)" }}
                  >
                    <p.icon size={19} />
                  </span>
                  <span>
                    <span className="block font-semibold text-[15px]">{p.title}</span>
                    <span
                      className="block text-[14px] leading-relaxed mt-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ==================== LASAN MART HUB ==================== */}
      <section
        id="hub"
        className="relative py-20 sm:py-28 px-5 overflow-hidden scroll-mt-16"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="blob drift"
          style={{
            width: 500,
            height: 500,
            top: "-15%",
            left: "-10%",
            background: "var(--violet)",
            opacity: 0.45,
          }}
        />
        <div
          className="blob drift"
          style={{
            width: 380,
            height: 380,
            bottom: "-20%",
            right: "-8%",
            background: "var(--orange)",
            opacity: 0.3,
            animationDelay: "-7s",
          }}
        />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-[1.15fr_auto] gap-12 md:gap-16 items-center">
          <Reveal className="text-center md:text-left">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,197,41,0.14)",
                border: "1px solid rgba(255,197,41,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--yellow)" }}
              />
              <span
                className="text-[12px] font-bold tracking-[0.14em]"
                style={{ color: "var(--yellow)" }}
              >
                COMING SOON
              </span>
            </span>

            <h2
              className="display text-white mt-6"
              style={{ fontSize: "clamp(32px, 5.5vw, 54px)" }}
            >
              Do the work?
              <br />
              Get it on <span style={{ color: "var(--yellow)" }}>Hub.</span>
            </h2>

            <p className="text-white/65 text-[16px] sm:text-[17px] mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Lasan Mart Hub is our app for influencers, vendors and
              freelancers. Join free, get verified by our team, and receive
              paid jobs from businesses on Lasan Mart.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mt-9 text-left max-w-lg mx-auto md:mx-0">
              {[
                {
                  icon: Wallet,
                  title: "Free to join, always",
                  body: "Our margin comes from the client, not from you.",
                },
                {
                  icon: Handshake,
                  title: "No bidding wars",
                  body: "Jobs reach you scoped and priced.",
                },
                {
                  icon: Undo2,
                  title: "Your call on every job",
                  body: "Accept or decline. Declining never counts against you.",
                },
                {
                  icon: BadgeCheck,
                  title: "Paid when it's done",
                  body: "The amount is agreed before you start.",
                },
              ].map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,197,41,0.12)", color: "var(--yellow)" }}
                  >
                    <p.icon size={17} />
                  </span>
                  <span>
                    <span className="block text-white text-[15px] font-semibold">
                      {p.title}
                    </span>
                    <span className="block text-white/55 text-[13.5px] leading-relaxed mt-0.5">
                      {p.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-white/50 text-[14px] mt-9">
              Want in when it opens?{" "}
              <a
                href={`https://wa.me/91${CONTACT.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white/80"
                style={{ color: "var(--yellow)" }}
              >
                WhatsApp
              </a>{" "}
              or call us on{" "}
              <a
                href={`tel:+91${CONTACT.phone}`}
                className="font-semibold hover:text-white/80"
                style={{ color: "var(--yellow)" }}
              >
                {CONTACT.phone}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center">
            <Device
              label={SCREEN_LABELS.hub}
              className="[--s:0.66] sm:[--s:0.74] rotate-[3deg]"
            >
              <HubScreen />
            </Device>
          </Reveal>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="relative py-20 sm:py-28 px-5 overflow-hidden scroll-mt-16">
        <div
          className="blob"
          style={{
            width: 460,
            height: 460,
            top: "15%",
            left: "-14%",
            background: "var(--violet)",
            opacity: 0.1,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <SectionIntro
            eyebrow="FAQ"
            c="var(--orange)"
            sub="Something else? Call or WhatsApp us. We'd rather talk it through."
          >
            Questions, answered.
          </SectionIntro>

          <Faq />
        </div>
      </section>

      {/* ==================== DOWNLOAD ==================== */}
      <section
        id="contact"
        className="relative z-10 py-20 sm:py-28 px-5 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="blob drift"
          style={{
            width: 460,
            height: 460,
            top: "-20%",
            left: "10%",
            background: "var(--orange)",
            opacity: 0.35,
          }}
        />
        <div
          className="blob drift"
          style={{
            width: 380,
            height: 380,
            bottom: "-25%",
            right: "5%",
            background: "var(--violet)",
            opacity: 0.4,
            animationDelay: "-9s",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <h2
              className="display text-white"
              style={{ fontSize: "clamp(32px, 6vw, 58px)" }}
            >
              Your next customer
              <br />
              is <span style={{ color: "var(--yellow)" }}>scrolling</span> right now.
            </h2>

            <p className="text-white/65 text-[17px] mt-6 max-w-lg mx-auto leading-relaxed">
              Get Lasan Mart, tell us what you need, and our team takes it from
              there. It&apos;s free to use. You only pay for work you approve.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <StoreButton />
              <a
                href={`tel:+91${CONTACT.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <PhoneCall size={17} aria-hidden />
                Call {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/91${CONTACT.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                style={{ borderColor: "rgba(37,211,102,0.55)" }}
              >
                <MessageCircle size={17} aria-hidden />
                WhatsApp us
              </a>
            </div>

            <p className="text-white/40 text-[13px] mt-5">
              iPhone version coming soon
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-[14px] text-white/45">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} aria-hidden /> {CONTACT.city}
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 hover:text-white/80"
              >
                <Mail size={15} aria-hidden /> {CONTACT.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} aria-hidden /> Mon–Sat, 9am–7pm
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="relative z-10 pt-12 pb-8 px-5 border-t"
        style={{
          background: "var(--ink)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="on-dark max-w-5xl mx-auto">
          {/* Who we are, and where to go next */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/mark.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="text-center md:text-left leading-tight">
                <p className="text-white text-[14px] tracking-[0.14em] font-semibold">
                  LASAN MART
                </p>
                <p className="text-white/45 text-[12.5px] mt-1">
                  A Lasan Media Works product
                </p>
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 text-[13px] text-white/55"
            >
              {[
                { href: "#app", label: "The app" },
                { href: "#services", label: "Services" },
                { href: "#plans", label: "Plans" },
                { href: "#hub", label: "Lasan Mart Hub" },
                { href: "#faq", label: "FAQ" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/delete-account", label: "Delete Account" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* One line, one baseline: rights on the left, credit on the right */}
          <div
            className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center md:items-baseline justify-between gap-3 text-[13px] text-white/45"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <p>
              © {new Date().getFullYear()} Lasan Media Works. All rights
              reserved.
            </p>
            <PoweredBy />
          </div>
        </div>
      </footer>
    </>
  );
}
