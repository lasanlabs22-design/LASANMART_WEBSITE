import Nav from "@/components/Nav";
import Aurora from "@/components/Aurora";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import StoreButton from "@/components/StoreButton";
import ServiceCarousel from "@/components/ServiceCarousel";
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
