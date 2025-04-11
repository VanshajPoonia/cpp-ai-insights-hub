
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Our Team", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-cpp-blue py-4 shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/47cd0066-5828-4f9a-abfa-d8d2284584be.png" 
                alt="Covington Place Partners Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Menu - Right aligned items */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Button 
                key={link.name}
                variant={index === navLinks.length - 1 ? "default" : "ghost"} 
                className={index === navLinks.length - 1 
                  ? "bg-cpp-accent hover:bg-cpp-light-accent text-white" 
                  : "text-white hover:text-cpp-accent"
                }
                asChild
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Full width with improved visibility */}
      {isMenuOpen && (
        <div className="md:hidden bg-cpp-blue border-t border-cpp-accent/30 animate-fade-in">
          <div className="px-4 py-3 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 font-inter text-white text-lg hover:bg-cpp-light-blue/20 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
