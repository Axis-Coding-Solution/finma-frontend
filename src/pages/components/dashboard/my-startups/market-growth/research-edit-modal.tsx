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
import { useAddMarketResearchProject, MARKET_RESEARCH_QUERY_KEY  } from "@/api/hooks/dashboard";
import {  errorToast, successToast } from "@/utils";
import { CommunityInteraction } from "../community-interaction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MarketResearchCardEditModal = ({ data }: { data: any }) => {


  const { id: projectId } = useParams();
  const modal = useModal();
  const queryClient = useQueryClient();
  const [response, setResponse] = useState<any>(null);
  const { mutateAsync } = useAddMarketResearchProject();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: MarketResearchEditModalInitialValues,
    resolver: yupResolver(MarketResearchEditModalSchema as any),
  });

  useEffect(() => {
    if (data) {
      setValue( data?.question, { shouldValidate: true });
      setResponse(data?.response);
    }
  }, [data]);
  // Handle form submission
  const onSubmitHandler = async (values: any) => {
    console.log("values",values)
    try {
      const res = await mutateAsync({
        description: values,
        type:"marketSize",
        graphValues:"",
        projectId,
      });
      queryClient.invalidateQueries({ queryKey: [MARKET_RESEARCH_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [MARKET_RESEARCH_QUERY_KEY, projectId],
      });
      successToast(res.message);
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
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
              <TeamMembersDropdown />
              {/* Card status  */}
              <CardStatusDropdown />
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
                    <ReloadButton />
                  </div>
                </div>
                <div>
                  <MarketResearchChart />
                </div>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex items-start justify-between 2xl:gap-10 gap-6">
              <CommunityInteraction />
              <TaskActionDropdown />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
