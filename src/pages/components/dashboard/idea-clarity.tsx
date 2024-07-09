import { cn } from "@/utils";
import { ArrowRight } from "lucide-react";
import ProductModal from "./product/product-modal";
type PropTypes = {
  badgeText: string;
  badgeColor: "success" | "info" | "destructive";
  title: string;
  description: string;
};
function IdeaClarityCard({
  badgeText,
  badgeColor = "success",
  title,
  description,
}: PropTypes) {
  const badgeSettings = {
    success: {
      default: "bg-success",
      light: "bg-success/10",
      text: "text-success",
      direction: "-rotate-45",
    },
    info: {
      default: "bg-info",
      light: "bg-info/10",
      text: "text-info",
      direction: "rotate-0",
    },
    destructive: {
      default: "bg-destructive",
      light: "bg-destructive/10",
      text: "text-destructive",
      direction: "rotate-45",
    },
  };
  return (
    <div className="bg-background rounded-2xl p-4 text-foreground">
      <div className="flex items-center gap-1">
        <span
          className={cn(
            "text-background text-sm px-2 py-1 rounded-full",
            badgeSettings[badgeColor].default
          )}
        >
          {badgeText}
        </span>
        <div
          className={cn("rounded-full p-1", badgeSettings[badgeColor].light)}
        >
          <ArrowRight
            className={cn(
              "text-xs",
              badgeSettings[badgeColor].text,
              badgeSettings[badgeColor].direction
            )}
          />
        </div>
      </div>
      <h6 className="text-base font-semibold mt-3">{title}</h6>
      <p className="text-sm mt-2 pb-5">{description}</p>
      <ProductModal
        title={title}
        badgeSettings={badgeSettings[badgeColor]}
        badgeText={badgeText}
      />
    </div>
  );
}

export default IdeaClarityCard;
