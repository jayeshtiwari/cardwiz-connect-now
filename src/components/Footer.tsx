
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wand2, Instagram, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="h-6 w-6 text-brandOrange" />
              <span className="font-bold text-xl">CardWiz</span>
            </div>
            <p className="text-brandGray-light mb-6 max-w-md">
              Transform your professional networking with digital business cards that leave lasting impressions.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Github size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Templates</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brandGray-light hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-brandGray-light hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brandGray-light">
            © 2025 CardWiz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-brandGray-light hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-sm text-brandGray-light hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-sm text-brandGray-light hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
