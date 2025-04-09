
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HowItWorksStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const HowItWorksStep = ({ number, title, description, icon: Icon }: HowItWorksStepProps) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-brandBlue text-white flex items-center justify-center font-bold">
          {number}
        </div>
        {number < 3 && (
          <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-brandBlue/20 hidden md:block" />
        )}
      </div>
      
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={20} className="text-brandTeal" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
