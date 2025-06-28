
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms of Use to continue.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      agreeToTerms: false
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-cpp-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Ready to explore how AI can transform your business? Contact us today to schedule a consultation with our team of advisors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-montserrat font-semibold mb-4 flex items-center">
                <MapPin className="mr-3 h-5 w-5" />
                Our Motto
              </h3>
              <p className="text-white/80"><br/>
              AI made simple. <br/>
               Innovation made possible.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-montserrat font-semibold mb-4 flex items-center text-white">
                <Phone className="mr-3 h-5 w-5" />
                Contact Details
              </h3>
              <p className="text-white/80 mb-2">
                Phone: (314) 960-0015
              </p>
              <p className="text-white/80">
                Email: Shea@covingtonplacepartners.com
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg text-gray-800">
              <h3 className="text-xl font-montserrat font-semibold text-cpp-blue mb-6">
                Send Us a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Share a few words about where your business is in terms of AI usage<br/>
                  (Do let us know where you are on the AI usage. We meet you where you are on the maturity curve.)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32"
                  required
                />
              </div>
              
              <div className="mt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-xs text-gray-600 leading-tight">
                    I agree to the below Terms of Use <span className="text-red-500">(Required)</span><br/>
                    <span className="text-xs">By submitting this form you consent to receive phone calls, text messages and emails from Covington Place Partners. It is not a condition of purchasing any goods or services. You can opt out at any time, message/data rates may apply, and opting-in includes acceptance of the Privacy Policy and Terms of Use. Communications through this website or via email are not encrypted and are not necessarily secure. Use of the internet or email is for your convenience only, and by using them, you assume the risk of unauthorized use.</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit"
                  className="w-full bg-cpp-accent hover:bg-cpp-light-accent text-white"
                  disabled={!formData.agreeToTerms}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
