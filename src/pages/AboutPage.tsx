
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
