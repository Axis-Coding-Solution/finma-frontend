import { StartupIdeaValidation } from "@/assets/svgs";

export const StartupTimelineCard = () => {
  return (
    <div className="bg-info-light p-5 rounded">
      <div className="bg-background rounded py-5 px-3">
        <h4 className="text-foreground text-[32px] font-semibold leading-[30px]">
          Idea validation
        </h4>
        <span className="text-muted-text text-lg leading-6">
          This module focuses on proofing your Problem & Solution fit
        </span>
        <div className="flex items-start gap-4">
          <span className="text-muted-text text-lg leading-6">
            before getting invested further in the process. We can’t highlight
            enough about the criticality of this module.
          </span>
          <figure className="w-48 h-48">
            <img src={StartupIdeaValidation} className="w-auto" alt="" />
          </figure>
        </div>
        <div>
            <div className="py-1 px-6 text-foreground rounded-full max-w-max text-lg bg-secondary-dark">Tasks Completed</div>
        </div>
      </div>
    </div>
  );
};
