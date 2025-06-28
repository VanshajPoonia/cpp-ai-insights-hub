
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
