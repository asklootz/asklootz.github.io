interface SkillsProps {
  language: string;
}

export function Skills({ language }: SkillsProps) {
  const content = {
    en: {
      title: "Skills",
      categories: [
        {
          title: "Frontend",
          color: "pink-accent",
          skills: ["React", "TypeScript", "Bootstrap CSS", "Vite.js", "Vanilla JS"],
        },
        {
          title: "Backend",
          color: "sea-green-accent",
          skills: ["Node.js", "Express", "PostgreSQL", "MariaDB", "Supabase", "REST APIs", "C#", "ASP.NET Core"],
        },
        {
          title: "Tools & DevOps",
          color: "pink-accent",
          skills: ["Git", "Docker", "Azure", "Virtualization", "Github", "Jira", "Linux", "Cisco", "Aspire.NET"],
        },
        {
          title: "Personal",
          color: "sea-green-accent",
          skills: ["Communication", "Works well with others", "Technichal thinking", "Solution oriented"],
        },
      ],
    },
    no: {
      title: "Ferdigheter",
      categories: [
        {
          title: "Frontend",
          color: "pink-accent",
          skills: ["React", "TypeScript", "Bootstrap CSS", "Vite.js", "Vanilla JS"],
        },
        {
          title: "Backend",
          color: "sea-green-accent",
          skills: ["Node.js", "Express", "PostgreSQL", "MariaDB", "Supabase", "REST APIer", "C#", "ASP.NET Core"],
        },
        {
          title: "Verktøy & DevOps",
          color: "pink-accent",
          skills: ["Git", "Docker", "Azure", "Virtualisering", "Github", "Jira", "Linux", "Cisco", "Aspire.NET"],
        },
        {
          title: "Personlig",
          color: "sea-green-accent",
          skills: ["Kommunikasjon", "Godt sammarbeid med andre", "Teknisk tankegang", "Løsningsorientert"],
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="skills" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
              }}
            >
              <h3
                className="text-2xl mb-6"
                style={{ color: `var(--${category.color})` }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-muted rounded-lg text-foreground/90 transition-all duration-300 hover:bg-opacity-80 hover:-translate-y-1 hover:shadow-md cursor-default"
                    style={{
                      boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1)`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
