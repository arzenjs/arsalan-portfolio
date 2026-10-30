"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle, Mail } from "lucide-react";
import { site, socials } from "@/lib/site";

const budgetOptions = [
  "Not sure yet",
  "Under ₹40,000 / $500",
  "₹40,000 – ₹1,50,000 / $500 – $2,000",
  "Above ₹1,50,000 / $2,000",
  "Full-time role / hiring enquiry",
];

const initialForm = { name: "", email: "", budget: budgetOptions[0], message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorText, setErrorText] = useState("");

  function update(field) {
    return (event) => setForm((f) => ({ ...f, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorText(data.error || "Something went wrong. Please email me directly instead.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setErrorText("Network error — please email me directly instead.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="shell pt-12 md:pt-16" aria-labelledby="contact-heading">
      <div className="rounded-2xl border border-line bg-panel p-7 sm:p-10 md:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">04 / Contact</p>
            <h2 id="contact-heading" className="display mt-4 text-[clamp(2rem,4.5vw,3.5rem)]">
              Have something worth building?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-dim">
              Tell me what you&apos;re making and what &quot;done&quot; looks like for you.
              Your message is stored privately and read by me alone — or skip the
              form and email me directly:
            </p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-6 inline-flex items-center gap-3 text-ink"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:bg-ink group-hover:text-bg">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span className="link-sweep font-medium break-all">{site.email}</span>
            </a>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Also on — {socials.map((s) => s.label).join(" · ")}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.slice(0, 4).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:border-ink hover:text-ink"
                >
                  {s.label}
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
            {/* Honeypot: invisible to humans, bots fill it and get dropped.
                Fixed positioning keeps it offscreen regardless of any
                positioned ancestor in the layout tree. */}
            <div className="fixed -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update("company")}
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="eyebrow block pb-2">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-line-strong"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="eyebrow block pb-2">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-line-strong"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-budget" className="eyebrow block pb-2">Budget range</label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={update("budget")}
                className="w-full appearance-none rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-line-strong"
              >
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="eyebrow block pb-2">Project details *</label>
              <textarea
                id="contact-message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={update("message")}
                className="w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-line-strong"
                placeholder="What are you building, who is it for, and when do you need it?"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg disabled:translate-y-0 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    Sending
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "sent" && (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="size-4" aria-hidden="true" />
                    Received — thank you. I&apos;ll reply by email.
                  </p>
                )}
                {status === "error" && (
                  <p className="inline-flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="size-4" aria-hidden="true" />
                    {errorText}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs leading-relaxed text-faint">
              No newsletters, no sharing, no tracking. Messages are stored in a
              private database solely so I can reply to you.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
