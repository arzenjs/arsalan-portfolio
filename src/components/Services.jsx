import { Check } from "lucide-react";
import { services, processSteps } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="shell pt-12 md:pt-16" aria-labelledby="services-heading">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <div>
            <p className="eyebrow">03 / Services</p>
            <h2 id="services-heading" className="display mt-4 text-[clamp(2rem,5vw,3.75rem)]">
              What I can build for you.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-dim">
            Scoped like a professional, documented like a handover. If your project
            doesn&apos;t need a database or a login system, I won&apos;t sell you one.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.08} className="bg-bg transition-colors duration-300 hover:bg-panel">
            <article className="flex h-full flex-col p-7 md:p-8">
              <p className="font-mono text-xs tracking-[0.2em] text-faint">{service.index}</p>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-dim">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400/80" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Process */}
      <div className="mt-20">
        <Reveal>
          <p className="eyebrow pb-8">How a project runs</p>
        </Reveal>
        <ol className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 0.08}>
              <p className="font-mono text-xs tracking-[0.2em] text-faint">{step.index}</p>
              <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
