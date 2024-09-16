import { SignUpBuilder, SignUpInnovator, SignUpLauncher } from "@/assets/svgs";
import { useToastQuery } from "@/utils/hooks";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const selectRoleOptions = [
  {
    title: "Innovator",
    role: "innovator",
    subtitle: "I have a startup idea",
    img: SignUpInnovator,
  },
  {
    title: "Builder",
    role: "expert",
    subtitle: "I want to help Innovators",
    img: SignUpBuilder,
  },
  {
    title: "Launcher",
    role: "mentor",
    subtitle: "I am a Mentor/VC",
    img: SignUpLauncher,
  },
];

const SelectRolePage = () => {
  useToastQuery({});
  return (
    <div className="2xl:w-[1084px] w-auto xl:mx-0 mx-5">
      <div className=" bg-info-light rounded-lg 2xl:py-[52px] py-6 lg:px-20 md:px-10 px-4 flex flex-col justify-between items-center  relative">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
        >
          <X />
        </button>
        <div className="text-center">
          <h2 className="2xl:text-[44px] text-3xl font-semibold">Sign up</h2>
          <p className="2xl:mt-5 mt-2 2xl:text-2xl text-base">
            Choose the community role you want to continue with
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 2xl:gap-10 gap-4 2xl:mt-20 mt-8">
          {selectRoleOptions &&
            selectRoleOptions.map((item, index) => (
              <Link key={index} to={`/onboarding/profile?role=${item.role}`}>
                <div className="rounded bg-background 2xl:p-4 p-3 flex flex-col items-center text-center shadow-card-outer">
                  <h4 className="2xl:text-2xl text-lg font-medium">
                    {item.title}
                  </h4>
                  <p className="2xl:text-xl text-base 2xl:mt-3 mt-1">
                    {item.subtitle}
                  </p>
                  <figure className="2xl:mt-6 mt-0 md:w-full w-1/2">
                    <img className="size-full" src={item.img} />
                  </figure>
                </div>
              </Link>
            ))}
        </div>
        <h6 className="flex items-center gap-1 justify-center 2xl:text-[22px] text-base 2xl:mt-9 mt-6">
          Have an account?
          <Link to="/auth/login">
            <span className="ms-1 font-semibold">Log in</span>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SelectRolePage;
