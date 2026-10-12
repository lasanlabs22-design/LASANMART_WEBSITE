"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const BUSINESS = [
  {
    q: "What does it cost to use Lasan Mart?",
    a: "Nothing to download, browse or ask. You only pay for work you've seen quoted and approved. There's no subscription and no charge for posting a request.",
  },
  {
    q: "Am I committing to anything when I send a request?",
    a: "No. A request is you asking us to get in touch — nothing is booked and nothing is charged. Our team calls you, talks through what you need, and quotes it. You decide from there.",
  },
  {
    q: "How quickly will someone get back to me?",
    a: "Within four to six working hours, Monday to Saturday, 9am to 7pm. If you send something late at night, expect a call the next morning.",
  },
  {
    q: "Do you actually do the work, or just pass it on?",
    a: "Both, depending on what it is. Some work our own team handles. For hoardings, printing, shoots and events we use partners we've verified, and we manage them for you — you deal with us throughout.",
  },
  {
    q: "Can I use it if my business is outside Andhra Pradesh?",
    a: "Ask us. We're strongest around Tirupati and the surrounding districts, especially for anything physical like hoardings. Digital work we can do anywhere.",
  },
  {
    q: "What if I don't know what marketing I need?",
    a: "That's common, and it's what Business Ideas is for. Pick your sector and the app shows what tends to work, what to spend first, and which services to start with. Or just call us and describe the problem.",
  },
  {
    q: "How do the plans differ from posting a single request?",
    a: "A plan bundles reels, posters, ads and management into a fixed monthly price, useful if you want steady marketing rather than one campaign. A single request is exactly that: one job, quoted on its own.",
  },
  {
    q: "How do I track my request?",
    a: "Open the My Requests tab. Every request shows where it is: Received, Contacted, In Progress or Completed. Your phone buzzes whenever that changes, and the history sits behind the bell on the Home screen.",
  },
  {
    q: "Can I change or cancel a request?",
    a: "Not from the app yet. Call or WhatsApp our team with the request details and we will update it for you.",
  },
  {
    q: "What if the service I want is not listed?",
    a: "Use Custom Requirement on the Home screen. Tell us what you need in your own words and our team comes back with a tailored plan.",
  },
  {
    q: "My request says a partner is working on it. Who are they?",
    a: "Someone from our verified network doing the work on the ground. We stay in the middle throughout, so a change, an update or a problem comes to us and we handle it. You never have to chase them.",
  },
  {
    q: "How does influencer marketing work?",
    a: "Open Influencers in the app and browse our verified creators: what they post about, their following, their city and their rate per post. Pick as many as you like and send the request. Our team handles the brief, the negotiating and the campaign.",
  },
  {
    q: "Can I hire a photographer or video editor?",
    a: "Yes. Freelancers covers photography, videography, video editing and digital marketing. Pick what you need, describe the work, and our team finds the right person and comes back with a quote.",
  },
  {
    q: "Do I need to create an account?",
    a: "No password and no sign-up form. Browse as a guest, or sign in with Google or your phone number. The first time you post a request we ask for your name and email and send a one-time code to confirm your number. After that you are not asked again.",
  },
  {
    q: "Why do you verify my phone number?",
    a: "It is how we keep your requests private. Only someone who has confirmed the number with a one-time code can see what was submitted from it, so nobody can look up your requests by guessing your number.",
  },
  {
    q: "Can I post on Lasan Vibes?",
    a: "Yes, once our team approves you. Vibes is seen by everyone using Lasan Mart, so tap to ask, tell us what you would share, and we come back to you. After that your videos go live as soon as you post them. Videos can be up to 90 seconds and under 60MB, and portrait looks best.",
  },
  {
    q: "Are my quotations saved?",
    a: "Not yet. Generate the PDF and share or save it before leaving the screen. Add your company logo in My Account first so it appears as a watermark.",
  },
  {
    q: "I changed my phone number. What happens to my requests?",
    a: "They stay linked to the number you used when posting them. Verify the new number to start a fresh history, and contact us if you need earlier requests moved across.",
  },
  {
    q: "Is my business information safe with you?",
    a: "Your details are used to contact you about your requests and nothing else. We never sell or share them. You can delete your account from Settings in the app, which removes your details, requests and videos straight away.",
  },
];

const PARTNERS = [
  {
    q: "What is Lasan Mart Hub, and should I be on it?",
    a: "Lasan Mart Hub is the other side of the same business. If you provide services — you're a creator, run a printing or hoarding business, or freelance as a photographer, editor or marketer — that's where you get work. Both apps are open to anyone, though, and many people use both: install Lasan Mart alongside Hub to post your work on Lasan Vibes, where every Lasan Mart user can see it.",
  },
  {
    q: "How does a partner get work through you?",
    a: "You create a profile, we verify it, and when a client needs what you offer we send you the job with a brief. You accept or decline. No bidding, no undercutting, and the client has already agreed the cost before it reaches you.",
  },
  {
    q: "Does it cost anything to join?",
    a: "No. Joining is free and stays free. We take our margin from what the client pays, not from you.",
  },
  {
    q: "How long does approval take?",
    a: "Usually a day or two. A person on our team reads every profile, and nothing is approved automatically. You get a notification the moment it is done.",
  },
  {
    q: "Why was my profile rejected?",
    a: "We leave the reason on your Home screen. Most often it is something small, like a handle that does not match the name, or missing details. Fix it, save, and it comes back to us.",
  },
  {
    q: "Why does editing my profile send it back for review?",
    a: "Businesses see your details as verified. If a rate or a service could change quietly after approval, that word would mean nothing. The re-check is usually quick.",
  },
  {
    q: "What happens if I decline a job?",
    a: "Nothing bad. We ask why so we can place it with someone else quickly. Declining never counts against you. We would rather know than have work accepted that cannot be delivered.",
  },
  {
    q: "Why can I only see the client's first name?",
    a: "We handle the client relationship, so everything goes through our team. If you need to know more about a job, message us and we will find out.",
  },
  {
    q: "How and when do I get paid?",
    a: "Our team agrees the amount with you before the job starts, and pays once the work is completed and the client is satisfied. Mark the job complete in the app when it is done.",
  },
  {
    q: "Can I change my rate?",
    a: "Yes, any time. Creators update their rate per post; vendors and freelancers update their rate card, where a line for each thing you do most is plenty. It goes back for a quick review, then applies to future work.",
  },
  {
    q: "Do I need a GST number?",
    a: "Vendors do. We work with registered businesses so invoicing is clean on both sides. Creators and freelancers do not.",
  },
  {
    q: "Do you check my Instagram?",
    a: "Yes, for creators. We look at the handle you gave us and check it matches the name and following you entered. It is the main thing we verify.",
  },
  {
    q: "How do I pause or leave?",
    a: "Message our team and we pause your profile so no new work comes your way. To leave for good, request deletion from the Account tab and everything goes within 30 days.",
  },
];

const GROUPS = [
  { key: "business", label: "Businesses", items: BUSINESS },
  { key: "partners", label: "Hub partners", items: PARTNERS },
];

export default function Faq() {
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const items = GROUPS[group].items;

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-3">
      <div
        className="flex justify-center gap-2 mb-8"
        role="group"
        aria-label="Questions for"
      >
        {GROUPS.map((g, i) => {
          const on = i === group;
          return (
            <button
              key={g.key}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setGroup(i);
                setOpen(0);
              }}
              className="px-4 py-2 rounded-xl text-[14px] font-semibold border transition-colors"
              style={{
                background: on ? "var(--ink)" : "#fff",
                color: on ? "#fff" : "var(--ink)",
                borderColor: on ? "var(--ink)" : "var(--line)",
              }}
            >
              {g.label}
              <span className="ml-2 opacity-50">{g.items.length}</span>
            </button>
          );
        })}
      </div>

      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <Reveal key={item.q} delay={Math.min(i, 6) * 0.04}>
            <div
              className="card transition-colors"
              style={{
                borderColor: isOpen ? "var(--violet)" : "var(--line)",
                background: isOpen ? "rgba(109,59,245,0.03)" : "#fff",
              }}
            >
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 sm:gap-5 rounded-[22px]"
                >
                  <span
                    className="display-md text-[16px] sm:text-[17px] leading-snug transition-colors"
                    style={{
                      color: isOpen ? "var(--violet-deep)" : "var(--ink)",
                    }}
                  >
                    {item.q}
                  </span>

                  <span
                    aria-hidden
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      background: isOpen
                        ? "var(--violet)"
                        : "rgba(20,16,46,0.05)",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={isOpen ? "#fff" : "var(--muted)"}
                      className="w-4 h-4"
                    >
                      <path d="M11 5h2v14h-2V5Z" />
                      <path d="M5 11h14v2H5v-2Z" />
                    </svg>
                  </span>
                </button>
              </h3>

              {/* Grid trick — animates height without knowing it */}
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                inert={!isOpen}
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-relaxed px-5 sm:px-6 pb-6 -mt-1 sm:-mt-2 pr-12 sm:pr-16"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
