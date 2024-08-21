import { Button, FloatingInput, RadioButton } from "@/components/ui";
import { CheckboxGroup } from "@/pages/components/common";
import { X } from "lucide-react";
import { useState } from "react";
import {
  ProfileAbstract1,
  ProfileAbstract2,
  ProfileAbstract3,
  ProfileAbstract4,
  ProfileAvatar,
  ProfileChatMentor,
} from "@/assets/svgs";
import { Link } from "react-router-dom";

// const countryOptions = [
//   { value: "us", label: "United States" },
//   { value: "ca", label: "Canada" },
//   { value: "mx", label: "Mexico" },
// ];
const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  const changeCircle = (step: any) => {
    if (currentStep >= step) {
      return "bg-info";
    }
    return "bg-light-gray";
  };
  return (
    <div className="w-[1084px] bg-info-light rounded-lg p-8 flex justify-between items-stretch gap-8">
      <div className="w-full flex flex-col gap-5 justify-between">
        <div className="flex flex-col">
          <h2 className="text-[44px] font-semibold leading-[50px]">
            {currentStep === 1 && <>You will receive our support!</>}
            {currentStep === 2 && <>You will receive our community!</>}
            {currentStep === 3 && <>World development modules</>}
            {currentStep === 4 && <>You will receive our community!</>}
          </h2>
          <div className="flex justify-end">
            <img src={ProfileChatMentor} />
          </div>
        </div>
        <figure className="flex justify-center">
          {currentStep === 1 && (
            <img src={ProfileAbstract1} alt="Profile-abstract" />
          )}
          {currentStep === 2 && (
            <img src={ProfileAbstract2} alt="Profile-abstract" />
          )}
          {currentStep === 3 && (
            <img src={ProfileAbstract3} alt="Profile-abstract" />
          )}
          {currentStep === 4 && (
            <img src={ProfileAbstract4} alt="Profile-abstract" />
          )}
        </figure>
        <div className="px-2 py-1 rounded-full bg-background flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${changeCircle(1)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(2)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(3)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(4)}`}></div>
        </div>
      </div>
      <div className="min-w-[532px] bg-background rounded p-[52px] pb-8 flex flex-col gap-[52px] relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <Link to="/auth/sign-up">
            <X />
          </Link>
        </button>
        <div className="rounded bg-info-light h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <h3 className="text-[44px] font-medium">Create your profile</h3>
        {currentStep === 1 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center  gap-6">
              <div className="min-w-20 h-20 rounded-full border border-foreground flex justify-center items-center">
                <img src={ProfileAvatar} className="w-auto" />
              </div>
              <Button variant="secondary-dark" className="w-full">
                Choose photo
              </Button>
            </div>
            <FloatingInput type="text" label="First name" />
            <FloatingInput type="text" label="Last name" />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <p className="text-foreground text-2xl leading-7">
              Subtitle something text
            </p>
            <div className="flex flex-col gap-6 mt-10">
              <FloatingInput type="text" label="Select country" />
              <FloatingInput type="text" label="Select city" />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <p className="text-foreground text-2xl leading-7">
              Select your entrepreneurial stage
            </p>
            <div className="flex flex-col gap-8 mt-10 h-[240px] py-4">
              <RadioButton
                label="Legal"
                id="select-legal"
                size="sm"
                color="warning"
              />
              <RadioButton
                label="Legal"
                id="select-legal"
                size="sm"
                color="warning"
              />
              <RadioButton
                label="Legal"
                id="select-legal"
                size="sm"
                color="warning"
              />
              <RadioButton
                label="Legal"
                id="select-legal"
                size="sm"
                color="warning"
              />
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <p className="text-foreground text-2xl leading-7">
              Select your community goals
            </p>
            <div className="flex flex-col gap-8 mt-10 h-[240px] overflow-y-auto py-4">
              <CheckboxGroup label="Networking with other founders" />
              <CheckboxGroup label="Seeking mentorship" />
              <CheckboxGroup label="Gaining market insights" />
              <CheckboxGroup label="Learning new skills" />
              <CheckboxGroup label="Learning new skills" />
              <CheckboxGroup label="Learning new skills" />
            </div>
          </div>
        )}
        <div className="flex items-center gap-8 mt-10">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="w-full"
          >
            Go back
          </Button>
          <Button
            className="w-full"
            onClick={handleNext}
            disabled={currentStep === 4}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
