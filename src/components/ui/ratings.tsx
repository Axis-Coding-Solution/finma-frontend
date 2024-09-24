import { forwardRef } from "react";
import { Star, StarHalf } from "lucide-react";

type RatingProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Ratings = forwardRef<HTMLInputElement, RatingProps>(
  (props, ref) => {
    return (
      <div className="flex justify-center items-center">
        <input {...props} className="hidden" ref={ref} />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Star key={i} size={12} fill="#FFB500" stroke="#FFB500" />
          ))}
        <StarHalf fill="#FFB500" size={14} stroke="#FFB500" />
          <span className="text-[14px] font-[400] ">
            <span className="font-[600]">4 Projects</span> of expertise
          </span>
      </div>
    );
  }
);
Ratings.displayName = "Ratings";
