import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="https://wa.me/923449494410"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.17_150)] text-white pl-4 pr-5 py-3 font-semibold shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
