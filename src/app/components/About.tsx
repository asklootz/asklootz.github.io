interface AboutProps {
  language: string;
}

export function About({ language }: AboutProps) {
  const content = {
    en: {
      title: "About Me",
      p1: "With over 4 years of experience in IT-support and infrastucture, I specialized in network technology and infrastructure along with servers to build a system to support varied userbase.",
      p2: "My approach of working is technical and solution oriented, with a focus on understanding the problem and writing readable code.",
      p3: "I do volunteer work, being on the board for Systematicus as the head of technology since Feburay 2025 and working as a confirmation leader for the human ethics society since 2025.",
      p4: "My knowledge and experience is a great combination for my skills and abilities. I love to work with and for people in regards to helping users, supporting students as TA or working with a team on a project",
      locationTitle: "Location",
      locationCity: "Kristiansand, Agder",
      locationAvailability: "Norway",
    },
    no: {
      title: "Om meg",
      p1: "Med over 4 års erfaring innen IT-support og infrastruktur, har jeg spesialisert meg innen nettverksteknologi og infrastruktur sammen med servere for å bygge et system som støtter en variert brukerbase.",
      p2: "Min arbeidsmetode er teknisk og løsningsorientert, med fokus på å forstå problemet og skrive lesbar kode.",
      p3: "driver med frivillig arbeid som styremedlem for Systematicus som teknologiansvarlig siden februar 2025 og arbeid som konfirmasjonsleder for humanetiske foreningen siden 2025.",
      p4: "Min kunnskap og erfaring er en flott kombinasjon for mine ferdigheter og evner. Jeg elsker å jobbe med og for mennesker når det gjelder å hjelpe brukere, støtte studenter som TA eller jobbe med et team på et prosjekt",
      locationTitle: "Lokasjon",
      locationCity: "Kristiansand, Agder",
      locationAvailability: "Norge",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="about" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">{t.p1}</p>
            <p className="text-lg leading-relaxed text-foreground/90">{t.p2}</p>
            <p className="text-lg leading-relaxed text-foreground/90">{t.p3}</p>
            <p className="text-lg leading-relaxed text-foreground/90">{t.p4}</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-[var(--sea-green-accent)]/5 transition-all duration-300 hover:border-[var(--sea-green-accent)]/30">
              <h3 className="mb-4 text-[var(--sea-green-accent)]">{t.locationTitle}</h3>
              <p className="text-foreground/90">{t.locationCity}</p>
              <p className="text-muted-foreground mt-2">{t.locationAvailability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
