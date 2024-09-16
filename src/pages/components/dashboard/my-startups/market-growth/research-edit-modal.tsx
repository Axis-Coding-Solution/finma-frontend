import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  InputError,
  ReloadButton,
} from "@/components/ui";
import { MessageCircleMore, Plus, SquarePen } from "lucide-react";
import { MarketResearchChart } from "./research-chart";
import { ProgressBar } from "@/pages/components/common";
import { MarketResearchChartEditModal } from "./research-chart-edit-modal";
import { CardStatusDropdown } from "../card-status";
import { TeamMembersDropdown } from "../team-members";
import { TaskActionDropdown } from "../task-action";
import { useForm } from "react-hook-form";
import { MarketResearchEditModalInitialValues } from "@/utils/initial-values/dashboard";
import { MarketResearchEditModalSchema } from "@/utils/validation-schemas/dashoard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useAddMarketResearchProject } from "@/api/hooks/dashboard/idea-clarity";
import { createFormData, errorToast, successToast } from "@/utils";

export const MarketResearchCardEditModal = () => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddMarketResearchProject();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: MarketResearchEditModalInitialValues,
    resolver: yupResolver(MarketResearchEditModalSchema as any),
  });

  const onSubmitHandler = async (values: any) => {
    try {
      const formData = createFormData(values);
      const response = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["/project/market-research"] });
      successToast(response.message);
      modal.close();
    } catch (error: any) {
      console.error("Error:", error);
      errorToast("Something went wrong while creating the project");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2 items-center  bg-foreground 2xl:px-6 px-4 2xl:py-2 py-1 text-background 2xl:rounded rounded-md 2xl:text-2xl text-base ">
              <SquarePen size={20} className="2xl:text-2xl text-base" />
              <span className="">Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="bg-info-light min-w-[1084px] 2xl:py-[52px] py-6 2xl:px-8 px-4">
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {/* Team member & Card Status */}
            <div className="flex items-start 2xl:gap-10 gap-6">
              {/* Team Members  */}
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Team members
                </h6>
                <div className="flex items-center relative -space-x-2">
                  <div className="border-border bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    AG
                  </div>
                  <div className="border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <div className="border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <TeamMembersDropdown />
                </div>
              </div>
              {/* Card status  */}
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Card status
                </h6>
                <div className="flex items-center gap-2">
                  <div className="min-w-max px-3 py-1 2xl:text-base text-sm rounded-full bg-secondary-dark">
                    Delivered by Adam on Sep 20, 2024
                  </div>
                  <div>
                    <CardStatusDropdown />
                  </div>
                </div>
              </div>
            </div>
            {/* Edit Content  */}
            <div className="bg-background rounded 2xl:p-8 p-4 flex items-stretch justify-between  2xl:gap-24 gap-20">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col justify-between h-full w-full"
              >
                <div>
                  <h4 className="2xl:text-[32px] leading-tight text-2xl font-semibold text-foreground capitalize">
                    Describe market size for your startup
                  </h4>
                  <p className="2xl:text-2xl text-sm 2xl:mt-4 mt-2">
                    120 Letter max
                  </p>
                </div>
                <div>
                  <div>
                    <textarea
                      {...register("marketSize")}
                      className="resize-none max-h-16 overflow-auto 2xl:text-[28px] text-base 2xl:leading-8 leading-5 text-foreground border-b border-muted-foreground pb-2  focus:outline-none w-full"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse ultrices interdum orci, at sagittis elit
                      porttitor. Suspendisse ultrices interdum orci, at sagittis
                      elit porttitor.
                    </textarea>
                    <InputError error={errors.marketSize} />
                  </div>
                  <div className="flex items-center 2xl:gap-8 gap-6 2xl:mt-8 mt-6 w-1/2">
                    <Button variant="outline" className="rounded 2xl:px-9 px-6">
                      Discard
                    </Button>
                    <Button type="submit" className="rounded px-10">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
              <div className="bg-background 2xl:min-w-[328px] min-w-[260px] 2xl:h-[378px] h-[300px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
                <div className="flex items-center justify-between 2xl:gap-4 gap-2">
                  <h6 className="uppercase 2xl:text-base text-sm font-medium ">
                    Market Research
                  </h6>
                  <div className="flex items-center 2xl:gap-3 gap-2">
                    <MarketResearchChartEditModal />
                    <ReloadButton/>
                  </div>
                </div>
                <div>
                  <MarketResearchChart />
                </div>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex items-start justify-between 2xl:gap-10 gap-6">
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Community interaction
                </h6>
                <div className="flex items-center 2xl:gap-10 gap-6">
                  <ProgressBar icon="🏆" value="20" />
                  <div className="flex items-center relative 2xl:-space-x-2 -space-x-[6px]">
                    <div className=" border-border  bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                      AG
                    </div>
                    <div className="border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                      VH
                    </div>
                    <div className="border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                      VH
                    </div>
                    <div className="border-border bg-background 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                      <Plus className="text-foreground" />
                    </div>
                  </div>
                  <MessageCircleMore className="text-info" />
                </div>
              </div>
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Task action
                </h6>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="xs"
                    className="2xl:text-lg text-sm border-[#EE8204] text-[#EE8204]"
                  >
                    Force validation
                  </Button>
                  <Button
                    variant="outline-info"
                    size="xs"
                    className="2xl:text-lg text-sm"
                  >
                    Publish this task
                  </Button>
                  <div>
                    <TaskActionDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
