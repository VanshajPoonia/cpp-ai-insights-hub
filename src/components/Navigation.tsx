import { Baby, PersonStanding, Activity, Plane } from "lucide-react";

const AiConsultingMethodology = () => {
  const stages = [
    {
      icon: <Baby className="h-10 w-10 text-cpp-light-accent" />,
      title: "Crawl",
      description:
        "Pick a single use-case with a narrow scope and perform a no/low cost Proof of Concept (POC) and measure KPIs vs. Goals.",
    },
    {
      icon: <PersonStanding className="h-10 w-10 text-cpp-light-accent" />,
      title: "Walk",
      description:
        "Turn the PoC Use Case into full Production for single or limited department or Product after improvements and iteration.  Focus on ROI and KPIs.",
    },
    {
      icon: <Activity className="h-10 w-10 text-cpp-light-accent" />,
      title: "Run",
      description:
        "Expand the Limited deployment of the Use Case to an additional Product or Division of the company.  Further iteration and improvement.  Focus on ROI and KPIs.",
    },
    {
      icon: <Plane className="h-10 w-10 text-cpp-light-accent" />,
      title: "Fly",
      description:
        "Deploy the use-case company wide.  Add improvements and capabilities.  Additional focus on  KPIs vs. Goals.",
    },
  ];

  return (
    <section id="ai-methodology" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            AI Consulting Methodology
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We meet our clients where they are on the Ai journey. Our phased approach ensures every AI initiative aligns with your business maturity and risk tolerance — from strategy to scalable innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white border border-cpp-blue/10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{stage.icon}</div>
              <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-3">
                {stage.title}
              </h3>
              <p className="text-gray-600 text-sm font-inter">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiConsultingMethodology;
