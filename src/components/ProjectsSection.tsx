import ProjectCard from "@/components/ProjectCard";
import { Home, ToggleLeft, Radar, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      icon: Home,
      title: t.homeAutomation.title,
      description: t.homeAutomation.description,
      technologies: t.homeAutomation.technologies,
    },
    {
      icon: ToggleLeft,
      title: t.iotDevices.title,
      description: t.iotDevices.description,
      technologies: t.iotDevices.technologies,
    },
    {
      icon: Radar,
      title: t.dashboard.title,
      description: t.dashboard.description,
      technologies: t.dashboard.technologies,
    },
    {
      icon: Wrench,
      title: t.Manutençãoautomotiva.title,
      description: t.Manutençãoautomotiva.description,
      technologies: t.Manutençãoautomotiva.technologies,
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
