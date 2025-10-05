import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";
import { Card } from "./ui/card";

const PhasesSection = () => {
  const phases = [
    {
      icon: Search,
      number: "1",
      title: "Diagnóstico",
      duration: "1 mes",
      description: "Realización de encuestas, entrevistas y análisis de datos locales para contextualizar las necesidades específicas de la población objetivo.",
      resources: "Equipo de campo, encuestas digitales y licencias de software de análisis de datos."
    },
    {
      icon: PenTool,
      number: "2",
      title: "Planeación y Diseño",
      duration: "1.5 meses",
      description: "Diseño curricular de talleres, establecimiento de alianzas institucionales clave y desarrollo del cronograma detallado (Gantt).",
      resources: "Consultoría pedagógica y legal, herramientas de gestión de proyectos."
    },
    {
      icon: Rocket,
      number: "3",
      title: "Implementación",
      duration: "3 meses",
      description: "Ejecución de los talleres de forma presencial y virtual, y seguimiento continuo del progreso y asistencia de los participantes.",
      resources: "Facilitadores educativos, aulas equipadas, plataformas LMS (Learning Management System)."
    },
    {
      icon: BarChart3,
      number: "4",
      title: "Evaluación y Control",
      duration: "1 mes",
      description: "Aplicación de encuestas finales, análisis estadístico de los resultados de aprendizaje y elaboración del informe final de impacto.",
      resources: "Analistas de datos, herramientas de visualización (Power BI), reportes de resultados."
    }
  ];

  return (
    <section id="fases" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            D. Fases del Proyecto: Un Proceso Estructurado
          </h2>
          <p className="text-lg text-muted-foreground">
            El proyecto se desarrollará a lo largo de 6.5 meses a través de cuatro fases secuenciales que garantizan la planificación rigurosa, la ejecución eficaz y la evaluación objetiva de los resultados obtenidos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Phase Number & Icon */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                      <phase.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {phase.number}
                    </div>
                  </div>
                  <div className="md:text-center">
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {phase.duration}
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold">Fase {phase.number}: {phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-foreground mb-1">Recursos:</p>
                    <p className="text-sm text-muted-foreground">{phase.resources}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
