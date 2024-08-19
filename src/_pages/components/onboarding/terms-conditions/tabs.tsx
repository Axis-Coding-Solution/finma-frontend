import { Button } from "@/components/_ui/button";
import { Dispatch, SetStateAction } from "react";

type PropTypes = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export const Tabs = ({ tab, setTab }: PropTypes) => {
  return (
    <div className="flex flex-col md:flex-row justify-start md:mx-10 my-5 gap-2">
      <Button
        onClick={() => setTab(0)}
        variant={tab === 0 ? "dark" : "outline"}
      >
        Terms & Conditions
      </Button>
      <Button
        onClick={() => setTab(1)}
        variant={tab === 0 ? "outline" : "dark"}
      >
        Privacy Policy
      </Button>
    </div>
  );
};
