import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WhitePaperTeaser = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cpp-blue via-cpp-blue to-cpp-light-blue">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cpp-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cpp-light-accent/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-cpp-accent/20 border border-cpp-accent/30">
              <Sparkles className="h-5 w-5 text-cpp-accent" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white/90 text-sm sm:text-base font-medium">
                <span className="text-cpp-accent font-semibold">New White Paper</span>
                <span className="mx-2 text-white/30">|</span>
                Speed is Strategy: How Agentic AI Rewired an Entire Operating Model
              </p>
            </div>
          </div>
          <Button
            onClick={() => navigate('/white-papers')}
            variant="outline"
            className="border-cpp-accent/50 text-cpp-accent hover:bg-cpp-accent hover:text-white text-sm px-5 py-2 h-auto flex-shrink-0 bg-transparent"
          >
            Read Now
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperTeaser;
