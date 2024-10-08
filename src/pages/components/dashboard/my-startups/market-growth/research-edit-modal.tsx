import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  InputError,
  ReloadButton,
} from "@/components/ui";
import { SquarePen } from "lucide-react";
import { MarketResearchChart } from "./research-chart";
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
import {
  useAddMarketResearchProject,
  MARKET_RESEARCH_QUERY_KEY,
  STARTUP_CARD_STATUS_MUTATION_KEY,
} from "@/api/hooks/dashboard";
import { errorToast, successToast } from "@/utils";
import { CommunityInteraction } from "../community-interaction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MarketResearchCardEditModal = ({ data }: { data: any }) => {
  const { id: projectId } = useParams();
  const modal = useModal();
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddMarketResearchProject();
  const [reloadChart, setReloadChart] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: MarketResearchEditModalInitialValues,
    resolver: yupResolver(MarketResearchEditModalSchema as any),
  });

  useEffect(() => {
    if (data) {
      setValue("description", data?.description);
    }
  }, [data]);
  // Handle form submission
  const onSubmitHandler = async (values: any) => {
    try {
      const res = await mutateAsync({
        description: values.description,
        type: "marketSize",
        projectId,
      });
      queryClient.invalidateQueries({ queryKey: [MARKET_RESEARCH_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [MARKET_RESEARCH_QUERY_KEY, projectId],
      });
      queryClient.refetchQueries({
        queryKey: [STARTUP_CARD_STATUS_MUTATION_KEY],
      });
      successToast(res.message);
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const handleDiscard = () => {
    setValue("description", data?.description);
  };

  return (
    <>
      <Dialog open={modal.show} onOpenChange={modal.setShow}>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2 items-center  bg-foreground 2xl:px-6 px-4 2xl:py-2 py-1 text-background 2xl:rounded rounded-md 2xl:text-2xl text-base ">
              <SquarePen size={20} className="2xl:text-2xl text-base" />
              <span className="">Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="bg-info-light xl:min-w-[1084px] min-w-[90%] 2xl:py-[52px] py-6 2xl:px-8 px-4">
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {/* Team member & Card Status */}
            <div className="flex sm:flex-row flex-col items-start 2xl:gap-10 sm:gap-6 gap-4">
              {/* Team Members  */}
              <TeamMembersDropdown type="marketResearch" id={data?._id} />
              {/* Card status  */}
              <CardStatusDropdown
                type="marketResearch"
                id={data?._id}
                addedStatus={data?.cardStatus}
              />
            </div>
            {/* Edit Content  */}
            <div className="bg-background rounded 2xl:p-8 p-4  flex md:flex-row flex-col items-stretch justify-between  2xl:gap-24  lg:gap-20 sm:gap-10 gap-6">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col gap-4 justify-between h-full w-full"
              >
                <div>
                  <h4 className="2xl:text-[32px] leading-tight md:text-2xl text-lg font-semibold text-foreground capitalize">
                    Describe market size for your startup
                  </h4>
                  <p className="2xl:text-2xl md:text-sm text-xs 2xl:mt-4 mt-2">
                    120 Letter max
                  </p>
                </div>
                <div>
                  <div>
                    <textarea
                      {...register("description")}
                      className="resize-none 2xl:max-h-20 max-h-16 overflow-auto 2xl:text-[24px] text-base 2xl:leading-7 leading-5 text-foreground border-b border-muted-foreground pb-2  focus:outline-none w-full"
                    />
                    <InputError error={errors.description} />
                  </div>
                  <div className="grid md:grid-cols-3 grid-cols-1  items-center 2xl:gap-8 sm:gap-6 gap-2 2xl:mt-8 mt-6">
                    <Button
                      type="button"
                      onClick={handleDiscard}
                      variant="outline"
                      className="rounded w-full"
                    >
                      Discard
                    </Button>
                    <Button type="submit" className="rounded w-full">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
              <div className="bg-background 2xl:min-w-[328px] md:min-w-[260px] min-w-full 2xl:h-[378px] h-[300px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
                <div className="flex items-center justify-between 2xl:gap-4 gap-2">
                  <h6 className="uppercase 2xl:text-base text-sm font-medium ">
                    Market Research
                  </h6>
                  <div className="flex items-center 2xl:gap-3 gap-2">
                    <MarketResearchChartEditModal
                      marketResearchId={data?._id}
                      data={data?.graphValues}
                    />
                    <ReloadButton setReloadScore={setReloadChart} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <MarketResearchChart
                    reloadChart={reloadChart}
                    data={data?.graphValues}
                  />
                </div>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex sm:flex-row flex-col items-start justify-between 2xl:gap-10 sm:gap-6 gap-4">
              <CommunityInteraction />
              <TaskActionDropdown
                type="marketResearch"
                id={data?._id}
                addedTasks={data?.taskAction}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
