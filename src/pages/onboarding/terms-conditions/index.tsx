import { useState } from "react";
import { MainHeading } from "@/pages/components/common";
import {
  PrivacyPolicyTab,
  TermsConditionsTab,
  Tabs,
  TermsAndConditionsForm,
} from "@/pages/components/onboarding/terms-conditions";

const tabs = [<TermsConditionsTab />, <PrivacyPolicyTab />];

const TermsAndConditionsPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-[1084px] bg-secondary rounded-lg 2xl:p-8 md:p-6 p-4">
      <div className="container bg-background rounded-xl 2xl:p-5 p-4 flex flex-col 2xl:gap-8 gap-4">
        <MainHeading
          title="Review and accept our Terms and Privacy Policy"
          subtitle="To join FinmaAI, please review and accept our Service Terms and Privacy Policy to ensure you understand how we operate and protect your information."
        />
        <Tabs tab={tab} setTab={setTab} />
        <div className="border border-border  rounded overflow-hidden">
          <div className=" 2xl:h-[250px] h-[200px] overflow-hidden">
            {tabs[tab]}
          </div>
        </div>
        <TermsAndConditionsForm />
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
