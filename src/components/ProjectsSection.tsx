import ProjectCard from "@/components/ProjectCard";
import { Home, Cpu, Zap } from "lucide-react";
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
      technologies: ["Home Assistant", "ESP32", "MQTT", "ESPHome", "Raspberry Pi"],
    },
    {
      icon: Cpu,
      title: t.iotDevices.title,
      description: t.iotDevices.description,
      technologies: ["ESP32", "MicroPython", "MQTT", "PCB Design", "Fusion 360"],
    },
    {
      icon: Zap,
      title: t.dashboard.title,
      description: t.dashboard.description,
      technologies: ["Python", "Flask", "Docker", "Nginx", "MariaDB"],
    },
  ];

  return (
    <section className="py-12 bg-muted/30" id="projects">
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
