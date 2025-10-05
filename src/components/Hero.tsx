import { Button } from "./ui/button";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Proyecto Integral: Rezago Educativo y Falta de Oportunidades Laborales en Jóvenes de México
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Educación y trabajo: pilares para el desarrollo social y económico de nuestra juventud.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Nuestro proyecto integral está diseñado para enfrentar la crisis del rezago educativo y la empleabilidad juvenil en México. Implementaremos estrategias innovadoras a nivel local y estatal durante los próximos <span className="text-primary font-semibold">18 meses</span>, utilizando tecnología y alianzas estratégicas para transformar el futuro de miles de jóvenes vulnerables. ¡Súmate al cambio!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("objetivos")}
                className="text-base"
              >
                Conoce los Objetivos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="text-base"
              >
                Sé un Colaborador
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Jóvenes estudiando juntos"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
