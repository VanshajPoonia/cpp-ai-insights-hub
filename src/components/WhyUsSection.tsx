
import { CheckCircle } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      title: "AI Expertise with Business Acumen",
      description: "Our team combines deep technical knowledge with extensive business experience to deliver practical AI solutions."
    },
    {
      title: "Vendor-Agnostic Approach",
      description: "We recommend solutions based on your needs, not our partnerships, ensuring you get the best fit for your business."
    },
    {
      title: "Focus on Measurable Results",
      description: "We define clear KPIs from the start and track progress to ensure your AI investments deliver tangible returns."
    },
    {
      title: "End-to-End Support",
      description: "From strategy through implementation to ongoing optimization, we provide comprehensive support at every stage."
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-cpp-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            Why Choose Covington Place Partners
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We differentiate ourselves through our practical approach to AI consulting, 
            focusing on business outcomes rather than technical complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1 space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-cpp-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-1 lg:order-2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-cpp-blue mb-6">
              Our Difference
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 h-12 w-12 rounded-full bg-cpp-accent/10 flex items-center justify-center">
                  <span className="text-cpp-accent font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cpp-blue mb-1">
                    Simplifying Complexity
                  </h4>
                  <p className="text-gray-600">
                    We translate complex AI concepts into clear, understandable terms and actionable strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-12 w-12 rounded-full bg-cpp-accent/10 flex items-center justify-center">
                  <span className="text-cpp-accent font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cpp-blue mb-1">
                    Tailored Solutions
                  </h4>
                  <p className="text-gray-600">
                    We customize our approach for each client rather than applying one-size-fits-all solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-12 w-12 rounded-full bg-cpp-accent/10 flex items-center justify-center">
                  <span className="text-cpp-accent font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cpp-blue mb-1">
                    Implementation Excellence
                  </h4>
                  <p className="text-gray-600">
                    Our focus extends beyond strategy to successful implementation and organizational adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-12 w-12 rounded-full bg-cpp-accent/10 flex items-center justify-center">
                  <span className="text-cpp-accent font-bold">04</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cpp-blue mb-1">
                    Ongoing Partnership
                  </h4>
                  <p className="text-gray-600">
                    We build lasting relationships, continuing to support your AI journey as technology and needs evolve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-cpp-blue/5 rounded border border-cpp-blue/10">
              <p className="text-cpp-blue font-inter text-sm">
                "What sets us apart is our commitment to making AI accessible, practical, and valuable for your 
                specific business context. We don't just advise – we help you succeed."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
