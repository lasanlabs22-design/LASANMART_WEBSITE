import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  BellRing,
  Camera,
  Clapperboard,
  Clock,
  Eye,
  FileText,
  Handshake,
  Heart,
  LayoutDashboard,
  LifeBuoy,
  ListChecks,
  LockKeyhole,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  PhoneCall,
  Scissors,
  Star,
  Store,
  ThumbsUp,
  TrendingUp,
  UserRoundCheck,
  Gauge,
  Wallet,
  CalendarCheck,
  Check,
  Undo2,
} from "lucide-react";
import Nav from "@/components/Nav";
import Aurora from "@/components/Aurora";
import PointerFX from "@/components/PointerFX";
import HeroStage from "@/components/HeroStage";
import IconTile from "@/components/IconTile";
import LoopVideo from "@/components/LoopVideo";
import ServiceLists from "@/components/ServiceLists";
import PoweredBy from "@/components/PoweredBy";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import StoreButton from "@/components/StoreButton";
import ServiceCarousel from "@/components/ServiceCarousel";
import Faq from "@/components/Faq";
import BusinessIdeas from "@/components/BusinessIdeas";
import HubRoles from "@/components/HubRoles";
import { PLANS, CONTACT, BUDGETS, TIMELINES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <Aurora />
      <PointerFX />

      {/* ==================== HERO ==================== */}
      <section
        data-spot
        className="relative pt-28 sm:pt-36 lg:pt-28 pb-16 sm:pb-24 lg:pb-16 px-5 overflow-hidden z-10"
        style={{ "--spot": "rgba(109,59,245,0.07)" } as React.CSSProperties}
      >
        <div className="absolute inset-0 grid-bg" />

        {/* Words on the left, the moving stage on the right from laptops up */}
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] lg:gap-6 items-center">
          <div className="relative z-[2] text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 rise"
            style={{
              background: "rgba(109,59,245,0.09)",
              border: "1px solid rgba(109,59,245,0.18)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--violet)" }}
            />
            <span
              className="text-[12.5px] font-semibold"
              style={{ color: "var(--violet-deep)" }}
            >
              Now serving businesses across Andhra Pradesh
            </span>
          </div>

          <h1 className="display text-[clamp(40px,8vw,82px)] lg:text-[clamp(56px,5.4vw,78px)]">
            <span className="mask-line">
              <span style={{ animationDelay: "0.1s" }}>Marketing that</span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.22s" }}>
                actually <span className="gradient-text">gets done.</span>
              </span>
            </span>
          </h1>

          <p
            className="max-w-xl mx-auto lg:mx-0 mt-7 text-[17px] leading-relaxed rise"
            style={{ color: "var(--muted)", animationDelay: "0.36s" }}
          >
            Hoardings, Instagram, influencers, websites, print — tell us what
            your business needs and our team handles the rest. No agencies to
            chase, no quotes to compare.
          </p>

          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 rise"
            style={{ animationDelay: "0.44s" }}
          >
            <StoreButton />
            <a
              href="#services"
              className="nudge inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 transition hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-white"
              style={{ borderColor: "var(--ink)" }}
            >
              See what we do
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
          </div>

          <p
            className="mt-5 text-[13px] rise"
            style={{ color: "var(--muted)", animationDelay: "0.5s" }}
          >
            iOS version arriving soon
          </p>
          </div>

          <HeroStage />
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section
        className="marquee-wrap relative z-10 py-4 sm:py-5 overflow-hidden border-y"
        style={{ background: "var(--ink)", borderColor: "var(--ink-soft)" }}
        aria-label="Services we offer"
      >
        <div className="flex marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center shrink-0"
              aria-hidden={copy === 1 || undefined}
            >
              {[
                "HOARDINGS",
                "SOCIAL MEDIA",
                "INFLUENCERS",
                "WEBSITES",
                "PRINT MEDIA",
                "GOOGLE ADS",
                "EVENTS",
                "LED BOARDS",
                "WHATSAPP",
                "VIDEO SHOOTS",
              ].map((word) => (
                <span key={word} className="flex items-center">
                  <span
                    className="display-md text-[18px] sm:text-[22px] px-5 sm:px-7"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {word}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--yellow)" }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="relative z-10 py-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { n: 30, s: "", label: "Services" },
            { n: 20, s: "", label: "Business sectors" },
            { n: 6, s: "hr", label: "Typical response" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="display text-[clamp(34px,6vw,56px)] gradient-text">
                <Ticker to={stat.n} suffix={stat.s} />
              </div>
              <p className="text-[13px] mt-1" style={{ color: "var(--muted)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="relative z-10 py-16 sm:py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--violet)" }}
            >
              How it works
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Three steps. That&apos;s it.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
            {[
              {
                n: "01",
                title: "Tell us what you need",
                body: "Pick a service or describe your goal in your own words. Not sure? Browse Business Ideas for your sector.",
                c: "#FF6B35",
                icon: MessageSquareText,
              },
              {
                n: "02",
                title: "We come back with a plan",
                body: "Our team reviews every request and calls you within 4–6 working hours with options and costs.",
                c: "#6D3BF5",
                icon: PhoneCall,
              },
              {
                n: "03",
                title: "Watch it happen",
                body: "Track every request in the app. Your phone buzzes the moment the status changes.",
                c: "#E8AE00",
                icon: BellRing,
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div
                  data-spot
                  className="group card card-lift tilt trace p-7 h-full"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="display text-[40px] leading-none"
                      style={{ color: step.c }}
                    >
                      {step.n}
                    </div>
                    <IconTile icon={step.icon} color={step.c} size={48} />
                  </div>
                  <h3 className="display-md text-[19px] mt-5">{step.title}</h3>
                  <p
                    className="mt-3 text-[14.5px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* What My Requests shows, in the app's own status words */}
          <Reveal delay={0.2}>
            <div className="card p-6 sm:p-8 mt-8">
              <p
                className="eyebrow text-center"
                style={{ color: "var(--violet)" }}
              >
                Your request, start to finish
              </p>

              <ol className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 mt-6">
                {[
                  { label: "Received", c: "#3A86FF" },
                  { label: "Contacted", c: "#E8AE00" },
                  { label: "In Progress", c: "#12B3A0" },
                  { label: "Completed", c: "#767676" },
                ].map((s, i, arr) => (
                  <li
                    key={s.label}
                    className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
                  >
                    <span
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-[13.5px] font-semibold"
                      style={{
                        background: `color-mix(in srgb, ${s.c} 12%, transparent)`,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: s.c }}
                      />
                      {s.label}
                    </span>
                    {i < arr.length - 1 && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="var(--muted)"
                        className="w-4 h-4 shrink-0 rotate-90 sm:rotate-0 opacity-50"
                        aria-hidden
                      >
                        <path d="m10 17 5-5-5-5v10Z" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
                {[
                  {
                    icon: Bell,
                    c: "#3A86FF",
                    title: "Your phone buzzes",
                    body: "A notification every time the status changes, with the full history behind the bell on Home.",
                  },
                  {
                    icon: Handshake,
                    c: "#12B3A0",
                    title: "See the partner's progress",
                    body: "When someone from our verified network takes the job, you see when they start and when they finish. We stay in the middle throughout.",
                  },
                  {
                    icon: ThumbsUp,
                    c: "#E8AE00",
                    title: "One tap to say how it went",
                    body: "Went well, it was okay, or not good. Only our team sees it, and it decides who gets your next job.",
                  },
                  {
                    icon: LockKeyhole,
                    c: "#6D3BF5",
                    title: "Only you see your requests",
                    body: "Browse as a guest, or sign in with Google or your phone. We verify your number with a one-time code before your first request.",
                  },
                ].map((p) => (
                  <div key={p.title} className="group">
                    <IconTile icon={p.icon} color={p.c} size={42} />
                    <h3 className="display-md text-[16px] mt-3">{p.title}</h3>
                    <p
                      className="text-[13.5px] mt-1.5 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="relative z-10 py-16 sm:py-24 px-5">
        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--orange)" }}
            >
              What we do
            </p>
            <h2
              className="display text-center mt-4 mb-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Thirty services.
              <br />
              One place.
            </h2>
            <p
              className="text-center text-[15px] mb-14"
              style={{ color: "var(--muted)" }}
            >
              Swipe through, or tap the arrows
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ServiceCarousel />
          </Reveal>

          {/* Every service on the app's Home screen, by name */}
          <ServiceLists />

          <Reveal delay={0.2}>
            <p
              className="text-center mt-8 text-[14px] max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Tap any of them in the app, pick your business sector, describe
              what you need, then choose a rough budget ({BUDGETS.join(", ")})
              and a timeline ({TIMELINES.join(", ")}). Can&apos;t find it?
              Post a custom requirement in your own words.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== BUSINESS IDEAS ==================== */}
      <section id="ideas" className="relative z-10 py-16 sm:py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--violet)" }}
            >
              Business Ideas
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Not sure where to start?
              <br />
              <span className="marker">Pick your sector.</span>
            </h2>
            <p
              className="text-center mt-5 text-[16px] max-w-lg mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Twenty playbooks, free in the app: what tends to work in your
              line of business, which services to start with, and how to
              think about spend.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <BusinessIdeas />
          </Reveal>
        </div>
      </section>

      {/* ==================== FREELANCERS ==================== */}
      <section id="freelancers" className="relative py-20 sm:py-28 px-5 overflow-hidden">
        <div
          className="blob drift"
          style={{
            width: 440,
            height: 440,
            top: "10%",
            right: "-12%",
            background: "var(--violet)",
            opacity: 0.14,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--violet)" }}
            >
              New
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Need a shoot?
              <br />
              An editor? <span className="marker">Just ask.</span>
            </h2>
            <p
              className="text-center mt-5 text-[16px] max-w-lg mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Pick what you need — more than one is fine — and our team finds
              the right person and comes back with a quote.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-12 sm:mt-16">
            {[
              {
                icon: Camera,
                label: "Photography",
                body: "Products, interiors, food, events",
                c: "#3A86FF",
                clip: "photo",
              },
              {
                icon: Clapperboard,
                label: "Videography",
                body: "Shoots, coverage, reels, ads",
                c: "#C13584",
                clip: "video",
              },
              {
                icon: Scissors,
                label: "Video Editing",
                body: "Cutting, colour, subtitles, reels",
                c: "#6D3BF5",
                clip: "edit",
              },
              {
                icon: TrendingUp,
                label: "Digital Marketing",
                body: "Social media, ads, content, SEO",
                c: "#0EA97A",
                clip: "marketing",
              },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div
                  data-tilt="8"
                  className="card card-lift h-full group cursor-default overflow-hidden"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <LoopVideo
                      src={`/media/fl-${f.clip}.mp4`}
                      poster={`/media/fl-${f.clip}.jpg`}
                      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3 bottom-3">
                      <IconTile icon={f.icon} color={f.c} size={38} solid />
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3
                      className="display-md text-[15.5px] sm:text-[17px] leading-tight"
                      style={{ color: f.c }}
                    >
                      {f.label}
                    </h3>
                    <p
                      className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {f.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LASAN VIBES ==================== */}
      <section
        id="vibes"
        className="relative z-10 py-20 sm:py-28 px-5 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="blob drift"
          style={{
            width: 420,
            height: 420,
            top: "-10%",
            right: "-10%",
            background: "var(--violet)",
            opacity: 0.4,
          }}
        />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--yellow)" }}>
              Lasan Vibes
            </p>
            <h2
              className="display text-white mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 46px)" }}
            >
              Your campaigns,
              <br />
              in motion.
            </h2>
            <p className="text-white/60 text-[16px] leading-relaxed mt-5 max-w-md">
              A short-video feed inside the app where local businesses share
              shoots, launches and campaigns as they happen. Watch as much as
              you like, and like what you enjoy.
            </p>
            <p className="text-white/60 text-[16px] leading-relaxed mt-4 max-w-md">
              Want to post? Vibes is seen by everyone using Lasan Mart, so our
              team checks who posts. Tell us what you&apos;d share, and once
              you&apos;re approved your videos go live the moment you post
              them. Edit captions or delete your videos any time from My Vibes.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Free to watch",
                "Seen by every user",
                "Up to 90 seconds",
                "Likes and views",
              ].map(
                (t) => (
                  <span
                    key={t}
                    className="text-[13px] font-semibold px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(255,197,41,0.14)",
                      color: "var(--yellow)",
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          {/* Three reels as they look in the app's feed */}
          <Reveal delay={0.12}>
            <div className="flex gap-3 sm:gap-4 justify-center items-center">
              {[
                {
                  clip: "creator",
                  who: "techtalk.tpt",
                  line: "Unboxing the new lineup",
                  c: "#6D3BF5",
                  d: "0s",
                  w: "w-[29%] max-w-[160px] mt-10",
                  side: true,
                },
                {
                  clip: "fashion",
                  who: "the.lookbook",
                  line: "Festive lookbook, behind the scenes",
                  c: "#FF6B35",
                  d: "1s",
                  w: "w-[36%] max-w-[210px] z-10",
                },
                {
                  clip: "chef",
                  who: "grillhouse",
                  line: "Live counter, all weekend",
                  c: "#E8AE00",
                  d: "2s",
                  w: "w-[29%] max-w-[160px] mt-10",
                  side: true,
                },
              ].map((r) => (
                <div
                  key={r.clip}
                  className={`floaty relative ${r.w}`}
                  style={
                    {
                      animationDelay: r.d,
                      "--tilt": "0deg",
                    } as React.CSSProperties
                  }
                >
                  <div
                    data-tilt="10"
                    className="phone p-[5px]! rounded-[26px]!"
                  >
                    <div className="phone-screen rounded-[21px]!">
                      <LoopVideo
                        src={`/media/vibes-${r.clip}.mp4`}
                        poster={`/media/vibes-${r.clip}.jpg`}
                        className="absolute inset-0 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />

                      <div className="absolute right-2 bottom-16 flex flex-col items-center gap-2.5 text-white">
                        <Heart size={17} fill="#fff" strokeWidth={0} />
                        <Eye size={17} strokeWidth={2} />
                      </div>

                      <div
                        className={`absolute left-2.5 right-8 bottom-3 text-white ${"side" in r ? "hidden sm:block" : ""}`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-5 h-5 rounded-full shrink-0"
                            style={{ background: r.c }}
                          />
                          <span className="text-[10.5px] font-semibold truncate">
                            {r.who}
                          </span>
                        </div>
                        <p className="text-[10px] mt-1 leading-snug text-white/80 line-clamp-2">
                          {r.line}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== PLANS ==================== */}
      <section id="plans" className="relative z-10 py-20 sm:py-28 px-5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--violet)" }}
            >
              Digital plans
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Or start with a plan.
            </h2>
            <p
              className="text-center mt-4 text-[16px] max-w-lg mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Everything bundled, priced upfront, no surprises.
            </p>
          </Reveal>

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
            <div className="card p-6 sm:p-8 mt-10">
              <p
                className="eyebrow text-center"
                style={{ color: "var(--violet)" }}
              >
                What happens when you enquire
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
                {[
                  {
                    title: "An enquiry, not an order",
                    body: "Nothing is booked and nothing is charged. You are asking us to get in touch.",
                  },
                  {
                    title: "We call you back",
                    body: "Usually within one working day, to go through what you need and what the plan covers.",
                  },
                  {
                    title: "The plan can be adjusted",
                    body: "If something in it does not suit your business, we change it before anything is agreed.",
                  },
                  {
                    title: "You approve the cost first",
                    body: "Work begins only once you have seen the final quote and said yes.",
                  },
                ].map((p, i) => (
                  <div key={p.title}>
                    <div
                      className="display text-[22px] leading-none"
                      style={{ color: "var(--orange)" }}
                    >
                      0{i + 1}
                    </div>
                    <h3 className="display-md text-[16px] mt-3">{p.title}</h3>
                    <p
                      className="text-[13.5px] mt-1.5 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              className="text-center mt-10 text-[14px]"
              style={{ color: "var(--muted)" }}
            >
              Not sure which plan fits? Ask us and we will tell you honestly.
              Need something else entirely? Post a custom requirement in the
              app and we&apos;ll scope it for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== TOOLS ==================== */}
      <section
        className="relative z-10 py-20 sm:py-28 px-5"
        style={{ background: "#fff" }}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--orange)" }}
            >
              Free tools
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              More than marketing.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
            {[
              {
                icon: FileText,
                tile: "#FF6B35",
                title: "Quotation Generator",
                body: "Auto-numbered quotations with your company logo as a watermark, line items, GST (18% unless you change it) and a validity period. Send the PDF on WhatsApp or email, or print it, in under a minute.",
                tag: "Free",
                c: "var(--orange)",
              },
              {
                icon: CalendarCheck,
                tile: "#6D3BF5",
                title: "Attendance Management",
                body: "Mark staff attendance with a tap, track leaves and shifts, pull monthly reports at salary time.",
                tag: "Custom build",
                c: "var(--violet)",
              },
              {
                icon: LayoutDashboard,
                tile: "#2D3561",
                title: "Customised CRM",
                body: "Built around how your business actually runs — your fields, your stages, your reports.",
                tag: "Custom build",
                c: "var(--ink)",
              },
            ].map((tool, i) => (
              <Reveal key={tool.title} delay={i * 0.1}>
                <div
                  data-spot
                  className="group card card-lift tilt trace p-7 h-full"
                >
                  <IconTile icon={tool.icon} color={tool.tile} size={56} />

                  <span
                    className="inline-block mt-5 text-[11px] font-bold px-2.5 py-1 rounded-md"
                    style={{
                      background: `color-mix(in srgb, ${tool.c} 12%, transparent)`,
                      color: tool.c,
                    }}
                  >
                    {tool.tag}
                  </span>

                  <h3 className="display-md text-[19px] mt-3">{tool.title}</h3>
                  <p
                    className="mt-2.5 text-[14.5px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {tool.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p
              className="text-center mt-10 text-[14px] max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Attendance and CRM are built for you, not off the shelf. Tell us
              how your business runs and every build comes with setup, training
              and ongoing support from our team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== LASAN HUB ==================== */}
      <section
        id="hub"
        className="relative py-20 sm:py-28 px-5 overflow-hidden"
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

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center">
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
                className="display text-white mt-7"
                style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
              >
                Lasan Mart Hub
              </h2>

              <p className="text-white/60 text-[17px] mt-5 max-w-xl mx-auto leading-relaxed">
                A second app, for the people who do the work. Creators, vendors
                and freelancers join our verified network — and we bring them
                jobs from businesses who have already paid.
              </p>
            </div>
          </Reveal>

          {/* The three who can join */}
          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {[
              {
                icon: Star,
                role: "Creators",
                line: "Instagram, YouTube, city pages",
                body: "Set your rate once. Businesses browse creators by category and city, and we bring you the brief.",
                c: "#C13584",
              },
              {
                icon: Store,
                role: "Vendors",
                line: "Hoardings, print, events, field teams",
                body: "When a client needs what you offer, our team comes to the vendors on this list first.",
                c: "#0EA97A",
              },
              {
                icon: Laptop,
                role: "Freelancers",
                line: "Design, video, photography, marketing",
                body: "No bidding wars, no undercutting. Scoped briefs, priced before they reach you.",
                c: "#3A86FF",
              },
            ].map((r, i) => (
              <Reveal key={r.role} delay={i * 0.1}>
                <div
                  data-spot
                  className="rounded-[24px] p-7 h-full group transition-all duration-300 hover:-translate-y-2"
                  style={
                    {
                      "--spot": "rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    } as React.CSSProperties
                  }
                >
                  <IconTile icon={r.icon} color={r.c} size={56} dark />

                  <h3
                    className="display-md text-[21px] mt-6"
                    style={{ color: r.c }}
                  >
                    {r.role}
                  </h3>
                  <p className="text-[12.5px] mt-1 text-white/40">{r.line}</p>

                  <p className="text-[14.5px] leading-relaxed mt-4 text-white/65">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How a job travels */}
          <Reveal delay={0.3}>
            <div
              className="rounded-[24px] p-6 sm:p-8 mt-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="eyebrow text-center"
                style={{ color: "var(--yellow)" }}
              >
                How a job travels
              </p>

              {/* Steps light up in order — stacked on phones, a row above */}
              <ol className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                {[
                  "Business posts a request",
                  "We match a partner",
                  "They accept and get to work",
                  "Client says how it went",
                ].map((step, i, arr) => (
                  <li
                    key={step}
                    className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <div className="flow-step w-full sm:w-auto px-4 py-3 rounded-2xl text-[13px] font-semibold text-center">
                      {step}
                    </div>

                    {i < arr.length - 1 && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="var(--yellow)"
                        className="flow-arrow w-4 h-4 shrink-0 rotate-90 sm:rotate-0"
                        aria-hidden
                      >
                        <path d="m10 17 5-5-5-5v10Z" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HubRoles />
          </Reveal>

          {/* The partner terms, as the Hub app's FAQ states them */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              {
                icon: Wallet,
                title: "Free to join, and stays free",
                body: "We take our margin from what the client pays, not from you.",
              },
              {
                icon: UserRoundCheck,
                title: "A real person approves you",
                body: "Usually within a day or two. Edit your profile later and it goes back for a quick re-check, so verified always means verified.",
              },
              {
                icon: Undo2,
                title: "Accept or decline every job",
                body: "Offers land in your Work tab with a notification. Declining never counts against you; just tell us why.",
              },
              {
                icon: BadgeCheck,
                title: "Paid once it's done",
                body: "We agree the amount with you before the job starts and pay once the work is complete and the client is happy.",
              },
              {
                icon: Handshake,
                title: "We handle the client",
                body: "You see their first name and the brief. Everything else goes through our team, so you never chase anyone.",
              },
              {
                icon: ListChecks,
                title: "Mark progress as you go",
                body: "Accepted, in progress, completed. Each step reaches the business in Lasan Mart the moment you tap it.",
              },
              {
                icon: Gauge,
                title: "A profile that tells you what's missing",
                body: "Profile strength shows exactly which details would help our team place more work with you.",
              },
              {
                icon: LifeBuoy,
                title: "Support built in",
                body: "Raise a question about payment, your profile or availability from the app and follow it until it's resolved.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i, 4) * 0.06}>
                <div
                  data-spot
                  className="group rounded-[20px] p-5 h-full transition-transform duration-300 hover:-translate-y-1"
                  style={
                    {
                      "--spot": "rgba(255,197,41,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="icon-tile w-10 h-10 text-[var(--yellow)]"
                    style={
                      {
                        "--tile": "#FFC529",
                        background: "rgba(255,197,41,0.12)",
                      } as React.CSSProperties
                    }
                  >
                    <p.icon size={19} strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="text-white text-[15px] font-semibold mt-3">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-[13.5px] leading-relaxed mt-2">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="text-center text-white/40 text-[14px] mt-10">
              Want to join when it opens? Call or{" "}
              <a
                href={`https://wa.me/91${CONTACT.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white/70"
                style={{ color: "var(--yellow)" }}
              >
                WhatsApp
              </a>{" "}
              us on{" "}
              <a
                href={`tel:+91${CONTACT.phone}`}
                className="font-semibold hover:text-white/70"
                style={{ color: "var(--yellow)" }}
              >
                {CONTACT.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== BOTH APPS ==================== */}
      <section id="apps" className="relative py-20 sm:py-28 px-5 overflow-hidden">
        <div
          className="blob drift"
          style={{
            width: 420,
            height: 420,
            top: "5%",
            right: "-12%",
            background: "var(--orange)",
            opacity: 0.12,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--orange)" }}
            >
              Open to everyone
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              Two apps.
              <br />
              Made for <span className="marker">anyone.</span>
            </h2>
            <p
              className="text-center mt-5 text-[16px] max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              You don&apos;t need to run a business to use Lasan Mart, or be a
              vendor to use Lasan Mart Hub. Download one, or both — whoever you
              are.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-16">
            {[
              {
                name: "Lasan Mart",
                tag: "Available now",
                line: "For anyone who wants to be seen.",
                points: [
                  "Ask for any of our 30 services",
                  "Watch Lasan Vibes, and post once approved",
                  "Use free tools like the Quotation Generator",
                ],
                dark: false,
              },
              {
                name: "Lasan Mart Hub",
                tag: "Coming soon",
                line: "For anyone who wants to earn.",
                points: [
                  "Join as a creator, vendor or freelancer",
                  "Get briefs that are priced before they reach you",
                  "No bidding wars, no undercutting",
                ],
                dark: true,
              },
            ].map((app, i) => (
              <Reveal key={app.name} delay={i * 0.1}>
                <div
                  className="rounded-[24px] p-8 h-full tilt"
                  style={{
                    background: app.dark
                      ? "linear-gradient(160deg,#7C4DFF,#4B21C4)"
                      : "#fff",
                    border: app.dark
                      ? "1px solid transparent"
                      : "1px solid var(--line)",
                    boxShadow: app.dark
                      ? "0 24px 50px rgba(75,33,196,0.26)"
                      : "0 4px 16px rgba(20,16,46,0.05)",
                  }}
                >
                  <span
                    className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-md"
                    style={{
                      background: app.dark
                        ? "rgba(255,197,41,0.18)"
                        : "rgba(255,107,53,0.12)",
                      color: app.dark ? "var(--yellow)" : "var(--orange)",
                    }}
                  >
                    {app.tag}
                  </span>

                  <h3
                    className="display-md text-[24px] mt-5"
                    style={{ color: app.dark ? "#fff" : "var(--ink)" }}
                  >
                    {app.name}
                  </h3>
                  <p
                    className="text-[15px] mt-1.5"
                    style={{
                      color: app.dark
                        ? "rgba(255,255,255,0.65)"
                        : "var(--muted)",
                    }}
                  >
                    {app.line}
                  </p>

                  <ul className="ticks space-y-3 mt-6">
                    {app.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[14.5px]"
                        style={{
                          color: app.dark ? "#fff" : "var(--ink)",
                          opacity: 0.85,
                        }}
                      >
                        <span
                          aria-hidden
                          className="w-[18px] h-[18px] shrink-0 mt-px rounded-full flex items-center justify-center"
                          style={{
                            background: app.dark
                              ? "rgba(255,197,41,0.2)"
                              : "rgba(255,107,53,0.12)",
                            color: app.dark ? "var(--yellow)" : "var(--orange)",
                          }}
                        >
                          <Check size={11} strokeWidth={3.2} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hub members should grab Mart too — that's where Vibes lives */}
          <Reveal delay={0.2}>
            <div
              className="rounded-[24px] p-8 md:p-10 mt-8 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center"
              style={{ background: "var(--ink)" }}
            >
              <div>
                <p className="eyebrow" style={{ color: "var(--yellow)" }}>
                  On Hub? Get Lasan Mart too
                </p>
                <h3
                  className="display text-white mt-3"
                  style={{ fontSize: "clamp(24px, 3.4vw, 32px)" }}
                >
                  Your work belongs on Lasan Vibes.
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mt-4 max-w-md">
                  Lasan Vibes lives inside Lasan Mart. Install it alongside Hub,
                  ask to post, and share your shoots, reels and finished jobs
                  where every Lasan Mart user sees them. It&apos;s the easiest
                  way to show businesses what you can do.
                </p>
                <div className="mt-7">
                  <StoreButton />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { label: "Lasan Mart Hub", c: "var(--violet)" },
                  { label: "Lasan Mart", c: "var(--orange)" },
                ].map((chip, i) => (
                  <div key={chip.label} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="display text-[22px] text-white/40">
                        +
                      </span>
                    )}
                    <span
                      className="px-4 py-2.5 rounded-2xl text-[13px] font-semibold text-white"
                      style={{ background: chip.c }}
                    >
                      {chip.label}
                    </span>
                  </div>
                ))}
                <span className="display text-[22px] text-white/40">=</span>
                <span
                  className="px-4 py-2.5 rounded-2xl text-[13px] font-bold"
                  style={{ background: "var(--yellow)", color: "var(--ink)" }}
                >
                  Seen on Vibes
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="relative py-20 sm:py-28 px-5 overflow-hidden">
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
          <Reveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--orange)" }}
            >
              Questions
            </p>
            <h2
              className="display text-center mt-4"
              style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
            >
              The things people ask.
            </h2>
            <p
              className="text-center mt-5 text-[16px] max-w-md mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Anything else, call us — we&apos;d rather talk it through.
            </p>
          </Reveal>

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
              style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
            >
              Let&apos;s get your
              <br />
              business seen.
            </h2>

            <p className="text-white/60 text-[17px] mt-6 max-w-lg mx-auto leading-relaxed">
              Download the app, post what you need, and our team takes it from
              there. Free to use — you only pay for the work you approve.
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

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 text-[14px] text-white/45">
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
                { href: "#services", label: "Services" },
                { href: "#plans", label: "Plans" },
                { href: "#hub", label: "Lasan Mart Hub" },
                { href: "#faq", label: "FAQ" },
                { href: "/privacy", label: "Privacy Policy" },
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
