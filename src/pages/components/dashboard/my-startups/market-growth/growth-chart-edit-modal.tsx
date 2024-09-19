import {
  MARKET_RESEARCH_QUERY_KEY,
  useSaveMarketResearchProjectGraph,
} from "@/api/hooks/dashboard";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  InputError,
} from "@/components/ui";
import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { MarketGrowthEditChartModalInitialValues } from "@/utils/initial-values/dashboard";
import { MarketGrowthEditChartModalSchema } from "@/utils/validation-schemas/dashoard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { Check, Edit } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const inputsArr = [1, 2, 3, 4, 5, 6];

export const MarketGrowthChartEditModal = ({
  marketResearchId,
  data,
}: {
  marketResearchId: string;
  data: typeof MarketGrowthEditChartModalInitialValues;
}) => {
  const dialog = useModal();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();
  const { mutateAsync } = useSaveMarketResearchProjectGraph();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: MarketGrowthEditChartModalInitialValues,
    resolver: yupResolver(MarketGrowthEditChartModalSchema as any),
  });

  useEffect(() => {
    if (data) reset(data);
  }, [data]);

  const onSubmitHandler = async (values: any) => {
    try {
      const res = await mutateAsync({
        graphValues: values,
        marketResearchId: marketResearchId,
      });
      successToast(res.message);
      queryClient.invalidateQueries({
        queryKey: [MARKET_RESEARCH_QUERY_KEY, projectId],
      });
      dialog.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <Edit size={20} className="text-info" />
          </span>
        </DialogTrigger>
        <DialogContent className=" 2xl:py-10 py-6 2xl:px-7 px-4 rounded">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex items-center justify-between mt-4">
              <h6 className="2xl:text-[28px] text-xl font-medium">
                Data table
              </h6>
              <div className="flex items-center gap-3 absolute top-[34px] right-12">
                {/* <DialogClose asChild><X size={20} className="text-background bg-foreground rounded-full"/></DialogClose> */}
                <button>
                  <Check
                    size={20}
                    className="text-background bg-[#FFB500] rounded-full"
                  />
                </button>
              </div>
            </div>
            <div className=" flex flex-col 2xl:gap-5 gap-3 mt-4">
              {inputsArr &&
                inputsArr.map((item: number, index: number) => (
                  <div
                    key={index}
                    className="flex items-center 2xl:gap-4 gap-2 w-full"
                  >
                    <div className="col-span-1 w-2/5">
                      <input
                        {...register(`year${item}.year` as any)}
                        className="w-full 2xl:py-4 py-2 2xl:px-5 px-4 border rounded-[10px]"
                        type="number"
                        placeholder="Year"
                      />
                      <InputError
                        error={(errors as any)?.[`year${item}`]?.year}
                      />
                    </div>
                    <div className=" col-span-2 w-3/5">
                      <input
                        {...register(`year${item}.amount` as any)}
                        className="w-full 2xl:py-4 py-2 2xl:px-5 px-4 border rounded-[10px]"
                        type="number"
                        placeholder="Amount in US Dollar"
                      />
                      <InputError
                        error={(errors as any)?.[`year${item}`]?.amount}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
