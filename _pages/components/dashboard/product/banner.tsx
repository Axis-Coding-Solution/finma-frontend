import { BulbBannerImg, UnderlineVector } from "@/assets/svgs";
import { ArrowRight } from "lucide-react";
export const ProductBanner = () => {
  return (
    <div className="bg-[#6F6FEA] flex md:flex-row flex-col md:items-center items-start gap-6 p-6 rounded-lg 2xl:pr-32">
      <img src={BulbBannerImg} alt="" className="h-32" />
      <div className="flex flex-col gap-6 text-background">
        <div className="relative">
          <h4 className="text-2xl font-semibold ">
            Launch your product and get{" "}
            <span className="relative">
              community feedback
              <img
                src={UnderlineVector}
                alt=""
                className="absolute w-60 right-0"
              />
            </span>
          </h4>
        </div>
        <p className="text-sm font-normal">
          This section helps you launch your product effectively and gather
          valuable feedback from the community. Here, you'll find constructive
          criticism, support, and actionable advice to enhance your offering.
        </p>
        <div className="text-sm flex flex-wrap items-center gap-2 whitespace-nowrap">
          <span>Launch Your Product</span>
          <ArrowRight size="20" className="text-primary" />
          <span>Receive Real-Time Feedback</span>
          <ArrowRight size="20" className="text-primary" />
          <span>Engage with Your Audience</span>
          <ArrowRight size="20" className="text-primary" />
          <span>Iterate and Improve</span>
        </div>
      </div>
    </div>
  );
};
