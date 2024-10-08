import {
  MARKET_RESEARCH_QUERY_KEY,
  useSaveMarketResearchProjectGraph,
} from "@/api/hooks/dashboard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  FloatingInput,
  InputError,
} from "@/components/ui";
import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { MarketResearchEditChartModalInitialValues } from "@/utils/initial-values/dashboard";
import { MarketResearchEditChartModalSchema } from "@/utils/validation-schemas/dashoard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { Check, Edit, X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const MarketResearchChartEditModal = ({
  marketResearchId,
  data,
}: {
  marketResearchId: string;
  data: typeof MarketResearchEditChartModalInitialValues;
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
    defaultValues: MarketResearchEditChartModalInitialValues,
    resolver: yupResolver(MarketResearchEditChartModalSchema as any),
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
    <Dialog open={dialog.show} onOpenChange={dialog.setShow}>
      <DialogTrigger asChild>
        {marketResearchId && (
          <span role="button">
            <Edit size={20} className="text-info" />
          </span>
        )}
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="2xl:w-[478px] w-[350px] 2xl:py-10 py-6 2xl:px-7 px-4 rounded">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex items-center justify-between mt-4 relative"
        >
          <h6 className="2xl:text-[28px] text-lg font-medium">Data table</h6>
          <div className="flex flex-row-reverse items-center gap-3 absolute -top-4 right-0">
            <DialogClose asChild>
                <X
                  size={20}
                  className="text-background bg-foreground rounded-full cursor-pointer"
                />
              </DialogClose>
            <button type="submit">
              <Check
                size={20}
                className="text-background bg-[#FFB500] rounded-full"
              />
            </button>
          </div>
        </form>
        <div className=" flex flex-col 2xl:gap-10 gap-6">
          <div>
            <FloatingInput
              type="text"
              label="Total Addressable Market (TAM)"
              {...register("tam")}
            />
            <InputError noPopOut error={errors.tam} />
          </div>
          <div>
            <FloatingInput
              type="text"
              label="Serviceable Available Market (SAM)"
              {...register("sam")}
            />
            <InputError noPopOut error={errors.sam} />
          </div>
          <div>
            <FloatingInput
              type="text"
              label="Serviceable Obtainable Market (SOM)"
              {...register("som")}
            />
            <InputError noPopOut error={errors.som} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
