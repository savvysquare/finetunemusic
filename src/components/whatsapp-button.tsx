import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const msg = encodeURIComponent("Hello FineTune Music! I'd like to make an inquiry.");
  return (
    <a
      href={`https://wa.me/2348149732788?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
