
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroVideoDialog from "@/components/HeroVideoDialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const VideosPage = () => {
  const [embedUrl, setEmbedUrl] = useState("");
  
  const videos = [
    {
      id: 1,
      title: "AI Strategy Implementation",
      description: "Learn how to implement effective AI strategies for your business.",
      thumbnailSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=900",
      videoSrc: "https://www.youtube.com/embed/Gsdi6O5ttsw"
    },
    {
      id: 2,
      title: "Navigating AI Transformation",
      description: "A guide to successful digital transformation with AI technologies.",
      thumbnailSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=900",
      videoSrc: "https://www.youtube.com/embed/Gsdi6O5ttsw"
    },
    {
      id: 3,
      title: "AI Development Best Practices",
      description: "Expert insights on developing robust AI solutions.",
      thumbnailSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900",
      videoSrc: "https://www.youtube.com/embed/Gsdi6O5ttsw"
    }
  ];

  const handleExternalVideoEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you might want to validate the URL
  };

  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-cpp-blue mb-4">
              Video Resources
            </h1>
            <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our collection of insightful videos on AI implementation, strategy development, and industry best practices.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <h2 className="text-2xl font-montserrat font-semibold text-cpp-blue mb-6">Featured Video</h2>
            <div className="max-w-4xl mx-auto">
              <HeroVideoDialog
                videoSrc="https://www.youtube.com/embed/Gsdi6O5ttsw"
                thumbnailSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=900"
                thumbnailAlt="AI Strategy Implementation"
                animationStyle="top-in-bottom-out"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-cpp-blue">AI Strategy Implementation</h3>
                <p className="text-gray-700">Learn how to implement effective AI strategies for your business.</p>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-montserrat font-semibold text-cpp-blue">Latest Videos</h2>
              
              {/* External Video Embed Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-cpp-accent hover:bg-cpp-light-accent text-white">
                    Embed External Video
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Embed External Video</SheetTitle>
                  </SheetHeader>
                  <form onSubmit={handleExternalVideoEmbed} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="embed-url" className="block text-sm font-medium text-gray-700 mb-1">
                        YouTube or Video URL
                      </label>
                      <input
                        id="embed-url"
                        type="text"
                        value={embedUrl}
                        onChange={(e) => setEmbedUrl(e.target.value)}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-cpp-accent focus:border-cpp-accent"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-cpp-accent hover:bg-cpp-light-accent text-white">
                      Preview Video
                    </Button>
                  </form>
                  
                  {embedUrl && (
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="relative cursor-pointer aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-cpp-accent p-3 shadow-lg">
                                <Play className="h-5 w-5 text-white" />
                              </div>
                            </div>
                            <p className="text-gray-500">Click to preview</p>
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
                          <iframe
                            width="100%"
                            height="100%"
                            src={embedUrl.replace('watch?v=', 'embed/')}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="aspect-video rounded-lg"
                          ></iframe>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video">
                    <HeroVideoDialog
                      videoSrc={video.videoSrc}
                      thumbnailSrc={video.thumbnailSrc}
                      thumbnailAlt={video.title}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cpp-blue mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VideosPage;
