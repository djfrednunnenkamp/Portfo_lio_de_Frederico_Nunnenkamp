import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  delay?: string;
}

const ExpertiseCard = ({ title, description, icon: Icon, items, delay = "0s" }: ExpertiseCardProps) => {
  return (
    <Card 
      className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
      style={{ animationDelay: delay }}
    >
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-foreground/80">
              <span className="text-accent mr-2">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExpertiseCard;
