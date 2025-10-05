import { GraduationCap, Briefcase, TrendingDown, Users } from "lucide-react";
import { Card } from "./ui/card";

const ProblemSection = () => {
  const causes = [
    {
      icon: Users,
      title: "Desigualdad Social",
      description: "Acceso limitado a oportunidades educativas de calidad"
    },
    {
      icon: TrendingDown,
      title: "Falta de Acceso Digital",
      description: "Brecha tecnológica que limita el aprendizaje moderno"
    },
    {
      icon: GraduationCap,
      title: "Pobreza Extrema",
      description: "Barreras económicas que impiden la continuidad educativa"
    },
    {
      icon: Briefcase,
      title: "Informalidad Laboral",
      description: "Falta de preparación para el mercado laboral formal"
    }
  ];

  return (
    <section id="problema" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A. Contextualización Crítica del Problema
          </h2>
          <p className="text-lg text-muted-foreground">
            El futuro de México se ve comprometido por las altas tasas de rezago educativo y desempleo juvenil. Este proyecto aborda la urgencia de reincorporar a los jóvenes de 15 a 29 años al sistema educativo y productivo, quienes a menudo carecen de habilidades digitales y laborales esenciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Rezago Educativo: Una Barrera al Progreso</h3>
                <p className="text-muted-foreground">
                  Millones de jóvenes no concluyen su educación media superior, limitando drásticamente su potencial económico y social. La desigualdad social y la falta de acceso a herramientas tecnológicas amplifican esta brecha.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Desempleo Juvenil y Baja Escolaridad</h3>
                <p className="text-muted-foreground">
                  La baja escolaridad conduce a la informalidad laboral o al desempleo crónico. Atender este problema es crucial para impulsar el desarrollo social, económico y la productividad nacional, revirtiendo ciclos de pobreza.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Impacto: Las Raíces del Rezago</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Identificamos cuatro causas principales que perpetúan el ciclo de la falta de oportunidades en la juventud mexicana.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <cause.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold">{cause.title}</h4>
                  <p className="text-sm text-muted-foreground">{cause.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
