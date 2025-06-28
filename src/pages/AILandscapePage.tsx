
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ailandscape from "@/components/Ailandscape";

const AILandscapePage = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main className="pt-20">
        <Ailandscape />
      </main>
      <Footer />
    </div>
  );
};

export default AILandscapePage;
