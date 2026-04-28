interface ExperienceProps {
  language: string;
}

export function Experience({ language }: ExperienceProps) {
  const content = {
    en: {
      title: "Experience",
      experiences: [
        {
          title: "Scientific Assistant",
          company: "University of Agder",
          period: "January 2026 - Present",
          description: "Working with being able to help and support students learning object oriented programming using C#, as well as holding lectures and grading assignemnts.",
          highlights: [
            "Held a lecture and workshop to help students get ready for exams",
            "Helped students improve their programming skills with feedback from assignments",
            "Gained pedagogical experience",
          ],
        },
        {
          title: "IT-consultant",
          company: "Centric",
          period: "2022 - 2024",
          description: "Working as a consultant sent to different customers to offer support and knowledge on different projects.",
          highlights: [
            "Gained CCNA certification",
            "Learned adaptive and effective communication skills",
            "Oppertunity to work with different customers like Repsol and Tieto Every",
          ],
        },
        {
          title: "IT-apprentice",
          company: "Stavanger Municipality",
          period: "2020 - 2022",
          description: "Varied work with education on different systems to support both interal and external public users.",
          highlights: [
            "Well passed vocational degree",
            "Work experience with a big network infrastructure",
            "Work in different fields of IT (hardware support, user support, networking, etc.)",
          ],
        },
      ],
    },
    no: {
      title: "Erfaring",
      experiences: [
        {
          title: "Vitenskapelig assistent",
          company: "Universitetet i Agder",
          period: "Januar 2026 - Nåværende",
          description: "Arbeider med å kunne hjelpe og støtte studenter i å lære objektorientert programmering ved bruk av C#, samt holde forelesninger og rette oppgaver.",
          highlights: [
            "Holdt en forelesning og workshop for å hjelpe studenter med å forberede seg til eksamen",
            "Hjulpet studenter med å forbedre programmeringsferdighetene sine med tilbakemeldinger fra oppgaver",
            "Fått pedagogisk erfaring",
          ],
        },
        {
          title: "IT-konsulent",
          company: "Centric",
          period: "2022 - 2024",
          description: "Jobber som konsulent sendt til forskjellige kunder for å tilby støtte og kunnskap på forskjellige prosjekter.",
          highlights: [
            "Fikk CCNA-sertifisering",
            "Lærte adaptive og effektive kommunikasjonsevner",
            "Mulighet til å jobbe med forskjellige kunder som Repsol og Tieto Every",
          ],
        },
        {
          title: "IT-lærling",
          company: "Stavanger Kommune",
          period: "2020 - 2022",
          description: "Varierte arbeidsoppgaver med opplæring i forskjellige systemer for å støtte både interne og eksterne offentlige brukere.",
          highlights: [
            "Meget godt bestått fagbrev",
            "Arbeidserfaring med en stor nettverksinfrastruktur",
            "Arbeid innen forskjellige IT-felt (maskinvarestøtte, brukerstøtte, nettverk, osv.)",
          ],
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="experience" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full"></div>
        </div>

        <div className="space-y-8">
          {t.experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-[var(--sea-green-accent)]/5 transition-all duration-300 hover:border-[var(--sea-green-accent)]/30 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl group-hover:text-[var(--sea-green-accent)] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-[var(--pink-accent)] mt-2">
                    {exp.company}
                  </p>
                </div>
                <span className="text-muted-foreground bg-muted px-4 py-2 rounded-lg w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-[var(--sea-green-accent)] mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
