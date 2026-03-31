
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TeamPage = () => {
  const founders = [
    {
      name: "Mike Burns",
      title: "Head of Growth",
      bio: "Former Chief Strategy Officer of Veil. Former President, Wunderman Thompson Health Former EVP, Marketing Direct.",
      imgUrl: "/assets/faf2caa8-3fc5-4d36-9ccb-4892bc452a60.png",
      linkedinUrl: "https://www.linkedin.com/in/mike-burns-a173254/"
    },
    {
      name: "Shea Long",
      title: "Head of Innovation",
      bio: "Former Chief Product Officer, Alivi Health. Former Head of Commercial Innovation, Centene, ModivCare, Papa Health, EmpowerMe Wellness",
      imgUrl: "/assets/e74dcb32-af0d-4c86-933b-1c352325faf3.png",
      linkedinUrl: "https://www.linkedin.com/in/SheaLong/"
    },
    {
      name: "Jennifer Hickman",
      title: "Advisor - Consumer Experience",
      bio: "Former EVP, Wunderman Thompson Health. Managing Partner, JH Marketing Group.",
      imgUrl: "/assets/2248b558-817a-46c4-8ad2-2ee443b6c186.png",
      linkedinUrl: "https://www.linkedin.com/in/jenniferhickman/"
    },
    {
      name: "James Dickman",
      title: "Chief Technology Officer",
      bio: "James sets Sigla's technical vision and leads architecture, engineering, and applied AI strategy. With over 25 years as a software architect and technology entrepreneur, he's built dozens of production systems spanning cloud platforms, data pipelines, real-time analytics, and AI-driven applications.",
      imgUrl: "",
      linkedinUrl: "#"
    },
    {
      name: "Jason Wargel",
      title: "SVP - Program Management",
      bio: "Jason brings over 20 years of experience building and leading technology delivery organizations. He oversees strategy, operations, and execution - ensuring every AI engagement moves from ambiguity to a clear, scalable plan.",
      imgUrl: "",
      linkedinUrl: "#"
    },
    {
      name: "Charlie Eaton",
      title: "SVP - Product Development & Design",
      bio: "Charles leads design strategy across product and AI engagements, ensuring solutions are technically sound and deeply aligned with real human and business needs. His rare combination of IT systems architecture and UX design expertise makes him uniquely effective at shaping agentic AI solutions.",
      imgUrl: "",
      linkedinUrl: "#"
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
            
            {/* Better grid layout with responsive design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {founders.map((founder, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <a 
                    href={founder.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-cpp-blue to-cpp-accent/50 flex items-center justify-center overflow-hidden p-1 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={founder.imgUrl} alt={founder.name} className="object-cover" />
                      <AvatarFallback className="bg-white text-2xl font-bold text-cpp-accent">
                        {founder.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </a>
                  
                  <div className="flex-1 text-center">
                    <h3 className="text-lg font-montserrat font-bold text-cpp-blue mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-cpp-accent font-medium text-sm mb-3">
                      {founder.title}
                    </p>
                    <p className="text-gray-700 text-xs leading-relaxed">
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
