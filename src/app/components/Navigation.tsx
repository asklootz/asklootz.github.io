import { useEffect, useState } from "react";

interface NavigationProps {
    language: string;
}

export function Navigation({ language }: NavigationProps) {
    const [activeSection, setActiveSection] = useState("home");

    const navItems = language === "en"
        ? [
            { label: "Home", href: "#home", id: "home" },
            { label: "Education", href: "#education", id: "education" },
            { label: "About", href: "#about", id: "about" },
            { label: "Experience", href: "#experience", id: "experience" },
            { label: "Skills", href: "#skills", id: "skills" },
            { label: "Projects", href: "#projects", id: "projects" },
            { label: "Contact", href: "#contact", id: "contact" },
        ]
        : [
            { label: "Hjem", href: "#home", id: "home" },
            { label: "Utdanning", href: "#education", id: "education" },
            { label: "Om meg", href: "#about", id: "about" },
            { label: "Erfaring", href: "#experience", id: "experience" },
            { label: "Ferdigheter", href: "#skills", id: "skills" },
            { label: "Prosjekter", href: "#projects", id: "projects" },
            { label: "Kontakt", href: "#contact", id: "contact" },
        ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));

            const scrollPosition = window.scrollY + 200;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check if we're at the bottom of the page
            if (windowHeight + window.scrollY >= documentHeight - 50) {
                setActiveSection(navItems[navItems.length - 1].id);
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element && section.element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <ul className="space-y-6">
                {navItems.map((item) => (
                    <li key={item.href} className="flex items-center justify-end group">
                        <a
                            href={item.href}
                            className="flex items-center gap-4 transition-all duration-300"
                        >
              <span
                  className={`text-sm transition-all duration-300 ${
                      activeSection === item.id
                          ? "opacity-100 text-[var(--sea-green-accent)] translate-x-0"
                          : "opacity-0 group-hover:opacity-100 text-foreground/60 translate-x-4 group-hover:translate-x-0"
                  }`}
              >
                {item.label}
              </span>
                            <div
                                className={`transition-all duration-300 rounded-full ${
                                    activeSection === item.id
                                        ? "w-16 h-1 bg-[var(--sea-green-accent)]"
                                        : "w-8 h-1 bg-foreground/30 group-hover:w-12 group-hover:bg-[var(--pink-accent)]"
                                }`}
                            ></div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
