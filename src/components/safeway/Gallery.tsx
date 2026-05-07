import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: g1, span: "md:col-span-2 md:row-span-2", alt: "Northern Pakistan scenic road" },
  { src: g2, span: "", alt: "Coaster on mountain pass" },
  { src: g3, span: "", alt: "Group tour" },
  { src: g4, span: "md:col-span-2", alt: "Bus interior" },
  { src: g5, span: "", alt: "Mountain landscape" },
  { src: g6, span: "", alt: "Wedding bus" },
];

export function Gallery() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gallery-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="gallery" ref={root} className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Moments from the <span className="text-gradient">road</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A glimpse of our buses, our routes, and the journeys we've created across Pakistan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-3xl shadow-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
