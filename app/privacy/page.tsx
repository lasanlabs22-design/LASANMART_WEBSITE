import Link from "next/link";
import { CONTACT } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy — Lasan Mart",
  description: "How Lasan Mart collects, uses and protects your information.",
};

const UPDATED = "3 September 2026";

export default function Privacy() {
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
            Privacy Policy
          </h1>

          <p className="text-white/45 text-[14px] mt-3">
            Last updated {UPDATED}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-5 py-16">
        <Intro />

        <Section title="Who we are">
          <p>
            Lasan Mart is operated by Lasan Media Works, based in {CONTACT.city}
            . We provide online and offline marketing services to businesses,
            and this app is how you tell us what you need.
          </p>
          <p>
            If you have any question about this policy or about your
            information, contact us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="link">
              {CONTACT.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:+91${CONTACT.phone}`} className="link">
              +91 {CONTACT.phone}
            </a>
            .
          </p>
        </Section>

        <Section title="What we collect">
          <p>We only collect what we need to respond to your requests.</p>

          <Sub title="Information you give us">
            <Bullets
              items={[
                "Your name, phone number and email address, so our team can contact you about a request",
                "Your business name, description and sector, where you choose to provide them",
                "Your business address, if you set one — either by typing it, or by using your location",
                "A profile photo and company logo, if you upload them",
                "The content of your requests: what service you want, your budget range, timing and any description you write",
                "Videos and captions you post to Lasan Vibes",
              ]}
            />
          </Sub>

          <Sub title="Information collected automatically">
            <Bullets
              items={[
                "A device token, if you allow notifications, so we can alert you when a request changes status",
                "Basic technical information needed to deliver the app, such as your device type and app version",
                "View counts on Lasan Vibes videos, which are anonymous and not linked to you",
              ]}
            />
          </Sub>

          <Callout>
            We do not collect payment information in the app. Any payment for
            marketing work is arranged separately with our team.
          </Callout>
        </Section>

        <Section title="How we verify your identity">
          <p>
            Your phone number is how we keep your requests private. When you
            first post a request, we send a one-time code by SMS to confirm the
            number belongs to you. This verification is handled by Google
            Firebase Authentication.
          </p>
          <p>
            You may also choose to sign in with Google, in which case we receive
            your name, email address and profile picture from your Google
            account. We still verify your phone number separately.
          </p>
        </Section>

        <Section title="How we use your information">
          <Bullets
            items={[
              "To contact you about a request you have submitted",
              "To show you the status and history of your own requests",
              "To send you a notification when a request changes status",
              "To display videos you post to Lasan Vibes, along with your username",
              "To improve our services and understand which services businesses ask for most",
            ]}
          />
          <p className="mt-5">
            <strong>We do not sell your information.</strong> We do not share it
            with advertisers, and we do not use it for marketing unrelated to
            the request you made.
          </p>
        </Section>

        <Section title="Who we share it with">
          <p>
            We share information only with the services that make the app work,
            and only as much as each one needs:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {[
              {
                name: "Google Firebase",
                use: "Phone number verification, Google sign-in and push notifications",
              },
              {
                name: "Cloudinary",
                use: "Storing and delivering videos posted to Lasan Vibes",
              },
              {
                name: "Resend",
                use: "Sending your request details to our team by email",
              },
              {
                name: "Railway",
                use: "Hosting our servers and database",
              },
              {
                name: "Google Maps",
                use: "Showing a map when you set your business location",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="card p-4"
                style={{ borderRadius: 16 }}
              >
                <p className="font-semibold text-[14.5px]">{p.name}</p>
                <p
                  className="text-[13px] mt-1 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {p.use}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6">
            We may also share information where the law requires it, or to
            protect our rights or the safety of others.
          </p>
        </Section>

        <Section title="Lasan Vibes is public">
          <p>
            Videos you post to Lasan Vibes are visible to everyone using the
            app, along with the username generated from your name. Please only
            post content you are happy to share widely.
          </p>
          <p>
            You can edit the caption or delete your own videos at any time from
            the app. Deleting removes the video for everyone and removes the
            file from our storage.
          </p>
        </Section>

        <Section title="How long we keep it">
          <Bullets
            items={[
              "Your contact details and requests are kept while you use the service, so you can see your own history",
              "Videos are kept until you delete them, or until our team removes them",
              "Notification tokens are removed when you uninstall the app",
              "You can ask us to delete everything at any time — see below",
            ]}
          />
        </Section>

        <Section title="Your choices">
          <Sub title="Deleting your data">
            <p>
              Email{" "}
              <a href={`mailto:${CONTACT.email}`} className="link">
                {CONTACT.email}
              </a>{" "}
              from the address linked to your account, or call us, and we will
              delete your contact details, requests and videos within 30 days.
              We will confirm once it is done.
            </p>
          </Sub>

          <Sub title="Notifications">
            <p>
              Turn off notifications for Lasan Mart in your phone&apos;s
              settings at any time. You will still see updates inside the app.
            </p>
          </Sub>

          <Sub title="Location">
            <p>
              Location access is optional and only used when you set your
              business address. You can decline it and type your address
              instead, or revoke it in your phone&apos;s settings.
            </p>
          </Sub>

          <Sub title="Clearing this device">
            <p>
              Tap Settings, then Log Out, to clear your saved details from a
              device. Your requests remain linked to your verified phone number.
            </p>
          </Sub>
        </Section>

        <Section title="Keeping it secure">
          <p>
            Your requests can only be read by someone who has verified your
            phone number by SMS. Information travels over encrypted connections,
            and our database is not publicly accessible.
          </p>
          <p>
            No system is perfectly secure, but we take reasonable steps to
            protect your information and we will tell you promptly if something
            goes wrong.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Lasan Mart is a business tool and is not intended for anyone under
            18. We do not knowingly collect information from children. If you
            believe a child has provided us with information, contact us and we
            will remove it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we change this policy we will update the date at the top of this
            page. Significant changes will be announced in the app.
          </p>
        </Section>

        <Section title="Contact us">
          <div className="card p-6" style={{ borderRadius: 18 }}>
            <p className="font-semibold text-[15px]">Lasan Media Works</p>
            <p className="text-[14px] mt-1" style={{ color: "var(--muted)" }}>
              {CONTACT.city}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[14px]">
              <a href={`mailto:${CONTACT.email}`} className="link">
                {CONTACT.email}
              </a>
              <a href={`tel:+91${CONTACT.phone}`} className="link">
                +91 {CONTACT.phone}
              </a>
            </div>
          </div>
        </Section>

        <p
          className="text-[13px] text-center mt-16 pt-8 border-t"
          style={{ color: "var(--muted)", borderColor: "var(--line)" }}
        >
          © {new Date().getFullYear()} Lasan Media Works. All rights reserved.
        </p>
      </div>
    </main>
  );
}

/* ---------- Pieces ---------- */

function Intro() {
  return (
    <div
      className="rounded-[20px] p-6 mb-12"
      style={{
        background: "rgba(109,59,245,0.06)",
        border: "1px solid rgba(109,59,245,0.14)",
      }}
    >
      <p className="text-[15px] leading-relaxed">
        <strong>The short version:</strong> we collect your name, phone number
        and email so our team can respond to the marketing requests you post. We
        verify your phone number so nobody else can see your requests. We do not
        sell your data, and you can ask us to delete it at any time.
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
    <section className="mb-14">
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
