import { ColorLoader, IdeaValidationProblemInfo } from "@/assets/svgs";
import { Check,  RefreshCcw, X } from "lucide-react";
import React from "react";
import { IdeaValidationCardEditModal } from "./edit-modal";

interface IdeaValidationCardProps{
    heading:string;
    subHeading:string;
    detail:string;
    validation:string;
    image:string;
}

export const IdeaValidationCard:React.FC<IdeaValidationCardProps> = ({heading,subHeading,detail, validation,image}) => {
  return (
    <div className="bg-info-light 2xl:p-8 p-6 rounded grid grid-cols-12 gap-10 items-stretch">
      <div className="col-span-9 bg-background 2xl:p-8 p-6 rounded flex 2xl:gap-24 gap-12 items-center justify-between">
        <div className="flex flex-col justify-between h-full">
          <h4 className="2xl:text-[32px] text-2xl font-semibold text-foreground capitalize">
            The {heading}
          </h4>
          <p className="2xl:text-[28px] text-lg 2xl:leading-8 leading-6 text-foreground">
           {subHeading}
            <span className="text-muted-text">
             {detail}
            </span>
          </p>
        </div>
        <div className="bg-background 2xl:min-w-[305px] min-w-[255px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
          <div className="flex items-center justify-between 2xl:gap-4 gap-2">
            <h6 className="uppercase 2xl:text-base text-sm font-medium ">The {validation} Validation</h6>
            <RefreshCcw size={20} className="text-info" />
          </div>
          <div className="flex items-center 2xl:gap-4 gap-2">
            <img src={ColorLoader} className="2xl:w-20 w-14" />
            <span className="2xl:text-base text-sm flex flex-col gap-1 font-medium leading-[18px]">
              The Problem score{" "}
              <span className="2xl:text-xl text-lg font-bold">7/10</span>
            </span>
          </div>
          <ul className="flex flex-col 2xl:gap-7 gap-4">
            <li className="2xl:text-xl text-base flex items-center gap-2">
              <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
              Urgency
            </li>
            <li className="2xl:text-xl text-base flex items-center gap-2">
              <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
              Relevance
            </li>
            <li className="2xl:text-xl text-base flex items-center gap-2">
              <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
              Relevance
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center relative">
        <div className="absolute top-0 right-0">
          <IdeaValidationCardEditModal/>
        </div>
        <figure className="w-64">
            <img src={image} className="" alt="" />
        </figure>
      </div>
    </div>
  );
};
