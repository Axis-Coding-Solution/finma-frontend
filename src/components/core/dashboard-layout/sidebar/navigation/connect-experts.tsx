import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";

const experts = [
  {
    id: "1",
    image: userAvatar2Image,
    name: "Salama M.",
    designation: "Venture Analyst",
  },
  {
    id: "2",
    image: userAvatar3Image,
    name: "Jim Smith",
    designation: "Venture Analyst",
  },
  {
    id: "3",
    image: userAvatar4Image,
    name: "Vivan Violet",
    designation: "Market Intelligence",
  },
  {
    id: "4",
    image: userAvatar5Image,
    name: "Jackie Jess",
    designation: "Business Strategist",
  },
];

export const ConnectWithExperts = () => {
  const { pathname } = useLocation();

  return (
    <div className="text-foreground mt-4 flex flex-col gap-1">
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Connect with experts
      </h6>
      {experts.map(({ id, name, image, designation }) => (
        <Link
          to={`/dashboard/chats/${id}`}
          key={id}
          className={cn(
            "px-4 py-3 flex gap-3 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
            pathname === `/dashboard/chats/${id}` &&
              "bg-success/10 text-success"
          )}
        >
          <Avatar image={image} size="md" active />
          <div className="flex flex-col text-base">
            <span>{name}</span>
            <span className="text-muted-foreground text-xs">{designation}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
