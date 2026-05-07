import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WhatsAppButton = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href="https://wa.me/919951879767"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-chatbot"
      >
        <MessageCircle strokeWidth={1.8} />
      </a>
    </TooltipTrigger>
    <TooltipContent side="left" className="font-medium">
      <p>👋 Hi, what's up?</p>
    </TooltipContent>
  </Tooltip>
);

export default WhatsAppButton;
