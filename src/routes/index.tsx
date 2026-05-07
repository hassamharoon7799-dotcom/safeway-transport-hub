import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/safeway/Navbar";
import { Hero } from "@/components/safeway/Hero";
import { Features } from "@/components/safeway/Features";
import { About } from "@/components/safeway/About";
import { Services } from "@/components/safeway/Services";
import { Gallery } from "@/components/safeway/Gallery";
import { Stats } from "@/components/safeway/Stats";
import { Testimonials } from "@/components/safeway/Testimonials";
import { Contact } from "@/components/safeway/Contact";
import { Footer } from "@/components/safeway/Footer";
import { FloatingCTA } from "@/components/safeway/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeWay Bus Rentals — Premium Bus Rental Services Across Pakistan" },
      {
        name: "description",
        content:
          "SafeWay Bus Rentals offers safe, comfortable, and professional bus rental services for Northern Areas tours, weddings, corporate trips, and tourist destinations across Pakistan. Call 0344 9494410.",
      },
      { property: "og:title", content: "SafeWay Bus Rentals — Safe Journeys, Memorable Destinations" },
      { property: "og:description", content: "Premium coaster bus rentals across Pakistan. Northern Areas tours, weddings, corporate, and family trips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
