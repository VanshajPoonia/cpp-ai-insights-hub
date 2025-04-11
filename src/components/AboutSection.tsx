
import { ShieldCheck, Users, Target } from "lucide-react";

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

  return (
    <section id="about" className="py-16 md:py-24 bg-cpp-gray">
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
        
        <div className="mt-16 bg-white p-8 lg:p-12 rounded-lg shadow-lg">
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
                  <div className="w-12 h-12 rounded-full bg-cpp-blue mr-4"></div>
                  <div>
                    <h4 className="font-montserrat font-medium text-cpp-blue">
                      Richard Covington
                    </h4>
                    <p className="text-sm text-gray-600">
                      Founder & CEO
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
