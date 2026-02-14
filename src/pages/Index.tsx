
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AISpectrumSection from "@/components/Ailandscape";
import AiConsultingMethodology from "@/components/Navigation";
import WhitePaperTeaser from "@/components/WhitePaperTeaser";

const Index = () => {
  return (
    <div className="min-h-screen font-inter scroll-mt-24">
 

      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <AISpectrumSection />
      <WhyUsSection />
      <AiConsultingMethodology />
      {/*<TestimonialsSection />*/}
      <WhitePaperTeaser />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
