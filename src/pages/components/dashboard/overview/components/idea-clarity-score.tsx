import { Button } from "@/components/_ui/button";
import { DialogHeader } from "@/components/_ui/dialog";
// import { GaugeMeter } from "@/pages/components/common/gauge-meter";
import { DialogTitle } from "@radix-ui/react-dialog";

export function IdeaClarityScore({ setSelectStep }: { setSelectStep: any, data: any }) {

    return (
        <>
            <DialogHeader>
                <DialogTitle className="font-semibold text-lg text-center">
                    Idea clarity score
                </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center md:gap-10 gap-5 text-center">
                {/* <GaugeMeter score={data?.score || 0} description={data?.description || ''} color={data?.color || ''} /> */}
                <p className="md:text-sm text-xs">
                    Your startup idea has been evaluated based on four key validation
                    points: Proof of the Problem, Solution Effectiveness, Identification
                    of Targeted Audience, and Direct Competitors.
                    <br />
                    <br />
                    Each validation point was scored on a scale from 1 (Low Risk) to 4
                    (High Risk). The total score determines the overall risk level of
                    your idea.
                </p>
            </div>
            <div className="w-full justify-center flex mt-4">
                <Button variant="outline" className="md:w-1/2 w-auto " onClick={() => setSelectStep(1)}>
                    <span className="md:text-sm text-xs">
                        View and edit <br className="sm:hidden block" />
                        evaluation model answers
                    </span>
                </Button>
            </div>
        </>
    )
}