
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Covington Place Partners helped us navigate the complex world of AI implementation with clarity and focus. Their ability to translate technical concepts into business value was invaluable.",
      author: "Sarah Johnson",
      position: "CTO, MidWest Healthcare",
      company: "MidWest Healthcare"
    },
    {
      quote: "Working with CPP transformed our approach to data analytics. Their AI strategy has delivered tangible ROI within just six months, exceeding our expectations.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "GlobalTech Innovations"
    },
    {
      quote: "The CPP team's practical approach to AI consulting was exactly what we needed. They focused on real business outcomes rather than buzzwords and theoretical concepts.",
      author: "Rebecca Martinez",
      position: "CEO",
      company: "Urban Retail Group"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from organizations we've helped 
            transform through AI implementation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="absolute -top-5 left-10 text-cpp-accent">
              <Quote className="h-10 w-10" />
            </div>
            
            <div className="pt-6">
              <p className="text-xl text-gray-700 italic mb-8">
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 bg-cpp-blue/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-montserrat font-semibold text-cpp-blue">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-cpp-blue text-cpp-blue hover:bg-cpp-blue/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-cpp-accent' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-cpp-blue text-cpp-blue hover:bg-cpp-blue/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center">
            <div className="h-16 w-48 bg-gray-200 rounded"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-16 w-48 bg-gray-200 rounded"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-16 w-48 bg-gray-200 rounded"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-16 w-48 bg-gray-200 rounded"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
