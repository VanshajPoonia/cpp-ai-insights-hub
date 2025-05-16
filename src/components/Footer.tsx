
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cpp-blue text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">
            &copy; {currentYear} Covington Place Partners LLC. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
            <a 
              href="https://www.linkedin.com/company/covington-place-partners" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cpp-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
