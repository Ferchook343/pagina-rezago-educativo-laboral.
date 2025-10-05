import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import PhasesSection from "@/components/PhasesSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ObjectivesSection />
        <PhasesSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
