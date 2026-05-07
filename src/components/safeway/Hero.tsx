import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-bus.jpg";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title > span", { y: 60, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-meta", { opacity: 0, duration: 0.6 }, "-=0.2");

      gsap.to(".hero-bg", {
        scale: 1.08,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: root }
  );

  return (
    <section id="home" ref={root} className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury coaster bus on northern Pakistan mountain road"
          className="hero-bg h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_oklch(0.18_0.08_260/0.7),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 min-h-[100svh] flex flex-col justify-center">
        <span className="hero-badge inline-flex w-fit items-center gap-2 rounded-full glass text-white px-4 py-1.5 text-xs md:text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
          Premium Bus Rental Service • Pakistan
        </span>

        <h1 className="hero-title mt-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-white">
          <span className="block overflow-hidden">Safe Journeys,</span>
          <span className="block overflow-hidden">
            <span className="bg-gradient-to-r from-white via-[oklch(0.85_0.12_240)] to-primary-glow bg-clip-text text-transparent">
              Memorable Destinations
            </span>
          </span>
        </h1>

        <p className="hero-sub mt-6 max-w-2xl text-base md:text-xl text-white/85">
          Professional bus rental services across Pakistan — comfortable coasters, expert drivers, and unforgettable experiences in the Northern Areas and beyond.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="hero-cta group inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold shadow-elegant hover:bg-primary-glow hover:text-white transition-colors"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:03449494410"
            className="hero-cta inline-flex items-center gap-2 rounded-full glass text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call 0344 9494410
          </a>
        </div>

        <div className="hero-meta mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {[
            { k: "500+", v: "Happy Trips" },
            { k: "20+", v: "Destinations" },
            { k: "100%", v: "Safety First" },
            { k: "24/7", v: "Support" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-4 py-3">
              <div className="text-2xl md:text-3xl font-bold text-white font-display">{s.k}</div>
              <div className="text-xs md:text-sm text-white/75">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="hero-meta mt-8 inline-flex items-center gap-2 text-white/80 text-sm">
          <MapPin className="h-4 w-4 text-primary-glow" /> Serving all major cities & tourist destinations across Pakistan
        </div>
      </div>
    </section>
  );
}
