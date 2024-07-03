import { Button } from "./button";
import {CornerDownLeft, CornerDownRight } from "lucide-react";
export const Pagination = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        Showing<span className="font-semibold text-foreground">1-5</span>of
        <span>256</span>
      </p>
      <div className="flex items-center gap-2">
        <Button variant="muted" size="icon">
        <CornerDownLeft />
        </Button>
        <Button variant="muted" size="icon">
        <CornerDownRight />
        </Button>
      </div>
    </div>
  );
};
