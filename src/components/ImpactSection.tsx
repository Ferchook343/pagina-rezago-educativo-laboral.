import { TrendingUp, Users, Award, Heart } from "lucide-react";
import { Card } from "./ui/card";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Award,
      title: "Mayor Acceso Educativo",
      description: "Aumento de la tasa de graduación y reincorporación en comunidades históricamente marginadas."
    },
    {
      icon: TrendingUp,
      title: "Reducción del Desempleo",
      description: "Mejora directa en las tasas de inserción laboral formal de los participantes al finalizar la capacitación."
    },
    {
      icon: Users,
      title: "Equidad y Desarrollo Local",
      description: "Impulso a la equidad de género mediante el empoderamiento de mujeres jóvenes y el crecimiento económico de la región."
    },
    {
      icon: Heart,
      title: "Fortalecimiento Comunitario",
      description: "Creación de redes de apoyo y mentoría que cohesionan la comunidad y ofrecen modelos a seguir."
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            G. Impacto y Beneficios Sociales Esperados
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Invertir en este proyecto es invertir en el capital humano de México. Proyectamos un cambio significativo en las comunidades, fortaleciendo el tejido social y promoviendo una sociedad más justa e inclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <impact.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-semibold italic mb-4">
              "¡La educación es la herramienta más poderosa para cambiar el mundo!"
            </p>
            <footer className="text-muted-foreground">— Nelson Mandela</footer>
          </blockquote>
        </Card>
      </div>
    </section>
  );
};

export default ImpactSection;
