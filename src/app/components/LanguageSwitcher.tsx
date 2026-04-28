interface LanguageSwitcherProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-8 right-8 z-50 flex gap-2 bg-card rounded-xl p-2 border border-border/50 shadow-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          language === "en"
            ? "bg-[var(--pink-accent)] text-white"
            : "text-foreground/60 hover:text-foreground hover:bg-muted"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("no")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          language === "no"
            ? "bg-[var(--sea-green-accent)] text-white"
            : "text-foreground/60 hover:text-foreground hover:bg-muted"
        }`}
      >
        NO
      </button>
    </div>
  );
}
