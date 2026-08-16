interface EducationProps {
  language: string;
}

export function Education({ language }: EducationProps) {
  const content = {
    en: {
      title: "Education",
      education: [
        {
          degree: "Bachelor in IT and information systems",
          school: "University of Agder",
          period: "August 2024 - June 2027",
          description: "Currently pursuing a Bachelor's degree in IT and information systems with a focus on software development, data analysis, and cybersecurity.",
          achievements: [
            "Working for Systematicus to better the univeristy experience for IT-students at UiA",
            "Thesis: TBA",
            "Teaching Assistant for Object Oriented Programming course",
          ],
        },
        {
          degree: "Vocational degree in IT",
          school: "Stavanger Municipality",
          period: "August 2020 - August 2022",
          description: "Completed a vocational degree in IT through an apprenticeship. Gained hands-on experience in managing and maintaining complex IT systems  that would support around 15.000 employees and the public using it.",
          achievements: [
            "Well Passed Exam",
            "Work with an administrate network infrastructure that covered several locations and supported a large user base",
            "Work with an help teach next years apprentices",
          ],
        },
      ],
    },
    no: {
      title: "Utdanning",
      education: [
        {
          degree: "Bachelor i IT og informasjonsystemer",
          school: "Universitetet i Agder",
          period: "August 2024 - Juni 2027",
          description: "Nåværende student som jobber med en bachelorgrad i IT og informasjonsystemer med fokus på programvareutvikling, dataanalyse og cybersikkerhet.",
          achievements: [
            "Arbeid som teknologiansvarlig på Systematicus for å bedre studiehverdagen for IT-studenter ved UiA",
            "Bacheloroppgave: TBA",
            "Undervisningsassistent for Objektorientert programmering",
          ],
        },
        {
          degree: "Fagbrev i IT",
          school: "Stavanger Kommune",
          period: "August 2020 - August 2022",
          description: "Fullført fagbrev i IT gjennom en lærlingplass. Fikk praktisk erfaring med å administrere og vedlikeholde komplekse IT-systemer som støttet rundt 15.000 ansatte og publikum som brukte det.",
          achievements: [
            "Meget godt bestått fagbrev",
            "Arbeid med å administrere nettverksinfrastruktur som dekket flere lokasjoner og støttet en stor brukerbase",
            "Arbeid med å hjelpe til å lære opp neste års lærlinger",
          ],
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="education" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full"></div>
        </div>

        <div className="space-y-8">
          {t.education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-[var(--pink-accent)]/5 transition-all duration-300 hover:border-[var(--pink-accent)]/30 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl group-hover:text-[var(--pink-accent)] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-[var(--sea-green-accent)] mt-2">
                    {edu.school}
                  </p>
                </div>
                <span className="text-muted-foreground bg-muted px-4 py-2 rounded-lg w-fit">
                  {edu.period}
                </span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                {edu.description}
              </p>

              <ul className="space-y-3">
                {edu.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-[var(--pink-accent)] mt-1">▹</span>
                    {achievement}
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
