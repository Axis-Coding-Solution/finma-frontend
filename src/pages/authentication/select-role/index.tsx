import arrowImgPath from "@/assets/images/arrow-pic-2.png";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { errorToast } from "@/utils";
import { post } from "@/utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectRolePage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const startOnboarding = async (role: string) => {
    try {
      setIsLoading(true);
      await post("/public/common/save-role", { role });
      navigate("/auth/sign-up");
    } catch (error) {
      errorToast("Unable to proceed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-background rounded-lg flex justify-center items-center">
      <div className="lg:w-[60%] md:w-[80%] md:gap-14 gap-4 relative md:py-20 py-10 md:px-6 px-4 2xl:mt-10 xl:mt-10 flex md:flex-row flex-col ">
        <div className="relative lg:w-52 w-40">
          <img
            src={arrowImgPath}
            alt="Arrow Icon"
            className="-top-12 left-20 md:absolute block  lg:w-52 md:w-40 w-20 md:rotate-0 rotate-90"
          />
        </div>
        <div>
          <MainHeading
            heading="Welcome to the Finma community"
            paragraph="Share your expertise with hundreds of innovators"
          />
          <p>Select a partnership</p>
          <div className="mt-5 flex flex-col justify-center items-center md:justify-start md:items-start sm:flex-row md:gap-5">
            <Button
              title="Start Onboarding"
              onClick={() => startOnboarding("expert")}
              variant="outline-secondary"
              disabled={isLoading}
            >
              Expert
            </Button>

            <Button
              title="Start Onboarding"
              onClick={() => startOnboarding("mentor")}
              variant="outline-secondary"
              disabled={isLoading}
            >
              Mentor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectRolePage;
