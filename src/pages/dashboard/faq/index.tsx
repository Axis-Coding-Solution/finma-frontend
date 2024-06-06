import { MainHeading } from "@/pages/components/common";
import AboutBanner from "@/assets/images/about-banner.png";

const AboutPage = () => {
  return (
    <>
      <MainHeading heading="FAQ" />
      <img src={AboutBanner} />
      <MainHeading
        heading="How it works"
        paragraph="After a short, AI-assisted questionnaire that delves into their business concept, target market, product or service details, and your team's expertise, you’ll get your first Risk Score to help you validate your idea. You will receive a personalized report with actionable recommendations to build a solid execution and sales plan, propelling your business forward. "
      />
      <MainHeading
        heading="Expert evaluation"
        paragraph="Our network of industry veterans, including ex-founders, consultants, investors, analysts, and advisors, will leverage AI insights to review the idea and provide real-world feedback. "
      />
    </>
  );
};

export default AboutPage;
