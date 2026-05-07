import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import bus from "@/assets/about-bus.jpg";

gsap.registerPlugin(ScrollTrigger);

const points = [
  "Specialists in Northern Areas tours",
  "Customised travel bookings",
  "Wedding & corporate transportation",
  "Friendly customer-focused service",
];

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-img", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".about-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="about-img relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={bus}
                alt="SafeWay luxury coaster bus"
                className="w-full h-[460px] md:h-[560px] object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block glass-light rounded-2xl p-5 shadow-elegant">
              <div className="text-3xl font-bold text-gradient font-display">10+</div>
              <div className="text-sm text-muted-foreground">Years of trusted service</div>
            </div>
          </div>

          <div className="about-content">
            <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">About SafeWay</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Your Journey, <span className="text-gradient">Our Responsibility</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              SafeWay Bus Rentals provides reliable, comfortable, and professional transport services for tours, weddings, family trips, and events across Pakistan. We specialise in Northern Areas travel with a focus on safety, customer satisfaction, and quality service.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-gradient-primary text-primary-foreground px-7 py-3 font-semibold shadow-glow hover:scale-[1.03] transition-transform">
                Our Services
              </a>
              <a href="#contact" className="rounded-full border border-border px-7 py-3 font-semibold text-foreground hover:bg-secondary transition-colors">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
