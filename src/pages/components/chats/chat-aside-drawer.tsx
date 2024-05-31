import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CornerDownLeft, CornerDownRight, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";
import sharedImg from "@/assets/images/image-shared.png";
import sharedFile from "@/assets/svgs/file-upload.svg";
import sharedLink from "@/assets/svgs/equalizer.svg";

export const ChatAsideBar = ({
  showAside,
  toggleAside,
}: {
  showAside: boolean;
  toggleAside: () => void;
}) => {
  return (
    <div
      className={`bg-[#F8F8F8] p-4 h-full   ${
        showAside ? "" : "lg:block flex flex-row items-center justify-between"
      } `}
    >
      <Button
        onClick={toggleAside}
        variant={"secondary"}
        // className="bg-background px-3 py-0 text-sm"
        className="bg-background px-3 py-2 text-sm w-10 h-10"
      >
        {showAside ? (
          <CornerDownRight size={20} />
        ) : (
          <CornerDownLeft size={20} />
        )}
      </Button>

      {showAside ? (
        <div>
          {/* User Info  */}
          <div className="w-full flex flex-col gap-2 mt-6">
            <Avatar
              image={userAvatar2Image}
              size="lg"
              className="h-20 w-20"
              active
            />
            <h4 className="text-foreground font-semibold text-xl">Salama M.</h4>
            <p className="text-secondary-foreground text-sm">
              Finance specialist with management and business skills
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star size={20} fill="#FFB500" color="#ffb500" />
                <Star size={20} fill="#FFB500" color="#ffb500" />
                <Star size={20} fill="#FFB500" color="#ffb500" />
                <Star size={20} fill="#FFB500" color="#ffb500" />
                <StarHalf size={20} fill="#FFB500" color="#ffb500" />
              </div>
              <h6 className="text-foreground text-sm leading-3">
                <span className="font-bold text-base">4 Project</span>
                <br /> of expertise
              </h6>
            </div>
          </div>
          {/* Shared Media  */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-secondary-foreground">
                Shared media
              </h4>
              <Link to="/" className="text-sm underline font-medium">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <img
                src={sharedImg}
                className="h-16 w-full object-cover rounded-md"
                alt=""
              />
              <img
                src={sharedImg}
                className="h-16 w-full object-cover rounded-md"
                alt=""
              />
              <img
                src={sharedImg}
                className="h-16 w-full object-cover rounded-md"
                alt=""
              />
              <img
                src={sharedImg}
                className="h-16 w-full object-cover rounded-md"
                alt=""
              />
            </div>
          </div>
          {/* Shared Files  */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-secondary-foreground">
                Shared files
              </h4>
              <Link to="/" className="text-sm underline font-medium">
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex  gap-2">
                  <img src={sharedFile} className="w-10" alt="" />
                  <div className=" flex flex-col justify-between">
                    <h6 className="font-medium text-foreground">Analysis</h6>
                    <p className="text-xs text-secondary-foreground">
                      Mar, 21 2024
                    </p>
                  </div>
                </div>
                <span className="text-secondary-foreground text-sm">
                  129,2 KB
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex  gap-2">
                  <img src={sharedFile} className="w-10" alt="" />
                  <div className=" flex flex-col justify-between">
                    <h6 className="font-medium text-foreground">Analysis</h6>
                    <p className="text-xs text-secondary-foreground">
                      Mar, 21 2024
                    </p>
                  </div>
                </div>
                <span className="text-secondary-foreground text-sm">
                  129,2 KB
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex  gap-2">
                  <img src={sharedFile} className="w-10" alt="" />
                  <div className=" flex flex-col justify-between">
                    <h6 className="font-medium text-foreground">Analysis</h6>
                    <p className="text-xs text-secondary-foreground">
                      Mar, 21 2024
                    </p>
                  </div>
                </div>
                <span className="text-secondary-foreground text-sm">
                  129,2 KB
                </span>
              </div>
            </div>
          </div>
          {/* Shared Links  */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-secondary-foreground">
                Shared links
              </h4>
              <Link to="/" className="text-sm underline font-medium">
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center  gap-4">
                <img src={sharedLink} className="w-10" alt="" />
                <div>
                  <h4 className="text-foreground font-semibold leading-3">
                    Google Analytics
                  </h4>
                  <span className="text-secondary-foreground text-xs">
                    https://marketingplatform.goo...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:mt-6 mt-0">
          <Avatar
            image={userAvatar2Image}
            size="lg"
            className="h-20 w-20"
            active
          />
        </div>
      )}
    </div>
  );
};
