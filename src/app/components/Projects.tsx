interface ProjectsProps {
  language: string;
}

export function Projects({ language }: ProjectsProps) {
  const content = {
    en: {
      title: "Projects",
      viewProject: "View Project",
      projects: [
        {
          title: "Navisafe",
          description: "A web-app used for helicopter pilots to registert air-obstacles when flying, preventing future accidents, crashes and ensuring safety.",
          tech: ["HTML", "Bootstrap CSS", "JS", "MariaDB", "Docker", "C#", "ASP.NET Core", "Aspire.NET"],
          link: "https://github.com/asklootz/NaviSafe",
          accentColor: "pink-accent",
        },
        {
          title: "Beredskart",
          description: "A project for the class \"Geografiske informasjonssystemer\" where we created a web-app for the Norwegian preparedness to help civilians find shelter and call for help.",
          tech: ["Vite.JS", "CSS", "TypeScript", "React", "Docker", "PostgreSQL", "REST API"],
          link: "https://github.com/asklootz/IS-218_Gruppe4",
          accentColor: "sea-green-accent",
        },
        {
          title: "Unit Testing Project",
          description: "A repository on github for the students I helped as a teacher assistant to practice and learn unit testing in C#.",
          tech: ["C#", "xUnit"],
          link: "https://github.com/asklootz/UnitTesting",
          accentColor: "pink-accent",
        },
        {
          title: "Personal Github Pages",
          description: "My personal Github pages where i can showcase myself and my projects.",
          tech: ["React", "TypeScript", "Tailwind CSS", "Vite.JS", "GitHub Pages"],
          link: "https://github.com/asklootz/IS-309-Bcycle-Assignment",
          accentColor: "sea-green-accent",
        },
      ],
    },
    no: {
      title: "Prosjekter",
      viewProject: "Se prosjekt",
      projects: [
        {
          title: "Navisafe",
          description: "En web-app for helikopterpiloter for å registrere luft-objekter under flyvning, for å forhindre fremtidige ulykker og sikre sikkerhet.",
          tech: ["HTML", "Bootstrap CSS", "JS", "MariaDB", "Docker", "C#", "ASP.NET Core", "Aspire.NET"],
          link: "https://github.com/asklootz/NaviSafe",
          accentColor: "pink-accent",
        },
        {
          title: "Beredskart",
          description: "Et prosjekt for faget \"Geografiske informasjonssystemer\" med en web-app for Norsk beredskap som skal hjelpe sivile hjelp til å finne nærmeste tilfluktsrom og kunne ringe etter hjelp",
          tech: ["Vite.JS", "CSS", "TypeScript", "React", "Docker", "PostgreSQL", "REST API"],
          link: "https://github.com/asklootz/IS-218_Gruppe4",
          accentColor: "sea-green-accent",
        },
        {
          title: "Enhetstesting Prosjekt",
          description: "Et repository på github for studentene jeg hjalp som lærerassistent for å kunne lære og øve på enhetstesting i C#",
          tech: ["C#", "xUnit"],
          link: "https://github.com/asklootz/UnitTesting",
          accentColor: "pink-accent",
        },
        {
          title: "Personlig Github sider",
          description: "Min personlige Github side hvor jeg kan vise meg selv og mitt prosjekt",
          tech: ["React", "TypeScript", "Tailwind CSS", "Vite.JS", "GitHub Pages"],
          link: "https://github.com/asklootz/asklootz.github.io",
          accentColor: "sea-green-accent",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="projects" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="space-y-6">
                <h3
                  className="text-2xl transition-colors"
                  style={{ color: `var(--${project.accentColor})` }}
                >
                  {project.title}
                </h3>

                <p className="text-foreground/90 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted rounded-lg text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-[var(--sea-green-accent)] transition-colors group/link"
                >
                  {t.viewProject}
                  <span className="transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
