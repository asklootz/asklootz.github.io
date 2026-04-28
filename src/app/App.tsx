import { useState } from "react";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App() {
  const [language, setLanguage] = useState("no");

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <Navigation language={language} />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-32">
        <Hero language={language} />
        <Education language={language} />
        <About language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <footer className="border-t border-border/50 mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 text-center text-muted-foreground">
          <p>&copy; 2026 {language === "en" ? "All rights reserved." : "Alle rettigheter reservert."}</p>
        </div>
      </footer>
    </div>
  );
}