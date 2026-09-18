import {Mail} from "lucide-react";
import type { SVGProps } from 'react';

export function BxlLinkedin(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376a2.188 2.188 0 1 0 0-4.376m4.254 6.034v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path></svg>);
}
export function BxlGithub(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path></svg>);
}

interface ContactProps {
  language: string;
}

export function Contact({ language }: ContactProps) {
  const content = {
    en: {
      title: "Get In Touch",
      description: "Feel free to reach out through any of these channels.",
      contacts: [
        {
          icon: BxlGithub,
          label: "GitHub",
          value: "github.com/asklootz",
          link: "https://github.com/asklootz",
          color: "pink-accent",
        },
        {
          icon: Mail,
          label: "Email",
          value: "asklootz@outlook.com",
          link: "mailto:asklootz@outlook.com",
          color: "sea-green-accent",
        },
        {
          icon: BxlLinkedin,
          label: "LinkedIn",
          value: "linkedin.com/in/ask-lootz/",
          link: "https://www.linkedin.com/in/ask-lootz/?locale=en-US",
          color: "pink-accent",
        },
      ],
    },
    no: {
      title: "Ta kontakt",
      description: "Ta gjerne kontakt gjennom noen av disse kanalene.",
      contacts: [
        {
          icon: BxlGithub,
          label: "GitHub",
          value: "github.com/asklootz",
          link: "https://github.com/asklootz",
          color: "pink-accent",
        },
        {
          icon: Mail,
          label: "E-post",
          value: "asklootz@outlook.com",
          link: "mailto:asklootz@outlook.com",
          color: "sea-green-accent",
        },
        {
          icon: BxlLinkedin,
          label: "LinkedIn",
          value: "linkedin.com/in/ask-lootz/",
          link: "https://www.linkedin.com/in/ask-lootz",
          color: "pink-accent",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
      <section id="contact" className="py-12">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl">{t.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--pink-accent)] to-[var(--sea-green-accent)] rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6">
              {t.description}
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
            {t.contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                  <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center text-center space-y-4"
                      style={{
                        borderColor: `var(--${contact.color})`,
                        borderWidth: '1px',
                      }}
                  >
                    <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `var(--${contact.color})20`,
                        }}
                    >
                      <Icon
                          className="w-8 h-8 transition-colors"
                          style={{ color: `var(--${contact.color})` }}
                      />
                    </div>
                    <div>
                      <h3
                          className="text-xl mb-2 transition-colors"
                          style={{ color: `var(--${contact.color})` }}
                      >
                        {contact.label}
                      </h3>
                      <p className="text-sm text-muted-foreground break-all">
                        {contact.value}
                      </p>
                    </div>
                  </a>
              );
            })}
          </div>
        </div>
      </section>
  );
}
