import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WhitePaperTeaser = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-cpp-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cpp-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cpp-light-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-cpp-accent/20 flex items-center justify-center">
              <FileText className="h-10 w-10 text-cpp-accent" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Speed is Strategy
            </h2>
            <p className="text-cpp-light-accent text-lg">
              How Agentic AI rewired an entire operating model. Check the white paper now!
            </p>
          </div>
          <Button
            onClick={() => navigate('/white-papers')}
            className="bg-cpp-accent hover:bg-cpp-light-accent text-white px-8 py-6 text-lg flex-shrink-0"
          >
            Read Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperTeaser;
