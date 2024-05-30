
import editNote from "@/assets/svgs/edit-note.svg"
import { Button } from "@/components/ui/button"
import { MainHeading } from "@/pages/components/common"
import { Link } from "react-router-dom"

function IdeaClarityCompletedPage() {
    return (
        <div className="py-10 flex justify-start items-center">
            <div className=" w-[80%]">
                <img src={editNote} alt="" className="w-20 h-20 mb-4" />
                <MainHeading
                    heading='You’re ready go.' paragraph='Based on your inputs, our AI model will analyze and calculate the overall risk and potential of your idea. Click the button below to see your evaluation results.' />
                <Link to='/risk-score'>
                    <Button variant="default" className="mt-4">Get Your Risk Score</Button>
                </Link>
            </div>
        </div>
    )
}

export default IdeaClarityCompletedPage