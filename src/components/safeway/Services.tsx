import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { img: g1, title: "Northern Tours", desc: "Hunza, Skardu, Naran, Kaghan & beyond — guided routes through Pakistan's stunning north." },
  { img: g6, title: "Wedding Transport", desc: "Elegant decorated buses to make your wedding entrance unforgettable." },
  { img: g4, title: "Corporate Trips", desc: "Comfortable group transport for off-sites, conferences, and team retreats." },
  { img: g3, title: "Family Tours", desc: "Safe, spacious rides built around your family's pace and comfort." },
  { img: g5, title: "Tourist Destinations", desc: "From Murree to Fairy Meadows — explore Pakistan's iconic spots in style." },
  { img: g2, title: "Event Transportation", desc: "Reliable bus rentals for school trips, functions, and large groups." },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="services" ref={root} className="py-20 md:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Bus rentals for every <span className="text-gradient">occasion</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Whether it's a Hunza adventure, a wedding entrance, or a corporate retreat — we have the right ride.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border/60"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
