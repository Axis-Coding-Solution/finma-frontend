import { Button } from "@/components/_ui/button";
import { Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";
const UnderConstruction = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.state.idx > 0) {
      return navigate(-1);
    }
    return navigate("/dashboard/community");
  };

  return (
    <div className="flex flex-col gap-2 justify-start items-center h-full">
      <Construction size={96} className="text-amber-500" />
      <h2 className="text-4xl font-bold">Under Construction</h2>
      <Button className="mt-5" onClick={handleGoBack} variant="dark">
        Go Back
      </Button>
    </div>
  );
};

export default UnderConstruction;
