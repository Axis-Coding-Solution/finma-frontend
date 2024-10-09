import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { Check, Info, X } from "lucide-react";

interface CheckValidateProps {
  title: string;
  note?: string;
  isValid: boolean | null;
}

export const CheckValidate = ({ title, isValid, note }: CheckValidateProps) => {
  return (
    <div className="2xl:text-xl text-sm flex items-center gap-2 capitalize">
      {isValid === true ? (
        <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
      ) : isValid === false ? (
        <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
      ) : (
        <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-[#E0E0E0] rounded-full " />
      )}
      {title}
      {note && (
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger>
              <Info size={14} />
            </TooltipTrigger>
            <TooltipContent className="rounded-sm max-w-[300px] p-2 relative">
              <p className="text-foreground text-sm">{note}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};
