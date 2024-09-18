import { useState } from "react";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { MainHeading } from "@/pages/components/common";
import {
  PrivacyPolicyTab,
  TermsConditionsTab,
  Tabs,
  TermsAndConditionsForm,
} from "@/pages/components/onboarding/terms-conditions";
import { X } from "lucide-react";

const tabs = [<TermsConditionsTab />, <PrivacyPolicyTab />];

const TermsAndConditionsPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="2xl:w-[1084px] w-auto xl:mx-0 mx-5">
      <div className=" bg-info-light rounded-lg 2xl:py-[52px] py-6 lg:px-20 md:px-10 px-4 flex flex-col justify-between items-center  relative">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
        >
          <X />
        </button>
        <div className="container bg-background rounded-xl p-5">
          <MainHeading
            title="Review and accept our Terms and Privacy Policy"
            subtitle="To join FinmaAI, please review and accept our Service Terms and Privacy Policy to ensure you understand how we operate and protect your information."
          />
          <Tabs tab={tab} setTab={setTab} />
          <ScrollArea className="border border-border rounded-lg shadow h-[350px]">
            {tabs[tab]}
          </ScrollArea>
          <TermsAndConditionsForm />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
