import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const GoBack = ()=>{
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate(-1);
    }
    return(
        <button
        onClick={handleBack}
        className="flex items-center 2xl:text-xl text-base font-medium text-foreground 2xl:gap-2 gap-1"
      >
        <ChevronLeft className="-ml-1 2xl:w-5 w-4" />
        Go Back
      </button>
    )
} 