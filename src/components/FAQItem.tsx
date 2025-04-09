
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-b border-brandGray/30">
      <AccordionTrigger className="text-left font-medium hover:text-brandTeal hover:no-underline py-4">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
