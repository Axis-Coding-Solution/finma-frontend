"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PropTypes = {
  showOutsideDays?: boolean;
  value: Date | undefined;
  onChange: any;
  onBlur: any;
};

export function DatePicker(props: PropTypes) {
  const { showOutsideDays = true, value, onChange, onBlur } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline-secondary"
          className={cn(
            "w-full justify-between text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(value, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          onDayBlur={onBlur}
          showOutsideDays={showOutsideDays}
        />
      </PopoverContent>
    </Popover>
  );
}
