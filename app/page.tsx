import Nav from "@/components/Nav";
import Aurora from "@/components/Aurora";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import StoreButton from "@/components/StoreButton";
import ServiceCarousel from "@/components/ServiceCarousel";
import Faq from "@/components/Faq";
import { PLANS, CONTACT } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <Aurora />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-36 pb-24 px-5 overflow-hidden z-10">
        <div className="absolute inset-0 grid-bg" />

        <div className="relative max-w-5xl mx-auto text-center">
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

          <h1
            className="display"
            style={{ fontSize: "clamp(40px, 8vw, 82px)" }}
          >
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
            className="max-w-xl mx-auto mt-7 text-[17px] leading-relaxed rise"
            style={{ color: "var(--muted)", animationDelay: "0.36s" }}
          >
            Hoardings, Instagram, influencers, websites, print — tell us what
            your business needs and our team handles the rest. No agencies to
            chase, no quotes to compare.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mt-10 rise"
            style={{ animationDelay: "0.44s" }}
          >
            <StoreButton />
            <a
              href="#services"
              className="px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              See what we do
            </a>
          </div>

          <p
            className="mt-5 text-[13px] rise"
            style={{ color: "var(--muted)", animationDelay: "0.5s" }}
          >
            iOS version arriving soon
          </p>

          {/* Floating service chips */}
          <div className="relative mt-20 h-[220px] hidden sm:block">
            {[
              {
                label: "📣 Hoardings",
                x: "4%",
                y: "8%",
                tilt: "-6deg",
                c: "var(--orange)",
                d: "0s",
              },
              {
                label: "⭐ Influencers",
                x: "68%",
                y: "0%",
                tilt: "5deg",
                c: "var(--violet)",
                d: "1.2s",
              },
              {
                label: "💼 Digital Plans",
                x: "20%",
                y: "58%",
                tilt: "3deg",
                c: "var(--ink)",
                d: "2.1s",
              },
              {
                label: "🎬 Reels",
                x: "76%",
                y: "52%",
                tilt: "-4deg",
                c: "var(--yellow)",
                d: "0.7s",
              },
              {
                label: "🛠️ Custom builds",
                x: "42%",
                y: "26%",
                tilt: "-2deg",
                c: "var(--orange)",
                d: "1.7s",
              },
            ].map((chip) => (
              <div
                key={chip.label}
                className="absolute card floaty px-5 py-3 text-[14px] font-semibold"
                style={
                  {
                    left: chip.x,
                    top: chip.y,
                    "--tilt": chip.tilt,
                    animationDelay: chip.d,
                    borderColor: chip.c,
                    color: chip.c === "var(--yellow)" ? "var(--ink)" : chip.c,
                    borderWidth: 2,
                  } as React.CSSProperties
                }
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section
        className="relative z-10 py-5 overflow-hidden border-y"
        style={{ background: "var(--ink)", borderColor: "var(--ink-soft)" }}
      >
        <div className="flex marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
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
                    className="display-md text-[22px] px-7"
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
            { n: 46, s: "", label: "Local creators" },
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
      <section className="relative z-10 py-24 px-5">
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

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                n: "01",
                title: "Tell us what you need",
                body: "Pick a service or describe your goal in your own words. Not sure? Browse Business Ideas for your sector.",
                c: "var(--orange)",
              },
              {
                n: "02",
                title: "We come back with a plan",
                body: "Our team reviews every request and calls you within 4–6 working hours with options and costs.",
                c: "var(--violet)",
              },
              {
                n: "03",
                title: "Watch it happen",
                body: "Track every request in the app. Your phone buzzes the moment the status changes.",
                c: "var(--yellow)",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="card card-lift tilt trace p-7 h-full">
                  <div
                    className="display text-[40px] leading-none"
                    style={{ color: step.c }}
                  >
                    {step.n}
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
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="relative z-10 py-24 px-5">
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
        </div>
      </section>

      {/* ==================== FREELANCERS ==================== */}
      <section id="freelancers" className="relative py-28 px-5 overflow-hidden">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {[
              {
                icon: "📷",
                label: "Photography",
                body: "Products, interiors, food, events",
                c: "#3A86FF",
              },
              {
                icon: "🎥",
                label: "Videography",
                body: "Shoots, coverage, reels, ads",
                c: "#C13584",
              },
              {
                icon: "✂️",
                label: "Video Editing",
                body: "Cutting, colour, subtitles, reels",
                c: "var(--violet)",
              },
              {
                icon: "📈",
                label: "Digital Marketing",
                body: "Social media, ads, content, SEO",
                c: "#0EA97A",
              },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div
                  className="card card-lift p-6 h-full group cursor-default"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background: `color-mix(in srgb, ${f.c} 12%, transparent)`,
                    }}
                  >
                    {f.icon}
                  </div>

                  <h3
                    className="display-md text-[17px] mt-5"
                    style={{ color: f.c }}
                  >
                    {f.label}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LASAN VIBES ==================== */}
      <section
        id="vibes"
        className="relative z-10 py-28 px-5 overflow-hidden"
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
              shoots, launches and campaigns as they happen. Post your own in
              seconds — everyone using Lasan Mart sees it.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Post in seconds", "Seen by every user", "Free forever"].map(
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

          <Reveal delay={0.12}>
            <div className="flex gap-4 justify-center">
              {[
                {
                  h: 260,
                  c: "linear-gradient(160deg,#FF8A3D,#F2542D)",
                  d: "0s",
                },
                {
                  h: 300,
                  c: "linear-gradient(160deg,#7C4DFF,#4B21C4)",
                  d: "1s",
                },
                {
                  h: 240,
                  c: "linear-gradient(160deg,#FFC529,#E5A800)",
                  d: "2s",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="floaty rounded-[22px] flex-1 max-w-[130px] flex items-end p-4"
                  style={{
                    height: card.h,
                    background: card.c,
                    animationDelay: card.d,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="w-full">
                    <div className="w-8 h-8 rounded-full bg-white/25 mb-2" />
                    <div className="h-2 rounded bg-white/40 w-3/4 mb-1.5" />
                    <div className="h-2 rounded bg-white/25 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== PLANS ==================== */}
      <section id="plans" className="relative z-10 py-28 px-5">
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

          <div className="grid md:grid-cols-3 gap-6 mt-16">
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
                    className="rounded-[24px] p-7 h-full relative tilt"
                    style={{
                      background: tone.bg,
                      border: `1px solid ${tone.border}`,
                      boxShadow:
                        plan.tone === "violet"
                          ? "0 24px 50px rgba(75,33,196,0.26)"
                          : "0 4px 16px rgba(20,16,46,0.05)",
                    }}
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

                    <div className="flex items-end gap-2 mt-3">
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

                    <div
                      className="h-px my-6"
                      style={{
                        background:
                          plan.tone === "orange"
                            ? "var(--line)"
                            : "rgba(255,255,255,0.16)",
                      }}
                    />

                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[14px]"
                          style={{ color: tone.text, opacity: 0.85 }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill={tone.accent}
                            className="w-4 h-4 shrink-0 mt-0.5"
                          >
                            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <p
              className="text-center mt-10 text-[14px]"
              style={{ color: "var(--muted)" }}
            >
              Need something else? Post a custom requirement in the app and
              we&apos;ll scope it for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== TOOLS ==================== */}
      <section
        className="relative z-10 py-28 px-5"
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

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: "📄",
                title: "Quotation Generator",
                body: "Branded quotations with your logo, GST and line items. Share as a PDF on WhatsApp in under a minute.",
                tag: "Free",
                c: "var(--orange)",
              },
              {
                icon: "🕐",
                title: "Attendance Management",
                body: "Mark staff attendance with a tap, track leaves and shifts, pull monthly reports at salary time.",
                tag: "Custom build",
                c: "var(--violet)",
              },
              {
                icon: "📊",
                title: "Customised CRM",
                body: "Built around how your business actually runs — your fields, your stages, your reports.",
                tag: "Custom build",
                c: "var(--ink)",
              },
            ].map((tool, i) => (
              <Reveal key={tool.title} delay={i * 0.1}>
                <div className="card card-lift tilt trace p-7 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(20,16,46,0.04)" }}
                  >
                    {tool.icon}
                  </div>

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
        </div>
      </section>

      {/* ==================== LASAN HUB ==================== */}
      <section
        id="hub"
        className="relative py-28 px-5 overflow-hidden"
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
                icon: "⭐",
                role: "Creators",
                line: "Instagram, YouTube, city pages",
                body: "Set your rate once. Businesses browse by budget and category, and we bring you the brief.",
                c: "#C13584",
              },
              {
                icon: "🏪",
                role: "Vendors",
                line: "Hoardings, print, events, field teams",
                body: "When a client needs what you offer, our team comes to the vendors on this list first.",
                c: "#0EA97A",
              },
              {
                icon: "💻",
                role: "Freelancers",
                line: "Design, video, photography, marketing",
                body: "No bidding wars, no undercutting. Scoped briefs, priced before they reach you.",
                c: "#3A86FF",
              },
            ].map((r, i) => (
              <Reveal key={r.role} delay={i * 0.1}>
                <div
                  className="rounded-[24px] p-7 h-full group transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${r.c} 22%, transparent)`,
                    }}
                  >
                    {r.icon}
                  </div>

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
              className="rounded-[24px] p-8 mt-10"
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

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                {[
                  "Business posts a request",
                  "We match a partner",
                  "They accept and get to work",
                  "Client says how it went",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className="px-4 py-3 rounded-2xl text-[13px] font-semibold text-center"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {step}
                    </div>

                    {i < arr.length - 1 && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="var(--yellow)"
                        className="w-4 h-4 shrink-0 hidden sm:block"
                        style={{ opacity: 0.5 }}
                      >
                        <path d="m10 17 5-5-5-5v10Z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-center text-white/40 text-[14px] mt-10">
              Want to join when it opens? Call us on{" "}
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
      <section id="apps" className="relative py-28 px-5 overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              {
                name: "Lasan Mart",
                tag: "Available now",
                line: "For anyone who wants to be seen.",
                points: [
                  "Ask for any of our 30 services",
                  "Watch and post on Lasan Vibes",
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

                  <ul className="space-y-3 mt-6">
                    {app.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[14.5px]"
                        style={{
                          color: app.dark ? "#fff" : "var(--ink)",
                          opacity: 0.85,
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill={app.dark ? "var(--yellow)" : "var(--orange)"}
                          className="w-4 h-4 shrink-0 mt-0.5"
                        >
                          <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
                        </svg>
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
                  Lasan Vibes lives inside Lasan Mart. Install it alongside Hub
                  and post your shoots, reels and finished jobs where every
                  Lasan Mart user sees them — the easiest way to show
                  businesses what you can do.
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
      <section id="faq" className="relative py-28 px-5 overflow-hidden">
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
        className="relative z-10 py-28 px-5 overflow-hidden"
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
                className="px-6 py-3.5 rounded-2xl font-semibold text-[15px] border-2 text-white transition hover:-translate-y-0.5"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Call {CONTACT.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 text-[14px] text-white/45">
              <span>📍 {CONTACT.city}</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white/80"
              >
                ✉️ {CONTACT.email}
              </a>
              <span>🕐 Mon–Sat, 9am–7pm</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="relative z-10 py-10 px-5 border-t"
        style={{
          background: "var(--ink)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#FF8A3D,#F2542D)" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                <path d="M17 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7.2 14.6 7 15a1 1 0 0 0 1 1h12v-2H8.4l1.1-2H17a2 2 0 0 0 1.8-1L22 5H6.2l-.9-2H2v2h2l3.6 7.6-1.4 2Z" />
              </svg>
            </div>
            <span className="text-white/80 text-[13px] tracking-[0.14em] font-semibold">
              LASAN MART
            </span>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <a href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </a>
            <span>© {new Date().getFullYear()} Lasan Media Works</span>
          </div>
        </div>
      </footer>
    </>
  );
}
