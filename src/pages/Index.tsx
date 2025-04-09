
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import CardExample from "@/components/CardExample";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorksStep from "@/components/HowItWorksStep";
import FAQItem from "@/components/FAQItem";

import {
  Wand2,
  Palette,
  QrCode,
  Share2,
  BarChart2,
  Globe,
  Smartphone,
  ShieldCheck,
  UserPlus,
  Edit3,
  Maximize2
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brandBlue via-brandTeal to-brandBlue text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Digital Business Card, <span className="text-brandOrange">Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Create, customize, and share your professional identity with a tap. Connect instantly with your network using CardWiz's smart digital business cards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brandOrange hover:bg-brandOrange-light text-white">
                  Create Your Card - Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brandBlue">
                  See How It Works
                </Button>
              </div>
              <p className="text-sm opacity-80 mt-4">No credit card required • Free plan available</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <CardExample floatAnimation={true} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <p className="text-sm font-medium">TRUSTED BY PROFESSIONALS FROM</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="Google" className="h-6 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="LinkedIn" className="h-7 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Amazon" className="h-6 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-5 grayscale" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in a Digital Card</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a professional digital presence that makes networking effortless, trackable, and meaningful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Palette}
              title="Personalized Design"
              description="Choose from beautiful templates and customize with your own branding, colors, and style."
            />
            <FeatureCard 
              icon={QrCode}
              title="One-Scan Sharing"
              description="Generate a custom QR code that instantly shares your contact details when scanned."
            />
            <FeatureCard 
              icon={Globe}
              title="Custom URL"
              description="Get your own personalized web address (cardwiz.app/yourname) to share anywhere online."
            />
            <FeatureCard 
              icon={Share2}
              title="Multi-Platform Sharing"
              description="Share your card via text, email, social media, or any messaging platform with one click."
            />
            <FeatureCard 
              icon={BarChart2}
              title="Connection Analytics"
              description="Track when your card is viewed and which contact options visitors interact with most."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Privacy Controls"
              description="Choose exactly what information to share and with whom, with granular privacy settings."
            />
          </div>
        </div>
      </section>
      
      {/* Tab Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Modern Networking</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CardWiz is built for the way professionals connect today - mobile, digital, and meaningful.
            </p>
          </div>
          
          <Tabs defaultValue="mobile" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 w-full md:w-2/3 mx-auto">
              <TabsTrigger value="mobile" className="data-[state=active]:bg-brandTeal data-[state=active]:text-white">Mobile Optimized</TabsTrigger>
              <TabsTrigger value="customize" className="data-[state=active]:bg-brandTeal data-[state=active]:text-white">Customization</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-brandTeal data-[state=active]:text-white">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile">
              <Card className="border-none shadow-none bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brandTeal to-brandBlue rounded-full blur-3xl opacity-20"></div>
                      <div className="relative">
                        <Smartphone className="h-64 w-64 text-brandTeal" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Perfect Mobile Experience</h3>
                    <p className="text-muted-foreground mb-6">
                      CardWiz is designed to look and function beautifully on any device. Your contacts can view and save your details with just a tap, without downloading any apps.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "One-tap contact saving",
                        "Mobile share options integration",
                        "Responsive design for all screen sizes",
                        "Fast loading even on slower connections"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 h-5 w-5 rounded-full bg-brandTeal/20 text-brandTeal flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="customize">
              <Card className="border-none shadow-none bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4">Endless Customization</h3>
                    <p className="text-muted-foreground mb-6">
                      Make your card truly yours with robust customization options. Add your brand colors, upload logos, and organize your contact details exactly how you want them.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Multiple templates and themes",
                        "Custom color schemes and branding",
                        "Light and dark mode options",
                        "Rearrange elements with drag & drop"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 h-5 w-5 rounded-full bg-brandTeal/20 text-brandTeal flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brandOrange to-brandTeal rounded-full blur-3xl opacity-20"></div>
                      <div className="relative">
                        <Palette className="h-64 w-64 text-brandTeal" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card className="border-none shadow-none bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandOrange rounded-full blur-3xl opacity-20"></div>
                      <div className="relative">
                        <BarChart2 className="h-64 w-64 text-brandTeal" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Powerful Analytics</h3>
                    <p className="text-muted-foreground mb-6">
                      Gain insights into how your card performs. Know when it's viewed, which links are clicked, and how people are connecting with you.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "View count and engagement metrics",
                        "Geographic location of views",
                        "Most popular contact methods",
                        "Connection conversion tracking"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 h-5 w-5 rounded-full bg-brandTeal/20 text-brandTeal flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brandBlue via-brandBlue-light to-brandTeal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to transform your networking experience?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who are making meaningful connections with CardWiz.
          </p>
          <Button size="lg" className="bg-brandOrange hover:bg-brandOrange-light text-white">
            Create Your Digital Card
          </Button>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CardWiz Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating and sharing your digital business card takes just minutes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <HowItWorksStep 
              number={1}
              title="Create Your Profile"
              description="Sign up and fill in your contact details, upload a photo, and customize your card design."
              icon={Edit3}
            />
            
            <HowItWorksStep 
              number={2}
              title="Personalize Your Card"
              description="Choose colors, templates, and decide which contact methods and social profiles to display."
              icon={Palette}
            />
            
            <HowItWorksStep 
              number={3}
              title="Share & Connect"
              description="Share your card via QR code, your custom URL, or directly through messaging apps."
              icon={Share2}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-brandTeal hover:bg-brandTeal-light">
              Create Your Card Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-muted" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who are already making better connections with CardWiz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="CardWiz has completely transformed how I network at industry events. I love being able to track who's viewed my card after events too!"
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechCorp"
              avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            
            <TestimonialCard
              quote="As a freelancer, making a good impression is crucial. CardWiz helps me look professional and makes it easy for clients to reach me."
              author="David Chen"
              role="UX Designer"
              avatarUrl="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            
            <TestimonialCard
              quote="I'm always meeting new people at conferences. Having a digital card that I can customize for each event has been a game-changer."
              author="Elena Rodriguez"
              role="Sales Manager"
              company="Global Solutions"
              avatarUrl="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about CardWiz.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                question="What is CardWiz?"
                answer="CardWiz is a digital business card platform that allows you to create, customize, and share your professional contact information through a unique URL and QR code. It replaces traditional paper business cards with a more interactive, eco-friendly alternative."
                value="item-1"
              />
              <FAQItem
                question="Do I need to install an app to use CardWiz?"
                answer="No! That's the beauty of CardWiz. You can create and manage your digital business card through our web platform, and people who receive your card don't need any special app to view it - it works in any web browser."
                value="item-2"
              />
              <FAQItem
                question="How do people save my contact information?"
                answer="When someone views your CardWiz, they can tap the 'Save Contact' button to add your information directly to their phone's address book. They can also access your card anytime via your unique URL."
                value="item-3"
              />
              <FAQItem
                question="Is CardWiz free to use?"
                answer="CardWiz offers a free plan with essential features to get started. We also offer premium plans with additional customization options, analytics, and multiple card profiles for different purposes."
                value="item-4"
              />
              <FAQItem
                question="Can I see who has viewed my card?"
                answer="Yes! With CardWiz, you can track when your card is viewed and which contact options visitors interact with most, giving you valuable insights into your networking effectiveness."
                value="item-5"
              />
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-brandBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Network Smarter with CardWiz
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create your digital business card in minutes and start making lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brandOrange hover:bg-brandOrange-light text-white">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brandBlue">
              View Demo
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-4">No credit card required • Upgrade anytime</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
