import { Button } from "./button";
import { CornerDownLeft, CornerDownRight } from "lucide-react";
export const Pagination = ({ total }: { total: number }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        Showing<span className="font-semibold text-foreground">1-{total}</span>
        of
        <span>{total}</span>
      </p>
      <div className="flex items-center gap-2">
        <Button variant="muted" size="icon" disabled>
          <CornerDownLeft />
        </Button>
        <Button variant="muted" size="icon" disabled>
          <CornerDownRight />
        </Button>
      </div>
    </div>
  );
};
