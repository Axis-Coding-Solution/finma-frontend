import { Badge } from "@/components/_ui/badge";
import { MessageSquare, Play } from "lucide-react";
type PropTypes = {
  img: string;
  title?: string;
  description?: string;
  commentCount?: string;
  badge1?: string;
  badge2?: string;
  count?: string;
};
export const ProductCard = ({
  img,
  title,
  description,
  commentCount,
  badge1,
  badge2,
  count,
}: PropTypes) => {
  return (
    <div className="flex md:flex-row flex-col gap-6 md:items-center items-starts relative">
      <img className="w-32 h-32 object-cover rounded-lg" src={img} alt="" />
      <div className="flex md:flex-row flex-col gap-4 justify-between w-full ">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold ">{title}</h4>
          <p className="text-base font-normal">{description}</p>
          <div className="flex items-center gap-2">
            <span className="flex  items-center gap-2 text-sm text-muted-foreground font-semibold pr-4">
              <MessageSquare size="16" />
              {commentCount}
            </span>
            {badge1 && <Badge variant="blue">{badge1}</Badge>}
            {badge2 && <Badge variant="blue">{badge2}</Badge>}
          </div>
        </div>
        <div className="bg-muted rounded-lg md:p-5 p-3 flex flex-col items-center justify-center md:gap-4 gap-2 md:static absolute top-0 right-0">
          <Play strokeWidth={2.25} fill="" size="16" className="-rotate-90" />
          <span className="text-base text-foreground font-semibold">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};
