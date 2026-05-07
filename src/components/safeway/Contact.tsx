import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone, MapPin, MessageCircle, Mail, Send } from "lucide-react";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a little about your trip").max(800),
});

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; msg?: string }>({ type: "idle" });

  useGSAP(
    () => {
      gsap.from(".contact-anim", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus({ type: "err", msg: parsed.error.issues[0].message });
      return;
    }
    const text = `New inquiry from ${parsed.data.name} (${parsed.data.phone}):\n\n${parsed.data.message}`;
    const wa = `https://wa.me/923449494410?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    setStatus({ type: "ok", msg: "Opening WhatsApp to send your inquiry…" });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" ref={root} className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Plan your <span className="text-gradient">next journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Reach out for booking, quotes, or custom travel plans. We respond fast.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="contact-anim lg:col-span-2 space-y-4">
            <a href="tel:03449494410" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-elegant transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-semibold text-foreground">0344 9494410</div>
              </div>
            </a>
            <a href="https://wa.me/923449494410" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-elegant transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-[oklch(0.7_0.17_150)] text-white flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="font-semibold text-foreground">Chat with us instantly</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Service area</div>
                <div className="font-semibold text-foreground">All major cities & northern Pakistan</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-foreground">info@safewaybusrentals.pk</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3] bg-secondary">
              <iframe
                title="SafeWay service area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=60.0%2C23.0%2C78.0%2C37.5&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-anim lg:col-span-3 rounded-3xl bg-card border border-border p-6 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-foreground">Quick inquiry</h3>
            <p className="text-muted-foreground mt-1">Send us your travel details and we'll get back to you shortly.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="name">Name</label>
                <input id="name" name="name" required maxLength={80} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" required maxLength={20} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition" placeholder="03XX XXXXXXX" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground" htmlFor="message">Trip details</label>
              <textarea id="message" name="message" rows={5} required maxLength={800} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring transition resize-none" placeholder="Destination, dates, group size…" />
            </div>

            {status.type !== "idle" && (
              <div className={`mt-4 text-sm ${status.type === "ok" ? "text-[oklch(0.55_0.15_150)]" : "text-destructive"}`}>
                {status.msg}
              </div>
            )}

            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition-transform w-full sm:w-auto">
              Send via WhatsApp <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
