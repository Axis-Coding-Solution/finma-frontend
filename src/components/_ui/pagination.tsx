import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LIMIT = 5;

export const Pagination = ({
  total,
  setCurrentPage,
  totalPages,
  currentPage,
}: {
  total: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
}) => {
  const startValue =
    currentPage === 1 ? currentPage : (currentPage - 1) * LIMIT;
  const endValue = currentPage * LIMIT > total ? total : currentPage * LIMIT;

  return (
    <div className="flex items-center justify-end gap-4">
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        Showing
        <span className="font-semibold text-foreground">
          {" "}
          {startValue} - {endValue}
        </span>
        of
        <span>{total}</span>
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          className="rounded-[6px] text-muted-text bg-[#F3F3F3] hover:bg-info group"
          size="icon"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="group-hover:text-white hover:text-white" />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="rounded-[6px] text-muted-text bg-info hover:bg-info"
          // onClick={() => setCurrentPage((prev) => prev + 1)}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages} // Disable when on the last page
        >
          <ChevronRight className="text-white " />
        </Button>
      </div>
    </div>
  );
};
