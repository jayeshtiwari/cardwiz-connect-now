
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
}

const TestimonialCard = ({ quote, author, role, company, avatarUrl }: TestimonialCardProps) => {
  return (
    <Card className="bg-white dark:bg-slate-900 border-2 border-brandGray/50 shadow-sm h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4 text-brandOrange">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        
        <blockquote className="text-foreground italic mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center gap-3 mt-auto">
          <Avatar className="h-10 w-10 border border-brandTeal/30">
            {avatarUrl ? (
              <img src={avatarUrl} alt={author} />
            ) : (
              <div className="bg-brandTeal text-white w-full h-full flex items-center justify-center font-medium">
                {author.charAt(0)}
              </div>
            )}
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-muted-foreground">{role}{company ? `, ${company}` : ''}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
