import { ProductImg1, ProductImg2, ProductImg3 } from "@/assets/images";
import { MainHeading } from "@/pages/components/common";
import {
  ProductBanner,
  ProductCard,
} from "@/pages/components/dashboard/product";

export const ProductPage = () => {
  const productOption = [
    {
      img:  ProductImg1 ,
      title: "Launch your product and get",
      description:
        "Standerd is a simple Figma UI Kit with dozens of common user flows.",
      commentCount: "71",
      badge1: "Free options",
      badge2: "Design tools",
      count: "556",
    },
    {
      img: ProductImg2 ,
      title: "Care Personality Assessment",
      description:
        "Assess your skills & blind spots",
      commentCount: "50",
      badge1: "Free options",
      badge2: "Productivity",
      count: "258",
    },
    {
      img:  ProductImg3 ,
      title: "Perfect",
      description:
        "Undiscovered talent. Found easily. Start free (US only)",
      commentCount: "20",
      badge1: "Promoted",
      badge2: "",
      count: "191",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <MainHeading heading="Product Launch" />
      <ProductBanner />
      <div className="flex flex-col gap-6">
        {productOption && productOption.map((item)=>(
        <ProductCard {...item} />

            
        ))}
      </div>
    </div>
  );
};
