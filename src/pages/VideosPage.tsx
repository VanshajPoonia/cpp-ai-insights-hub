
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const VideosPage = () => {
  const [embedUrl, setEmbedUrl] = useState("");
  
  const linkedinPosts = [
    {
      id: 1,
      title: "AI Strategy Implementation",
      description: "Learn how to implement effective AI strategies for your business.",
      embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338686933260279811?compact=1"
    },
    {
      id: 2,
      title: "Navigating AI Transformation", 
      description: "A guide to successful digital transformation with AI technologies.",
      embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7339759928884043778?compact=1"
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
              Explore our collection of insightful posts on AI implementation, strategy development, and industry best practices.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <h2 className="text-2xl font-montserrat font-semibold text-cpp-blue mb-6">Featured Video</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center">
                <iframe 
                  width="800" 
                  height="450" 
                  src="https://www.youtube-nocookie.com/embed/fdOucyhhcV0?modestbranding=1&rel=0&showinfo=0" 
                  title="The AI Imperative for Business Leaders"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen 
                  className="rounded-lg shadow-lg w-full max-w-3xl aspect-video"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-cpp-blue">The AI Imperative for Business Leaders</h3>
                <p className="text-gray-700">Essential insights on AI strategy and implementation for today's business leaders.</p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-montserrat font-semibold text-cpp-blue">Latest Posts</h2>
              
              {/* External Video Embed Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-cpp-accent hover:bg-cpp-light-accent text-white">
                    Embed External Content
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Embed External Content</SheetTitle>
                  </SheetHeader>
                  <form onSubmit={handleExternalVideoEmbed} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="embed-url" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Post or Video URL
                      </label>
                      <input
                        id="embed-url"
                        type="text"
                        value={embedUrl}
                        onChange={(e) => setEmbedUrl(e.target.value)}
                        placeholder="https://www.linkedin.com/posts/..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-cpp-accent focus:border-cpp-accent"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-cpp-accent hover:bg-cpp-light-accent text-white">
                      Preview Content
                    </Button>
                  </form>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {linkedinPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex justify-center p-4">
                    <iframe 
                      src={post.embedSrc} 
                      height="399" 
                      width="100%" 
                      frameBorder="0" 
                      allowFullScreen 
                      title={post.title}
                      className="rounded-lg max-w-md"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cpp-blue mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.description}</p>
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
