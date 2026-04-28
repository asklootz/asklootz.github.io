import { User } from "lucide-react";
import pfp from "../../img/profile.jpg";
interface HeroProps {
  language: string;
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      greeting: "Hello, I'm",
      title: "IT and information systems student at UiA",
      description: "I'm a student working on my bachelors. Earlier IT-consultant with a specialization in network engineering and infrastructure.",
      cta1: "View My Work",
      cta2: "Get In Touch",
    },
    no: {
      greeting: "Hei, jeg er",
      title: "IT og informasjonsystemsstudenter ved UiA",
      description: "Er nåværende student som jobber med bachelor. Tidligere IT-konsulent med spesialisering innen nettverksdrift og infrastruktur.",
      cta1: "Se mitt arbeid",
      cta2: "Ta kontakt",
    },
  };

  const t = content[language as keyof typeof content];

  return (
      <section id="home" className="pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-card border-4 border-background shadow-xl">
                {/* Replace this placeholder with your actual image */}
                <img
                    src={pfp}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-muted">
                  <User className="w-24 h-24 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <p className="text-[var(--sea-green-accent)]">{t.greeting}</p>
              <h1 className="text-6xl md:text-7xl tracking-tight">
                Ask Lootz
              </h1>
              <h2 className="text-3xl md:text-4xl text-muted-foreground">
                {t.title}
              </h2>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t.description}
            </p>


          </div>
        </div>
      </section>
  );
}
