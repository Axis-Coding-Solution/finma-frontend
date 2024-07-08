import arrowImgPath from "@/assets/images/arrow-pic-2.png";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

function SelectRolePage() {
  return (
    <div className="bg-background  rounded-lg  flex justify-center items-center">
      <div className="lg:w-[60%] md:w-[80%] md:gap-10 gap-4 relative md:py-20 py-10 md:px-6 px-4 2xl:mt-10 xl:mt-10 flex md:flex-row flex-col ">
        <div className="relative lg:w-52 w-40">
          <img
            src={arrowImgPath}
            alt="Arrow Icon"
            className="-top-12 left-20 md:absolute block  lg:w-52 md:w-40 w-20 md:rotate-0 rotate-90"
          />
        </div>
        <div className=" mt-5">
          <MainHeading
            heading="Welcome to the Finma community"
            paragraph="Share your expertise with hundreds of innovators "
          />
          <MainHeading heading="" paragraph="Select a partnership" />

          <div className="flex flex-col justify-center items-center md:justify-start   md:items-start sm:flex-row md:gap-2">
            <Link title="Start Onboarding" to="/onboarding/innovators">
              <Button variant="outline" className="mt-5 w-32">
                Innovator
              </Button>
            </Link>
            <Link title="Start Onboarding" to="/onboarding/experts">
              <Button variant="outline" className="mt-5 w-32 ">
                Expert
              </Button>
            </Link>

            <Link title="Start Onboarding" to="/onboarding/mentors">
              <Button variant="outline" className="mt-5 w-32">
                Mentor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectRolePage;
