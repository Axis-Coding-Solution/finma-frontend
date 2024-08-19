import { Button } from "@/components/_ui/button";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <CircleX size={96} className="text-red-400" />
      <h2 className="text-4xl font-bold">Error Page Not Found! (404)</h2>
      <Button className="mt-5" tag={Link} to="/" variant="dark">
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
