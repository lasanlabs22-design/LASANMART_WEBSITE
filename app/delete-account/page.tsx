import Link from "next/link";
import { CONTACT } from "@/lib/site";
import PoweredBy from "@/components/PoweredBy";

export const metadata = {
  title: "Delete your account — Lasan Mart",
  description:
    "How to delete your Lasan Mart or Lasan Mart Hub account and the data attached to it.",
};

/* Google Play asks every app with accounts for a web page like this —
   one that works without the app installed. Keep it in step with the
   "Deleting your data" and "Leaving Hub" parts of /privacy. */

const MAIL_SUBJECT = encodeURIComponent("Delete my account");

export default function DeleteAccount() {
  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      {/* Header */}
      <div
        className="px-5 pt-14 pb-16 relative overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="blob"
          style={{
            width: 400,
            height: 400,
            top: "-40%",
            right: "-8%",
            background: "var(--violet)",
            opacity: 0.35,
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white/80 transition"
          >
            ← Back to Lasan Mart
          </Link>

          <h1
            className="display text-white mt-6"
            style={{ fontSize: "clamp(32px, 6vw, 52px)" }}
          >
            Delete your account
          </h1>

          <p className="text-white/60 text-[15px] mt-3 max-w-xl">
            For Lasan Mart and Lasan Mart Hub. You can do it in the app, or ask
            us here without the app.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-5 py-16">
        <div className="grid sm:grid-cols-2 gap-4">
          <AppCard
            app="Lasan Mart"
            who="For businesses"
            steps={[
              "Open Lasan Mart and go to Settings",
              "Tap Delete Account and confirm",
            ]}
            result="Deleted straight away."
          />
          <AppCard
            app="Lasan Mart Hub"
            who="For creators, vendors and freelancers"
            steps={[
              "Open Lasan Mart Hub and go to the Account tab",
              "Tap Delete my account and confirm",
            ]}
            result="Our team deletes it within 30 days, and you can follow it in the Support tab."
          />
        </div>

        <Section title="Without the app">
          <p>
            Email us from the address on your account, or call us, and tell us
            the phone number you signed up with and which app it is for. We
            delete your account within 30 days and confirm once it is done.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href={`mailto:${CONTACT.email}?subject=${MAIL_SUBJECT}`}
              className="card px-5 py-3 text-[14.5px] font-semibold"
              style={{ borderRadius: 14 }}
            >
              Email {CONTACT.email}
            </a>
            <a
              href={`tel:+91${CONTACT.phone}`}
              className="card px-5 py-3 text-[14.5px] font-semibold"
              style={{ borderRadius: 14 }}
            >
              Call +91 {CONTACT.phone}
            </a>
          </div>
        </Section>

        <Section title="What gets deleted">
          <Sub title="Lasan Mart">
            <Bullets
              items={[
                "Your contact details",
                "Your requests and their history",
                "Your notifications and Lasan Vibes likes",
                "Videos you posted to Lasan Vibes, including the files",
                "Your phone sign-in",
              ]}
            />
          </Sub>

          <Sub title="Lasan Mart Hub">
            <Bullets
              items={[
                "Your partner profile, photo and rate card",
                "Your work history: offers, updates and notes",
                "Messages you sent our team from the app",
              ]}
            />
          </Sub>

          <Callout>
            Each app is deleted separately. Deleting Lasan Mart does not delete
            a Lasan Mart Hub profile on the same number, and the other way round.
          </Callout>
        </Section>

        <Section title="What we keep">
          <p>
            Nothing tied to your account. View counts on Lasan Vibes videos are
            anonymous and were never linked to you. See our{" "}
            <Link href="/privacy" className="link">
              Privacy Policy
            </Link>{" "}
            for the full detail.
          </p>
        </Section>

        <div
          className="text-[13px] mt-16 pt-8 border-t flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-3"
          style={{ color: "var(--muted)", borderColor: "var(--line)" }}
        >
          <p>
            © {new Date().getFullYear()} Lasan Media Works. All rights
            reserved.
          </p>
          <PoweredBy />
        </div>
      </div>
    </main>
  );
}

/* ---------- Pieces ---------- */

function AppCard({
  app,
  who,
  steps,
  result,
}: {
  app: string;
  who: string;
  steps: string[];
  result: string;
}) {
  return (
    <div className="card p-6 h-full" style={{ borderRadius: 20 }}>
      <p className="font-semibold text-[17px]">{app}</p>
      <p className="text-[13px] mt-0.5" style={{ color: "var(--muted)" }}>
        {who}
      </p>

      <ol className="mt-5 space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-3 text-[14.5px] leading-relaxed">
            <span
              className="w-6 h-6 rounded-full shrink-0 grid place-items-center text-[12px] font-semibold text-white"
              style={{ background: "var(--violet)" }}
            >
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>

      <p className="text-[13.5px] mt-5" style={{ color: "var(--muted)" }}>
        {result}
      </p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="display-md text-[24px] mb-4">{title}</h2>
      <div className="policy-body space-y-4">{children}</div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-[16px] mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5"
            style={{ background: "var(--orange)" }}
          />
          <span style={{ color: "var(--muted)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5 mt-6 text-[14.5px] leading-relaxed"
      style={{
        background: "rgba(255,197,41,0.14)",
        borderLeft: "4px solid var(--yellow)",
      }}
    >
      {children}
    </div>
  );
}
