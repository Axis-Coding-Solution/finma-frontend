import { forwardRef } from "react";
import { Star, StarHalf } from "lucide-react";

type RatingProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Ratings = forwardRef<HTMLInputElement, RatingProps>(
  (props, ref) => {
    return (
      <div className="flex justify-center items-center mt-8">
        <input {...props} className="hidden" ref={ref} />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Star key={i} size={16} fill="green" stroke="green" />
          ))}
        <StarHalf fill="green" size={16} stroke="green" />
          <span className="text-sm">
            <span className="font-bold">4 Projects</span> of expertise
          </span>
      </div>
    );
  }
);
Ratings.displayName = "Ratings";
