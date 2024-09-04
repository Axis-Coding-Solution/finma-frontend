import { Button } from "@/components/_ui/button";
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
const UnderConstruction = () => {
  return (
<div className="flex flex-col gap-2 justify-start items-center h-full">
      <Construction size={96} className="text-amber-500" />
      <h2 className="text-4xl font-bold">Under Construction</h2>
      <Button className="mt-5" tag={Link} to="/dashboard/community" variant="dark">Go Back</Button>
    </div>  )
}

export default UnderConstruction