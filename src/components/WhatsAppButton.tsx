import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WhatsAppButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://wa.me/919951879767"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p className="font-medium">👋 Hi, What's up Buddy!</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;
