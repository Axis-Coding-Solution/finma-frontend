import { Dialog, DialogContent, DialogTrigger } from "@/components/ui";
import { Edit } from "lucide-react";

const data = [1, 2, 3, 4, 5];

export const MarketGrowthChartEditModal = () => {
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
            <h6 className="2xl:text-[28px] text-xl font-medium">Data table</h6>
            <div className="flex items-center gap-3">
              {/* <DialogClose asChild><X size={20} className="text-background bg-foreground rounded-full"/></DialogClose> */}
              {/* <button><Check size={20} className="text-background bg-[#FFB500] rounded-full"/></button> */}
            </div>
          </div>
          <div className=" flex flex-col 2xl:gap-5 gap-3">
            {data.map(() => (
              <div className="flex items-center 2xl:gap-4 gap-2">
                <div className="col-span-1 w-2/5">
                  <input
                    className="w-full 2xl:py-4 py-2 2xl:px-5 px-4 border rounded-[10px]"
                    type="text"
                    placeholder="Year"
                  />
                </div>
                <div className=" col-span-2 w-3/5">
                  <input
                    className="w-full 2xl:py-4 py-2 2xl:px-5 px-4 border rounded-[10px]"
                    type="text"
                    placeholder="Amount in US Dollar"
                  />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
