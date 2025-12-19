import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  hours: string;
}

export function ServiceCard({ title, price, features, recommended, hours }: ServiceCardProps) {
  return (
    <Card className={cn(
      "flex flex-col h-full transition-all duration-300 relative overflow-hidden group",
      recommended 
        ? "border-primary shadow-lg scale-105 z-10 bg-white" 
        : "border-border/60 hover:border-primary/50 hover:shadow-md bg-white/50"
    )}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      
      <CardHeader className="pb-4">
        <h3 className="font-display font-bold text-xl text-foreground">{title}</h3>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
          <span className="inline-block w-2 h-2 rounded-full bg-primary/40" />
          {hours} de serviço
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          className={cn(
            "w-full rounded-full transition-all duration-300",
            recommended 
              ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
          onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre o plano ${title}`, "_blank")}
        >
          Escolher Plano
        </Button>
      </CardFooter>
    </Card>
  );
}
