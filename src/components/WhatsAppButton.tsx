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
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse z-50"
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
