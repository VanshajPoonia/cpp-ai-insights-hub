
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface HeroVideoDialogProps {
  className?: string;
  animationStyle?: "top-in-bottom-out" | "fade-in-out";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

const HeroVideoDialog = ({
  className,
  animationStyle = "fade-in-out",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt,
}: HeroVideoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const isYouTube = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button 
          className={cn(
            "relative group w-full aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300",
            className
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="rounded-full bg-cpp-accent p-4 shadow-lg transition-all duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
          <img 
            src={thumbnailSrc} 
            alt={thumbnailAlt} 
            className="w-full h-full object-cover"
          />
        </button>
      </DialogTrigger>
      <DialogContent 
        className={cn(
          "sm:max-w-4xl w-full p-0 bg-transparent border-none shadow-none",
          animationStyle === "top-in-bottom-out" ? "data-[state=open]:slide-in-from-top-10" : "" 
        )}
      >
        <div className="aspect-video w-full">
          {isYouTube ? (
            <iframe
              width="100%"
              height="100%"
              src={`${videoSrc}${videoSrc.includes('?') ? '&' : '?'}autoplay=1`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            ></video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HeroVideoDialog;
