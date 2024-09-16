import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  FloatingInput,
  InputError,
} from "@/components/ui";
import { MarketResearchEditChartModalInitialValues } from "@/utils/initial-values/dashboard";
import { MarketResearchEditChartModalSchema } from "@/utils/validation-schemas/dashoard";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check, Edit, X } from "lucide-react";
import { useForm } from "react-hook-form";

export const MarketResearchChartEditModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: MarketResearchEditChartModalInitialValues,
    resolver: yupResolver(MarketResearchEditChartModalSchema as any),
  });

  const onSubmitHandler = async (values: any) => {
    try {
      console.log(values);
    } catch {}
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <Edit size={20} className="text-info" />
          </span>
        </DialogTrigger>
        <DialogContent className="2xl:w-[478px] w-[350px] 2xl:py-10 py-6 2xl:px-7 px-4 rounded">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex items-center justify-between mt-4"
          >
            <h6 className="2xl:text-[28px] text-lg font-medium">Data table</h6>
            <div className="flex items-center gap-3 absolute top-[34px] right-12">
              {/* <DialogClose asChild>
                <X
                  size={20}
                  className="text-background bg-foreground rounded-full"
                />
              </DialogClose> */}
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
              <InputError error={errors.tam} />
            </div>
            <div>
              <FloatingInput
                type="text"
                label="Serviceable Available Market (SAM)"
                {...register("sam")}
              />
              <InputError error={errors.sam} />
            </div>
            <div>
              <FloatingInput
                type="text"
                label="Serviceable Obtainable Market (SOM)"
                {...register("som")}
              />
              <InputError error={errors.som} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
