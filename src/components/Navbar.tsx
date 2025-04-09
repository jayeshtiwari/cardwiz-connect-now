
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wand2 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-brandTeal" />
          <span className="font-bold text-xl">CardWiz</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-brandTeal transition">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-brandTeal transition">How It Works</a>
          <a href="#testimonials" className="text-sm hover:text-brandTeal transition">Testimonials</a>
          <a href="#faq" className="text-sm hover:text-brandTeal transition">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">Log In</Button>
          <Button className="bg-brandTeal hover:bg-brandTeal-light">Sign Up Free</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
