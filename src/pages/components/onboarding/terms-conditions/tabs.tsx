import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type PropTypes = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export const Tabs = ({ tab, setTab }: PropTypes) => {
  return (
    <div className="flex items-center 2xl:gap-5 gap-4 justify-start">
      <Button
      className="rounded-full 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-6 px-4"
        onClick={() => setTab(0)}
        variant={tab === 0 ? "dark" : "outline"}
      >
        Terms & Conditions
      </Button>
      <Button
      className="rounded-full 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-6 px-4"
        onClick={() => setTab(1)}
        variant={tab === 0 ? "outline" : "dark"}
      >
        Privacy Policy
      </Button>
    </div>
  );
};
