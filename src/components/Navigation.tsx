import { Baby, PersonStanding, Activity, Plane } from "lucide-react";

const AiConsultingMethodology = () => {
  const stages = [
    {
      icon: <Baby className="h-10 w-10 text-cpp-light-accent" />,
      title: "Crawl",
      description:
        "We with you to select a narrow-scope use-case to develop a no/low cost Proof of Concept and establish goal-focused KPIs.",
    },
    {
      icon: <PersonStanding className="h-10 w-10 text-cpp-light-accent" />,
      title: "Walk",
      description:
        "Deploy validated proof of concept cases to sample production- or department-level application. Focus on finely tuning case solutions to meet KPIs.",
    },
    {
      icon: <Activity className="h-10 w-10 text-cpp-light-accent" />,
      title: "Run",
      description:
        "Expand limited deployment of the use case to  additional products or company divisions for further iteration and improvement. Focus on developing processes so that KPIs show ROI.",
    },
    {
      icon: <Plane className="h-10 w-10 text-cpp-light-accent" />,
      title: "Fly",
      description:
        "Apply  proven use cases company-wide. Track and monitor performance for ongoing improvement. Focus beyond ROI to achieve organizational goals.",
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
              We meet our clients where they are on the AI journey. We meet our clients where they are on their AI adoption journey. Our phased approach ensures every AI initiative aligns with your business maturity and risk tolerance — from strategy to scalable innovation.
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
