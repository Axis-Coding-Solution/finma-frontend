import {
  Dialog,
  DialogContent,
  DialogTrigger,
  FloatingInput,
} from "@/components/ui";
import {  Edit} from "lucide-react";

export const MarketResearchChartEditModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <Edit size={20} className="text-info" />
          </span>
        </DialogTrigger>
        <DialogContent className="2xl:w-[478px] w-[350px] 2xl:py-10 py-6 2xl:px-7 px-4 rounded">
          <div className="flex items-center justify-between mt-4">
            <h6 className="2xl:text-[28px] text-lg font-medium">Data table</h6>
            <div className="flex items-center gap-3">
              {/* <DialogClose asChild><X size={20} className="text-background bg-foreground rounded-full"/></DialogClose> */}
              {/* <button><Check size={20} className="text-background bg-[#FFB500] rounded-full"/></button> */}
            </div>
          </div>
          <div className=" flex flex-col 2xl:gap-10 gap-6">
            <FloatingInput type="text" label="Total Addressable Market (TAM)" />
            <FloatingInput
              type="text"
              label="Serviceable Available Market (SAM)"
            />
            <FloatingInput
              type="text"
              label="Serviceable Obtainable Market (SOM)"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
