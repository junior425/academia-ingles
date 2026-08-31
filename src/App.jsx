import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import LevelTest from "./components/LevelTest";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ACADEMY_NAME } from "./config";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <LevelTest />
        <Contact />
      </main>
      <footer className="bg-slate-950 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
          © {new Date().getFullYear()} {ACADEMY_NAME} · Academia de Inglés
          Personalizada
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}
