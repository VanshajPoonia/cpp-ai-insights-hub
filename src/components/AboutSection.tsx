
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
      title: "Results-Driven",
      description: "We focus on delivering measurable results that drive meaningful business outcomes."
    }
  ];
  
  const founders = [
    {
      name: "Richard Covington",
      title: "Co-Founder & CEO",
      bio: "With over 15 years of experience in technology consulting, Richard brings deep expertise in AI implementation and business strategy. He has led digital transformation initiatives for Fortune 500 companies across various industries.",
      imgUrl: "/lovable-uploads/faf2caa8-3fc5-4d36-9ccb-4892bc452a60.png"
    },
    {
      name: "Sarah Place",
      title: "Co-Founder & CTO",
      bio: "Sarah is a recognized expert in artificial intelligence with a Ph.D. in Computer Science. Before co-founding CPP, she led AI research teams at leading tech companies and has published extensively on practical AI applications for business.",
      imgUrl: "/lovable-uploads/e74dcb32-af0d-4c86-933b-1c352325faf3.png"
    },
    {
      name: "Michael Johnson",
      title: "Partner & COO",
      bio: "Michael brings over 20 years of operational excellence to the team. His background in scaling technology companies and optimizing business processes ensures our clients receive implementation strategies that are both innovative and practical.",
      imgUrl: "/lovable-uploads/88dfe074-2883-4c83-9054-8ad10ac731b7.png"
    },
    {
      name: "Jennifer Williams",
      title: "Partner & CSO",
      bio: "Jennifer specializes in AI strategy and digital transformation. With her background in both technology and business consulting, she excels at helping clients identify high-impact AI opportunities that align with their strategic objectives.",
      imgUrl: "/lovable-uploads/2248b558-817a-46c4-8ad2-2ee443b6c186.png"
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
            We are a specialized consulting firm dedicated to making artificial intelligence accessible 
            and practical for businesses of all sizes. Our team combines deep expertise in AI technologies 
            with seasoned business acumen to bridge the gap between complex technology and real-world application.
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
        <div className="mt-24">
          <h2 className="text-3xl font-montserrat font-bold text-cpp-blue text-center mb-16">
            Our Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cpp-blue to-cpp-accent/50 flex items-center justify-center overflow-hidden p-1 mb-6">
                  <Avatar className="w-44 h-44">
                    <AvatarImage src={founder.imgUrl} alt={founder.name} className="object-cover" />
                    <AvatarFallback className="bg-white text-5xl font-bold text-cpp-accent">
                      {founder.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
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
        
        <div className="mt-24 bg-white p-8 lg:p-12 rounded-lg shadow-lg border border-cpp-accent/10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-montserrat font-bold text-cpp-blue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                At Covington Place Partners, we believe that artificial intelligence should be a powerful tool 
                accessible to all organizations, not just tech giants with unlimited resources. Our mission is 
                to demystify AI and help our clients implement practical solutions that drive real business value.
              </p>
              <p className="text-gray-700">
                We pride ourselves on translating complex technical concepts into clear, actionable strategies 
                that align with your business objectives. By bridging the gap between cutting-edge technology and 
                practical business application, we empower our clients to harness AI's transformative potential.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="bg-cpp-accent/5 p-6 rounded-lg border border-cpp-accent/20">
                <p className="italic text-cpp-blue font-inter text-lg">
                  "Our goal is simple: to make AI work for you, not the other way around. We translate complex 
                  technology into practical solutions that deliver measurable business results."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cpp-blue mr-4 flex items-center justify-center text-white font-bold">RC</div>
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
