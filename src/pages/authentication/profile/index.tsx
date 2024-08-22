import { Button } from "@/components/ui";
import { X } from "lucide-react";
import { useState } from "react";
import {
  ProfileAbstract1,
  ProfileAbstract2,
  ProfileAbstract3,
  ProfileAbstract4,
  ProfileChatMentor,
} from "@/assets/svgs";
import { Link } from "react-router-dom";
import {
  ProfileCommunity,
  ProfileCountry,
  ProfileEntrepreneurial,
  ProfileName,
} from "@/pages/components/profile";

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
      <div className="w-full flex flex-col 2xl:gap-5 gap-4 justify-between">
        <div className="flex flex-col">
          <h2 className="2xl:text-[44px] text-4xl font-semibold 2xl:leading-[50px] leading-[42px]">
            {currentStep === 1 && <>You will receive our support!</>}
            {currentStep === 2 && <>You will receive our community!</>}
            {currentStep === 3 && <>World development modules</>}
            {currentStep === 4 && <>You will receive our community!</>}
          </h2>
          <div className="flex justify-end">
            <img src={ProfileChatMentor} className="2xl:w-auto w-[240px]" />
          </div>
        </div>
        <figure className="flex justify-center">
          {currentStep === 1 && (
            <img
              src={ProfileAbstract1}
              className="2xl:w-auto w-[80%]"
              alt="Profile-abstract"
            />
          )}
          {currentStep === 2 && (
            <img
              src={ProfileAbstract2}
              className="w-auto"
              alt="Profile-abstract"
            />
          )}
          {currentStep === 3 && (
            <img
              src={ProfileAbstract3}
              className="2xl:w-auto w-[70%]"
              alt="Profile-abstract"
            />
          )}
          {currentStep === 4 && (
            <img
              src={ProfileAbstract4}
              className="2xl:w-auto w-[70%]"
              alt="Profile-abstract"
            />
          )}
        </figure>
        <div className="px-2 py-1 rounded-full bg-background flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${changeCircle(1)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(2)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(3)}`}></div>
          <div className={`w-4 h-4 rounded-full ${changeCircle(4)}`}></div>
        </div>
      </div>
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-8 pb-8 flex flex-col justify-between 2xl:gap-[52px] gap-6 relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <Link to="/auth/sign-up">
            <X />
          </Link>
        </button>
        <div className="rounded bg-info-light h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <h3 className="2xl:text-[44px] text-4xl font-medium">
          Create your profile
        </h3>
        {currentStep === 1 && <ProfileName />}
        {currentStep === 2 && <ProfileCountry />}
        {currentStep === 3 && <ProfileEntrepreneurial />}
        {currentStep === 4 && <ProfileCommunity />}
        <div className="flex items-center gap-8 mt-10 ">
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
