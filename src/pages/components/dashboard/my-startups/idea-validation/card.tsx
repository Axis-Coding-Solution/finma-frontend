import { ColorLoader } from "@/assets/svgs";
import { Check, X } from "lucide-react";
import { IdeaValidationCardEditModal } from "./edit-modal";
import { ReloadButton } from "@/components/ui";
import { useState } from "react";
import ReloadSvg from "./reloadSvg";

interface IdeaValidationCardProps {
  name: "problem" | "solution";
  heading: string;
  subHeading: string;
  detail: string;
  validation: string;
  image: string;
  data: any;
}

export const IdeaValidationCard: React.FC<IdeaValidationCardProps> = ({
  name,
  heading,
  validation,
  image,
  data,
}) => {

const [reloadScore,setReloadScore] = useState(false)
const validationResponses = data?.response?.validation || {};

const validationData = [
  validationResponses.urgency ,
  validationResponses.relevance ,
  validationResponses.evidence,
];
  return (
    <div className="bg-info-light 2xl:p-8 p-4 rounded grid grid-cols-12 md:gap-10 gap-6 items-stretch">
      <div className="md:order-1 order-2 md:col-span-9 col-span-12 bg-background 2xl:p-8  p-4 rounded flex sm:flex-row flex-col 2xl:gap-24 md:gap-12 gap-6 items-center justify-between">
        <div className="flex flex-col gap-4 justify-between h-full w-full">
          <h4 className="2xl:text-[32px] md:text-2xl text-xl font-semibold text-foreground capitalize">
            The {heading}
          </h4>
          <div className="2xl:text-2xl text-base 2xl:leading-7 leading-5 text-foreground border-b border-muted-foreground pb-2 ">
            <span className="text-muted-text">{data?.question ?? "Edit to Start"}</span>
          </div>
        </div>
        <div className="bg-background 2xl:min-w-[305px] sm:min-w-[255px] min-w-max rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
          <div className="flex items-center justify-between 2xl:gap-4 gap-2">
            <h6 className="uppercase 2xl:text-base text-sm font-medium ">
              The {validation} Validation
            </h6>
            {name === "problem" ? <ReloadButton setReloadScore={setReloadScore} /> : <ReloadButton  setReloadScore={setReloadScore} />}
          </div>
          <div className="flex items-center 2xl:gap-4 gap-2">
            {/* <img src={ColorLoader} className={`2xl:w-20 w-14 ${reloadScore ?"animate-spin":"animate-none"}`} /> */}
            <ReloadSvg validationData={validationData}/>
            <span className="2xl:text-base text-sm flex flex-col gap-1 font-medium leading-[18px]">
              The {validation} score{" "}
              <span className="2xl:text-xl text-lg font-bold">
                {data?.response?.score ?? 0}/10
              </span>
            </span>
          </div>
          <ul className="flex flex-col 2xl:gap-7 gap-3">
            <li className="2xl:text-xl text-sm flex items-center gap-2">
              {data?.response?.validation?.urgency ? (
                <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
              ) : (
                <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
              )}
              Urgency
            </li>
            <li className="2xl:text-xl text-sm flex items-center gap-2">
              {data?.response?.validation?.relevance ? (
                <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
              ) : (
                <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
              )}
              Relevance
            </li>
            <li className="2xl:text-xl text-sm flex items-center gap-2">
              {data?.response?.validation?.evidence ? (
                <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
              ) : (
                <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
              )}
              Evidence
            </li>
          </ul>
        </div>
      </div>
      <div className="md:order-2 order-1 md:col-span-3 col-span-12 flex md:justify-end justify-start items-center relative">
        <div className="absolute top-0 right-0">
          <IdeaValidationCardEditModal name={name} data={data} />
        </div>
        <figure className="md:w-64 w-32">
          <img src={image} className="" alt="" />
        </figure>
      </div>
    </div>
  );
};
