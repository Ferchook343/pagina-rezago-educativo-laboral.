import { Target, UserPlus, Laptop, Handshake, Lightbulb } from "lucide-react";
import { Card } from "./ui/card";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: UserPlus,
      title: "Reinserción Educativa",
      description: "Promover activamente el retorno de jóvenes en situación de rezago a ambientes de aprendizaje formales o alternativos."
    },
    {
      icon: Lightbulb,
      title: "Desarrollo de Habilidades",
      description: "Impartir talleres prácticos centrados en competencias digitales, socioemocionales y laborales de alta demanda."
    },
    {
      icon: Handshake,
      title: "Fomentar Alianzas",
      description: "Establecer convenios de colaboración con empresas, instituciones educativas y líderes comunitarios locales."
    },
    {
      icon: Laptop,
      title: "Implementación Tecnológica",
      description: "Utilizar plataformas y herramientas emergentes para asegurar la comunicación efectiva y la gestión eficiente del proyecto."
    }
  ];

  return (
    <section id="objetivos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            C. Objetivos Claros para la Transformación
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro plan de acción se cimienta en metas medibles y realistas que buscan la transformación profunda de las trayectorias de vida de los participantes.
          </p>
        </div>

        {/* General Objective */}
        <Card className="p-8 md:p-12 bg-card border-primary/50 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Objetivo General</h3>
              <p className="text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
                Reducir el rezago educativo y mejorar la empleabilidad de jóvenes mediante la implementación de talleres de capacitación, alianzas institucionales y uso de tecnologías digitales de aprendizaje.
              </p>
            </div>
          </div>
        </Card>

        {/* Specific Objectives */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Objetivos Específicos: El Camino a Seguir</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <objective.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{objective.title}</h4>
                    <p className="text-sm text-muted-foreground">{objective.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
