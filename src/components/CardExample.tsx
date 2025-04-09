
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PhoneCall, Mail, Globe, ExternalLink, Linkedin, Twitter } from "lucide-react";

interface CardExampleProps {
  floatAnimation?: boolean;
  className?: string;
}

const CardExample = ({ floatAnimation = false, className = "" }: CardExampleProps) => {
  return (
    <div className={`relative ${floatAnimation ? 'animate-float' : ''} ${className}`}>
      <div className="absolute -top-2 -right-2">
        <Badge className="bg-brandOrange text-white font-semibold">Your Digital Identity</Badge>
      </div>
      <Card className="max-w-sm mx-auto border-2 border-brandBlue/10 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <Avatar className="h-24 w-24 border-2 border-brandTeal mb-4">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Alex Morgan" />
            </Avatar>
            <h3 className="text-xl font-bold">Alex Morgan</h3>
            <p className="text-muted-foreground">Marketing Director</p>
            <p className="text-sm text-brandTeal font-medium mt-1">TechInnovate Solutions</p>
          </div>
          
          <div className="space-y-3">
            <Button variant="default" className="w-full flex items-center gap-2 bg-brandBlue hover:bg-brandBlue-light">
              <PhoneCall size={16} />
              <span>Call Me</span>
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2 border-brandTeal text-brandTeal hover:bg-brandTeal hover:text-white">
              <Mail size={16} />
              <span>Email Me</span>
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Globe size={16} />
              <span>Visit Website</span>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-3 mt-6">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-brandTeal/10 hover:text-brandTeal">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-brandTeal/10 hover:text-brandTeal">
              <Twitter size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-brandTeal/10 hover:text-brandTeal">
              <ExternalLink size={20} />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="bg-muted px-6 py-3 flex justify-center">
          <p className="text-xs text-muted-foreground">cardwiz.app/alexmorgan</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardExample;
