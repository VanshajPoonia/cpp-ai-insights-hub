// import { Brain, Bot, Rocket } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const aiSpectrum = [
//   {
//     title: "AI-Enabled Tools",
//     icon: <Brain className="h-10 w-10 text-cpp-accent" />,
//     description:
//       "These are traditional software systems enhanced with AI features. They include tools like smart text editors, recommendation engines, or fraud detection models that help users make better decisions—powered by machine learning behind the scenes.",
//   },
//   {
//     title: "AI Agents",
//     icon: <Bot className="h-10 w-10 text-cpp-accent" />,
//     description:
//       "AI agents operate semi-independently to complete tasks based on goals. Think of chatbots that manage bookings or virtual assistants that handle calendar events—they perceive, reason, and act, often learning as they go.",
//   },
//   {
//     title: "Agentic AI Systems",
//     icon: <Rocket className="h-10 w-10 text-cpp-accent" />,
//     description:
//       "These are advanced autonomous systems that can plan, adapt, and collaborate across complex environments. They use multi-agent coordination, long-term reasoning, and memory to achieve strategic goals—closer to human-like decision-making.",
//   },
// ];

// const AISpectrumSection = () => {
//   return (
//     <section id="services" className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
//             AI Landscape: From Tools to Autonomy
//           </h2>
//           <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Understanding where your organization fits in the AI landscape is the first step 
//             toward transformation. Here's how we think about AI maturity—from supportive tools 
//             to truly agentic systems.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {aiSpectrum.map((stage, index) => (
//             <Card
//               key={index}
//               className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-cpp-accent"
//             >
//               <CardContent className="pt-6">
//                 <div className="mb-4">{stage.icon}</div>
//                 <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-3">
//                   {stage.title}
//                 </h3>
//                 <p className="text-gray-600 font-inter">{stage.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AISpectrumSection;
import { Brain, Bot, Rocket } from "lucide-react";

const AISpectrumSection = () => {
  return (
    <section id="ai-scale" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            Navigating the AI Landscape
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
           From enhanced AI tools to fully autonomous systems, our collaborative approach to enterprise consulting starts with identifying the right solutions for optimal organizational enhancement.
          </p>
        </div>

        {/* Scale bar with gradient */}
        <div className="relative h-2 bg-gradient-to-r from-cpp-blue via-cpp-accent to-cpp-light-accent rounded-full mb-16" />

        {/* Markers on the scale */}
        <div className="grid grid-cols-3 gap-4 text-center relative -mt-14">
          <div>
            <div className="flex justify-center mb-2">
              <Brain className="h-10 w-10 text-cpp-blue" />
            </div>
            <h3 className="text-lg font-bold text-cpp-blue mb-1">AI-Enabled Tools</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Software enhanced by AI features like recommendations, predictions, and auto-tagging.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Bot className="h-10 w-10 text-cpp-accent" />
            </div>
            <h3 className="text-lg font-bold text-cpp-accent mb-1">AI Agents</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Goal-driven agents that observe, reason, and act — like AI assistants and chatbots.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Rocket className="h-10 w-10 text-cpp-light-accent" />
            </div>
            <h3 className="text-lg font-bold text-cpp-light-accent mb-1">Agentic AI Systems</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Autonomous systems with memory, planning, and execution — able to operate with minimal oversight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISpectrumSection;
