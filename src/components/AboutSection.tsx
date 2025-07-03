
import { ShieldCheck, Users, Target } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  const values = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-cpp-accent" />,
      title: "Trust & Integrity",
      description: "We maintain the highest ethical standards and transparency in every client engagement."
    },
    {
      icon: <Users className="h-12 w-12 text-cpp-accent" />,
      title: "Client Partnership",
      description: "Your goals become our goals. We believe in true collaborative partnerships."
    },
    {
      icon: <Target className="h-12 w-12 text-cpp-accent" />,
      title: "Results-Driven Consulting",
      description: "We focus on delivering measurable results that drive meaningful business outcomes."
    }
  ];
  
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
      name: "John Cage",
      title: "Head of Transformation",
      bio: "Former VP of Enterprise Support Services, Sykes Enterprises. Former VP, CoreExpress Founder and Investor, Lit.AI",
      imgUrl: "/assets/88dfe074-2883-4c83-9054-8ad10ac731b7.png",
      linkedinUrl: "https://www.linkedin.com/in/john-cage-4a265a3/"
    },
    {
      name: "Jennifer Hickman",
      title: "Advisor - Consumer Experience",
      bio: "Former EVP, Wunderman Thompson Health. Managing Partner, JH Marketing Group.",
      imgUrl: "/assets/2248b558-817a-46c4-8ad2-2ee443b6c186.png",
      linkedinUrl: "https://www.linkedin.com/in/jenniferhickman/"
    },
    {
      name: "Ben Vierck",
      title: "Head of Technology",
      bio: "Founder of Positronic AI and co-founder of Devfarm Software, with a history of leadership at Fortune 100 companies.",
      imgUrl: "/assets/image_bw.png",
      linkedinUrl: "https://www.linkedin.com/in/xcud/"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-cpp-blue/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            About Covington Place Partners
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With over 20 years of consulting experience, our team combines deep expertise in AI technologies with seasoned business acumen to bridge the gap between intelligent solutions and real-world application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <section id="leaders">
        <div className="mt-24">
          <p className="text-3xl font-montserrat font-bold text-cpp-blue text-center mb-16">
          Leadership Team
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <a 
                  href={founder.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-cpp-blue to-cpp-accent/50 flex items-center justify-center overflow-hidden p-1 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Avatar className="w-44 h-44">
                    <AvatarImage src={founder.imgUrl} alt={founder.name} className="object-cover" />
                    <AvatarFallback className="bg-white text-5xl font-bold text-cpp-accent">
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
        
        <div className="mt-24 bg-white p-8 lg:p-12 rounded-lg shadow-lg border border-cpp-accent/10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-montserrat font-bold text-cpp-blue mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6">
             As an AI consultant group, Covington Place Partners enables mid-market enterprises to thrive in the artificial intelligence era by designing solutions to optimize operational efficiency, elevate user experience, and drive scalable value.
              </p>
              <p className="text-gray-700">
              Our role as AI consultants is to serve as an unbiased, trusted partner in facilitating the integration, adoption, and continuous improvement of solutions that power businesses forward. 
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="bg-cpp-accent/5 p-6 rounded-lg border border-cpp-accent/20">
                <p className="italic text-cpp-blue font-inter text-lg">
                  "Our purpose is simple: To be the trusted partner that simplifies AI and delivers unbiased, outcome-driven solutions aligned to each client’s unique goals."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cpp-blue mr-4 flex items-center justify-center text-white font-bold">CPP</div>
                  <div>
                    <h4 className="font-montserrat font-medium text-cpp-blue">
                      The Leadership Team
                    </h4>
                    <p className="text-sm text-gray-600">
                      Covington Place Partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
