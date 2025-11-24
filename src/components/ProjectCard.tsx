import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  delay?: string;
}

const ProjectCard = ({ icon: Icon, title, description, technologies, delay = "0s" }: ProjectCardProps) => {
  return (
    <Card 
      className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
