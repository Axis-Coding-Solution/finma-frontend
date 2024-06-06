import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type PropTypes = {
  finalPath?: string;
  showNextStep?: boolean;
  prevStep?: string;
  showPrevStep?: boolean;
};

export const StepNavigationBtn = (props: PropTypes) => {
  const { prevStep = "#", showNextStep = true, showPrevStep = true } = props;
  return (
    <div
      className={
        showPrevStep
          ? "flex justify-between items-center"
          : "flex justify-end items-center"
      }
    >
      {showPrevStep && (
        <Link to={prevStep}>
          <Button variant="outline">Back</Button>
        </Link>
      )}
      {showNextStep && (
        <Button type="submit" variant="default">
          Next
        </Button>
      )}
      {showNextStep || (
        <Button type="submit" variant="default">
          Finish
        </Button>
      )}
    </div>
  );
};
