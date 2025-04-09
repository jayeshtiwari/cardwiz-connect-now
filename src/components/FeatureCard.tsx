
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-2 border-brandGray transition-all duration-300 hover:border-brandTeal hover:shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-brandTeal/10 flex items-center justify-center text-brandTeal mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
