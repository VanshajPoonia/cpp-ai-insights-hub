
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section: string) => {
    // If it's a direct route, navigate to it
    if (section.startsWith('/')) {
      navigate(section);
      return;
    }
    
    // For sections on the home page
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Videos", href: "/videos" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-cpp-blue shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left with more padding */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 ml-6">
              <img 
                src="/assets/47cd0066-5828-4f9a-abfa-d8d2284584be.png" 
                alt="Covington Place Partners Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu - Positioned between center and right */}
          <div className="hidden md:flex items-center space-x-6 mr-8">
            {navLinks.map((link, index) => (
              <Button 
                key={link.name}
                variant={index === navLinks.length - 1 ? "default" : "ghost"} 
                className={index === navLinks.length - 1 
                  ? "bg-cpp-accent hover:bg-cpp-light-accent text-white" 
                  : "text-white hover:text-cpp-accent"
                }
                onClick={() => handleNavigation(link.href)}
              >
                {link.name}
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
        <div className="md:hidden bg-cpp-blue border-t border-cpp-accent/30 animate-fade-in shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  handleNavigation(link.href);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-4 px-4 font-inter text-white text-lg hover:bg-cpp-light-blue/20 rounded transition-colors duration-200 border-b border-cpp-accent/10"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
