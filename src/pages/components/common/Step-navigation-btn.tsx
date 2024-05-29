import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type PropTypes = {
    nextStep?: string,
    showNextStep?: boolean,
    prevStep?: string,
    showPrevStep?: boolean
}

export const StepNavigationBtn = (props: PropTypes) => {
    const { nextStep = '#', prevStep = '#', showNextStep = true, showPrevStep = true } = props
    return (
        <div className={ showPrevStep ? 'flex justify-between items-center': 'flex justify-end items-center'}>
            {showPrevStep && <Link to={prevStep} >
                <Button variant="outline">Back</Button>
            </Link>}
            {showNextStep && <Link to={nextStep}>
                <Button variant="default">Next</Button>
            </Link>}
            {
                showNextStep || <Link to={nextStep}>
                    <Button variant="default">Finish</Button>
                </Link>
            }
        </div>
    )
}