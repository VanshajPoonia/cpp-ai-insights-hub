
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cpp-blue text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">About CPP</h3>
            <p className="text-white/70 mb-4">
              Covington Place Partners is a specialized consulting firm helping organizations 
              leverage AI to achieve their business goals and solve complex problems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cpp-accent" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cpp-accent" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cpp-accent" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cpp-accent" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white">AI Strategy Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white">Performance Optimization</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white">AI Risk Management</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white">Implementation Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white">About Us</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-white">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">123 Covington Place</li>
              <li className="text-white/70">Chicago, IL 60601</li>
              <li className="text-white/70">+1 314-960-0015</li>
              <li><a href="mailto:Shea@covingtonplacepartners.com" className="text-white/70 hover:text-white">Shea@covingtonplacepartners.com</a></li>
            </ul>
          </div>
        </div> */}
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">
            &copy; {currentYear} Covington Place Partners LLC. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
