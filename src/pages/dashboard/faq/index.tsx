import { MainHeading } from "@/pages/components/common";
import { ArrowLong } from "@/assets/svgs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/_ui/accordion";

const AboutPage = () => {
  return (
    <>
      <div className="bg-muted rounded-lg p-6 flex flex-col gap-4">
        <div className="relative">
          <MainHeading
            title="How it works"
            subtitle="After a short, AI-assisted questionnaire that delves into their business concept, target market, product or service details, and your team's expertise, you’ll get your first Risk Score to help you validate your idea. You will receive a personalized report with actionable recommendations to build a solid execution and sales plan, propelling your business forward. "
          />
          <img
            className="md:w-32 w-20 sm:block hidden absolute md:top-0 top-2 md:left-60 left-52"
            src={ArrowLong}
          />
        </div>
        <MainHeading
          title="Expert evaluation"
          subtitle="Our network of industry veterans, including ex-founders, consultants, investors, analysts, and advisors, will leverage AI insights to review the idea and provide real-world feedback. "
        />
      </div>
      {/* Accordion Section  */}
      <div>
        <Accordion
          type="single"
          defaultValue="item-1"
          className="transition flex flex-col gap-3"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>How to become a mentor?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What kind of support does FinmaAI provide?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do i contact support?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AboutPage;
