import { ArrowRight } from "lucide-react"
type PropTypes = {
    badge: string;
    title: string;
    description: string;
  };
function IdeaClarityCard({ badge, title, description }: PropTypes) {
  return (
    <div className="bg-background rounded-2xl p-4 text-foreground">
            <div className="flex items-center gap-1">
              <span className="bg-[#5EB650] text-white text-sm px-2 py-1 rounded-full">
                {badge}
              </span>
              <div className=" bg-[#EDF9F1] rounded-full p-1">
                <ArrowRight className="text-xs text-[#5EB650] -rotate-45" />
              </div>
            </div>
            <h6 className="text-lg font-semibold mt-3">{title}</h6>
            <p className="text-base mt-4 pb-5">{description}</p>
          </div>
  )
}

export default IdeaClarityCard