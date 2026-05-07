import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Trips Completed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 25, suffix: "+", label: "Destinations Covered" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.floor(counter.v).toString();
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-20 md:py-24 overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,_oklch(0.99_0_0/0.4),_transparent_40%),radial-gradient(circle_at_80%_70%,_oklch(0.62_0.19_250/0.6),_transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Numbers that speak for themselves</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center glass rounded-3xl p-8">
              <div className="font-display text-4xl md:text-6xl font-bold flex items-center justify-center">
                <span className="stat-num" data-value={s.value}>0</span>
                <span>{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm md:text-base text-white/85">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
