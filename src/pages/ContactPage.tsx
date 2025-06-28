
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
