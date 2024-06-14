import { forwardRef } from "react";
import { Star, StarHalf } from "lucide-react";

type RatingProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Ratings = forwardRef<HTMLInputElement, RatingProps>(
  (props, ref) => {
    return (
      <div className="flex ">
        <input {...props} className="hidden" ref={ref} />
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star key={i} size={16} fill="yellow" stroke="yellow" />
          ))}
        <StarHalf fill="yellow" size={16} stroke="yellow" />
      </div>
    );
  }
);
Ratings.displayName = "Ratings";
