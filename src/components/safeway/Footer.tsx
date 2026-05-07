import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/safeway-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="bg-white inline-flex rounded-2xl p-3">
              <img src={logo} alt="SafeWay Bus Rentals" className="h-12 w-auto" />
            </div>
            <p className="mt-5 text-primary-foreground/75 max-w-md">
              Your Journey, Our Responsibility. Premium bus rental services across Pakistan — from city events to Northern Areas adventures.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://wa.me/923449494410" aria-label="WhatsApp" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition"><Phone className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="text-primary-foreground/80 hover:text-white transition">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-1 text-primary-glow" /><span>0344 9494410</span></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-1 text-primary-glow" /><span>info@safewaybusrentals.pk</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-primary-glow" /><span>Serving all major cities across Pakistan</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} SafeWay Bus Rentals. All rights reserved.</p>
          <p>Crafted with care for Pakistani travellers.</p>
        </div>
      </div>
    </footer>
  );
}
