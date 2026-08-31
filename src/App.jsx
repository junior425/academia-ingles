import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import MethodologySteps from "./components/MethodologySteps";
import IndustryCurriculum from "./components/IndustryCurriculum";
import Comparison from "./components/Comparison";
import LevelTest from "./components/LevelTest";
import LeadForm from "./components/LeadForm";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ACADEMY_NAME, ACADEMY_TAGLINE } from "./config";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Differentiators />
        <MethodologySteps />
        <IndustryCurriculum />
        <Comparison />
        <LevelTest />
        <LeadForm />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {ACADEMY_NAME} · {ACADEMY_TAGLINE}
          </span>
          <span>Inglés corporativo por industria · Programas de 8 meses</span>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}
