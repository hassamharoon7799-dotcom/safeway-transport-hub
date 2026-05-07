import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Sofa, UserCheck, Clock, Sparkles, MapPinned } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Well-maintained vehicles and trained drivers prioritising your safety on every trip." },
  { icon: Sofa, title: "Comfortable Buses", desc: "Spacious AC coasters with premium seating for long, relaxed journeys." },
  { icon: UserCheck, title: "Professional Drivers", desc: "Experienced, courteous drivers who know every route across Pakistan." },
  { icon: Clock, title: "On-Time Service", desc: "Punctual pickups and drop-offs — we respect your schedule." },
  { icon: Sparkles, title: "Tours & Events", desc: "Perfect for weddings, family trips, corporate events, and group tours." },
  { icon: MapPinned, title: "Across Pakistan", desc: "From Karachi to Khunjerab — we cover all major cities and northern destinations." },
];

export function Features() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-card",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-20 md:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Why SafeWay</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Built on <span className="text-gradient">trust</span> and comfort
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every detail of your journey is engineered for safety, reliability, and an experience worth remembering.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card group relative rounded-3xl bg-card p-7 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border/60 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="relative mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
