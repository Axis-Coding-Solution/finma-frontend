import { Button } from "@/components/ui";
import { cn } from "@/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";

const cards = [
  {
    image: "/assets/images/entrep_type/entrep_slider_1.png",
    description: "I have a great idea and am looking to explore its potential",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_2.png",
    description:
      "I'm eager to start a business but need guidance to get started",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_3.png",
    description: "I'm developing a startup and working on its launch",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_4.png",
    description:
      "My startup is up and running, and I'm focused on scaling and growing it",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_5.png",
    description: "I've started multiple businesses and aim to keep innovating",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_6.png",
    description: "I'm focused on developing cutting-edge technology solutions",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_7.png",
    description:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_8.png",
    description:
      "I'm driven by creating social or environmental impact through my ventures",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_9.png",
    description:
      "I excel at turning creative ideas into innovative business models",
  },
  {
    image: "/assets/images/entrep_type/entrep_slider_10.png",
    description: "I'm committed to pioneering startup success in my community",
  },
];

const ArrowLeftBtn = ({ onClick }: any) => {
  return (
    <Button
      className={cn("z-10 text-background")}
      variant="warning"
      onClick={onClick}
      size="icon"
    >
      <ArrowLeft />
    </Button>
  );
};
const ArrowRightBtn = ({ onClick }: any) => {
  return (
    <Button
      className={cn("z-10 text-background")}
      variant="warning"
      onClick={onClick}
      size="icon"
    >
      <ArrowRight />
    </Button>
  );
};

export const EntrepreneurialSlider = ({ Controller, control }: any) => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3.2,
    slidesToScroll: 3,
    prevArrow: <ArrowLeftBtn onClick={() => null} />,
    nextArrow: <ArrowRightBtn onClick={() => null} />,
    className: "!flex items-center gap-5",
  };
  return (
    <Controller
      control={control}
      name="entrepreneurType"
      render={({ field }: any) => (
        <Slider {...settings}>
          {cards.map((card, idx) => (
            <figure
              className={cn(
                "rounded cursor-pointer h-full p-5 shadow-card-outer !flex justify-stretch flex-col gap-5",
                field.value === card.description && "bg-secondary"
              )}
              role="radiogroup"
              onClick={() => field.onChange(card.description)}
              key={idx}
            >
              <div className="h-full flex justify-center items-center flex-grow">
                <img
                  className="aspect-square w-full object-contain"
                  src={card.image}
                  alt="Test"
                />
              </div>
              <figcaption className="text-center font-medium">
                {card.description}
              </figcaption>
            </figure>
          ))}
        </Slider>
      )}
    />
  );
};
