import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import AudienceTabs from "./components/AudienceTabs";
import MethodologySteps from "./components/MethodologySteps";
import Modality from "./components/Modality";
import IndustryCurriculum from "./components/IndustryCurriculum";
import Comparison from "./components/Comparison";
import LevelTest from "./components/LevelTest";
import LeadForm from "./components/LeadForm";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ACADEMY_NAME, ACADEMY_TAGLINE } from "./config";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Differentiators />
        <AudienceTabs />
        <MethodologySteps />
        <Modality />
        <IndustryCurriculum />
        <Comparison />
        <LevelTest />
        <LeadForm />
      </main>
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {ACADEMY_NAME} · {ACADEMY_TAGLINE}
          </span>
          <span>Empresas y profesionales · Adultos y viajes · Niños</span>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}
