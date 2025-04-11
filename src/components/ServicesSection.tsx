
import { BrainCircuit, LineChart, ShieldAlert, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-cpp-accent" />,
      title: "AI Strategy Development",
      description: "We help organizations develop comprehensive AI strategies aligned with business goals, identifying high-impact opportunities and creating implementation roadmaps."
    },
    {
      icon: <LineChart className="h-10 w-10 text-cpp-accent" />,
      title: "Performance Optimization",
      description: "Our consultants analyze your operations to identify where AI can enhance efficiency, reduce costs, and improve overall business performance."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-cpp-accent" />,
      title: "AI Risk Management",
      description: "We help you navigate the ethical, regulatory, and security considerations of AI implementation, ensuring responsible and compliant usage."
    },
    {
      icon: <Settings className="h-10 w-10 text-cpp-accent" />,
      title: "Implementation Support",
      description: "From vendor selection to change management, we provide end-to-end support for successful AI implementation and adoption."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We specialize in understanding and simplifying how clients can utilize 
            Artificial Intelligence to solve modern problems and enhance business performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-cpp-accent"
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-cpp-blue to-cpp-light-blue rounded-lg text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Our Approach to AI Consulting</h3>
              <p className="mb-6">
                We believe in a pragmatic approach to AI implementation. Our process starts with understanding 
                your business challenges, then identifying the right AI solutions to address them, followed by 
                a careful implementation strategy that ensures adoption and measurable results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-white text-cpp-blue flex items-center justify-center mr-3 font-bold">1</span>
                  <span>Discover & Assess</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-white text-cpp-blue flex items-center justify-center mr-3 font-bold">2</span>
                  <span>Strategic Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-white text-cpp-blue flex items-center justify-center mr-3 font-bold">3</span>
                  <span>Solution Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-white text-cpp-blue flex items-center justify-center mr-3 font-bold">4</span>
                  <span>Implementation & Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-white text-cpp-blue flex items-center justify-center mr-3 font-bold">5</span>
                  <span>Measure & Optimize</span>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-cpp-blue text-lg font-semibold">Your Business</p>
                      <p className="text-cpp-blue text-sm">at the center</p>
                      <p className="text-cpp-blue text-xs">of our process</p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full p-4">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="none" />
                    <text width="500">
                      <textPath xlinkHref="#curve" className="text-white text-sm">
                        AI Strategy • Implementation • Optimization • Results
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
