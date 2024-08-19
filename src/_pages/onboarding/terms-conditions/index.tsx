import { useState } from "react";
import { ScrollArea } from "@/components/_ui/scroll-area";
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
    <div className="container bg-background rounded-xl p-5">
      <MainHeading
        heading="Review and accept our Terms and Privacy Policy"
        paragraph="To join FinmaAI, please review and accept our Service Terms and Privacy Policy to ensure you understand how we operate and protect your information."
      />
      <Tabs tab={tab} setTab={setTab} />
      <ScrollArea className="border border-border rounded-lg shadow h-[350px]">
        {tabs[tab]}
      </ScrollArea>
      <TermsAndConditionsForm />
    </div>
  );
};

export default TermsAndConditionsPage;
