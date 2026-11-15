import { DEMO_WHATSAPP_URL } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const VARIANTS = {
  gold: "bg-gold text-ink shadow-gold/20 hover:bg-gold-hover",
  whatsapp: "bg-emerald text-white shadow-emerald/25 hover:bg-emerald-hover",
};

export default function CtaButton({ children, variant = "gold" }) {
  return (
    <a
      href={DEMO_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-extrabold shadow-xl transition hover:-translate-y-0.5 sm:w-auto sm:text-lg ${VARIANTS[variant]}`}
    >
      <WhatsAppIcon className="h-6 w-6" />
      {children}
    </a>
  );
}
