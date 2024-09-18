import { MessageCircleMore, Plus } from "lucide-react"
import { ProgressBar } from "../../common"

export const CommunityInteraction= ()=>{
    return(
        <div className="flex flex-col 2xl:gap-2 gap-1">
        <h6 className="text-foreground 2xl:text-base text-sm font-medium">
          Community interaction
        </h6>
        <div className="flex items-center 2xl:gap-10 gap-6">
          <ProgressBar icon="😍" value="20" />
          {/* <ProgressBar icon="🏆" value="20" /> */}
          <div className="flex items-center relative -space-x-[6px]">
            <div className="border bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
              AG
            </div>
            <div className="border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
            <div className="border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
            <div className="border bg-background 2xl:min-w-10 2xl:h-10 w-6 h-6 2xl:text-base text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
              <Plus className="text-foreground" />
            </div>
          </div>
          <MessageCircleMore className="text-info" />
        </div>
      </div>
    )
}