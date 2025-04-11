
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-cpp-blue via-cpp-blue to-cpp-blue/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6">
              Guiding Your AI Journey <br />
              <span className="text-cpp-accent">From Vision to Value</span>
            </h1>
            <p className="text-lg md:text-xl font-inter text-white/90 mb-8 max-w-2xl">
              Covington Place Partners helps clients achieve their goals, solve complex problems, 
              and enhance performance by simplifying AI implementation for practical business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cpp-accent hover:bg-cpp-light-accent text-white px-8 py-6 text-lg">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-cpp-accent to-cpp-light-accent rounded-lg opacity-10 absolute -top-8 -right-8"></div>
            <div className="w-full h-[500px] bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80')] bg-cover bg-center rounded-lg shadow-xl relative"></div>
            <div className="absolute bottom-[-30px] right-[-20px] bg-white p-5 rounded-lg shadow-lg">
              <h3 className="font-montserrat font-semibold text-cpp-accent">
                10+ Years
              </h3>
              <p className="text-sm text-gray-600">
                Consulting Experience
              </p>
            </div>
            <div className="absolute top-[-30px] left-[-20px] bg-white p-5 rounded-lg shadow-lg">
              <h3 className="font-montserrat font-semibold text-cpp-blue">
                AI Specialists
              </h3>
              <p className="text-sm text-gray-600">
                Simplified Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
