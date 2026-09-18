"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
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
    a: "A plan bundles several services over three months at a fixed price — useful if you want steady marketing rather than one campaign. A single request is exactly that: one job, quoted on its own.",
  },
  {
    q: "What is Lasan Mart Hub, and should I be on it?",
    a: "Lasan Mart Hub is the other side of the same business. If you provide services — you're a creator, run a printing or hoarding business, or freelance as a photographer, editor or marketer — that's the app for you. Businesses looking to buy marketing want Lasan Mart.",
  },
  {
    q: "How does a partner get work through you?",
    a: "You create a profile, we verify it, and when a client needs what you offer we send you the job with a brief. You accept or decline. No bidding, no undercutting, and the client has already agreed the cost before it reaches you.",
  },
  {
    q: "Is my business information safe with you?",
    a: "Your details are used to contact you about your requests and nothing else. We never sell or share them. Ask us to delete your account and everything goes within 30 days.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto mt-16 space-y-3">
      {QUESTIONS.map((item, i) => {
        const isOpen = open === i;

        return (
          <Reveal key={item.q} delay={Math.min(i, 6) * 0.04}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left card p-6 transition"
              style={{
                borderColor: isOpen ? "var(--violet)" : "var(--line)",
                background: isOpen ? "rgba(109,59,245,0.03)" : "#fff",
              }}
            >
              <div className="flex items-start justify-between gap-5">
                <h3
                  className="display-md text-[17px] leading-snug"
                  style={{
                    color: isOpen ? "var(--violet-deep)" : "var(--ink)",
                  }}
                >
                  {item.q}
                </h3>

                <span
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
              </div>

              {/* Grid trick — animates height without knowing it */}
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="text-[15px] leading-relaxed pt-4 pr-10"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
