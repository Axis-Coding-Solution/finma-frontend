import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const StepNavigationBtn = () => {
    return (
        <div className="flex justify-between items-center">
            <Link to="/onboarding/idea-clarity/solution">
                <Button variant="outline">Back</Button>
            </Link>
            <Link to="/">
                <Button variant="default">Next</Button>
            </Link>
        </div>
    )
}