import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Hunza Tour, Lahore",
    rating: 5,
    text: "Very professional and comfortable service for our Hunza tour. The driver was excellent and the bus was spotless. Highly recommended!",
  },
  {
    name: "Fatima Sheikh",
    role: "Wedding Event, Islamabad",
    rating: 5,
    text: "Excellent transport service for our wedding event. The decorated bus was beautiful and the team was on time and incredibly helpful.",
  },
  {
    name: "Bilal Ahmed",
    role: "Corporate Retreat, Karachi",
    rating: 5,
    text: "Booked SafeWay for our company off-site to Naran. Smooth experience start to finish — comfortable seats and a very safe driver.",
  },
  {
    name: "Ayesha Malik",
    role: "Family Trip, Skardu",
    rating: 5,
    text: "We travelled with our extended family — kids, elders, everyone was comfortable. Will definitely book again for our next trip.",
  },
];

export function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".test-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="py-20 md:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Loved by <span className="text-gradient">travellers</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="test-card relative rounded-3xl bg-card p-7 shadow-card border border-border/60 hover:shadow-elegant transition-shadow">
              <Quote className="h-8 w-8 text-primary-glow/40" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
