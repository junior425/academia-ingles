import { whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const MESSAGE =
  "¡Hola! Quiero información sobre las clases de inglés personalizadas.";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 font-bold text-white shadow-xl shadow-emerald-900/30 transition hover:scale-105 hover:bg-[#1ebe5b] sm:bottom-6 sm:right-6 sm:px-5 sm:py-4"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="hidden sm:inline">Escríbenos</span>
    </a>
  );
}
