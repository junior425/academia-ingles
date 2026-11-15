import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Difference from "./components/Difference";
import SessionMethod from "./components/SessionMethod";
import FinalCta from "./components/FinalCta";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ACADEMY_NAME } from "./config";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Difference />
        <SessionMethod />
        <FinalCta />
      </main>
      <footer className="border-t border-line py-8 pb-24 sm:pb-8">
        <p className="mx-auto max-w-5xl px-6 text-center text-sm text-pearl/70">
          {ACADEMY_NAME} • Inglés Práctico Sin Metodologías Obsoletas • Cali,
          Colombia
        </p>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}
