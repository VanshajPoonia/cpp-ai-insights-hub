
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Users, Target } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TeamPage = () => {
  const founders = [
    {
      name: "Mike Burns",
      title: "Head of Growth",
      bio: "Former Chief Strategy Officer of Veil. Former President, Wunderman Thompson Health Former EVP, Marketing Direct.",
      imgUrl: "/assets/faf2caa8-3fc5-4d36-9ccb-4892bc452a60.png",
      linkedinUrl: "https://www.linkedin.com/in/sample-profile-1"
    },
    {
      name: "Shea Long",
      title: "Head of Innovation",
      bio: "Former Chief Product Officer, Alivi Health. Former Head of Commercial Innovation, Centene, ModivCare, Papa Health, EmpowerMe Wellness",
      imgUrl: "/assets/e74dcb32-af0d-4c86-933b-1c352325faf3.png",
      linkedinUrl: "https://www.linkedin.com/in/sample-profile-2"
    },
    {
      name: "John Cage",
      title: "Head of Transformation",
      bio: "Former VP of Enterprise Support Services, Sykes Enterprises. Former VP, CoreExpress Founder and Investor, Lit.AI",
      imgUrl: "/assets/88dfe074-2883-4c83-9054-8ad10ac731b7.png",
      linkedinUrl: "https://www.linkedin.com/in/sample-profile-3"
    },
    {
      name: "Jennifer Hickman",
      title: "Advisor - Consumer Experience",
      bio: "Former EVP, Wunderman Thompson Health. Managing Partner, JH Marketing Group.",
      imgUrl: "/assets/2248b558-817a-46c4-8ad2-2ee443b6c186.png",
      linkedinUrl: "https://www.linkedin.com/in/sample-profile-4"
    },
    {
      name: "Ben Vierck",
      title: "Head of Technology",
      bio: "Founder of Positronic AI and co-founder of Devfarm Software, with a history of leadership at Fortune 100 companies.",
      imgUrl: "/assets/image_bw.png",
      linkedinUrl: "https://www.linkedin.com/in/sample-profile-5"
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main className="pt-28 pb-16">
        <section className="py-16 md:py-24 bg-gradient-to-b from-cpp-blue/5 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
                Leadership Team
              </h1>
              <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Meet the experienced professionals leading Covington Place Partners in delivering innovative AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {founders.map((founder, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <a 
                    href={founder.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-cpp-blue to-cpp-accent/50 flex items-center justify-center overflow-hidden p-1 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <Avatar className="w-28 h-28">
                      <AvatarImage src={founder.imgUrl} alt={founder.name} className="object-cover" />
                      <AvatarFallback className="bg-white text-3xl font-bold text-cpp-accent">
                        {founder.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </a>
                  
                  <div className="flex-1 text-center">
                    <h3 className="text-xl font-montserrat font-bold text-cpp-blue mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-cpp-accent font-medium mb-4">
                      {founder.title}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
