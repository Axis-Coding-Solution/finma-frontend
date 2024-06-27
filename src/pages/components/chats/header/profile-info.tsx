import { Avatar } from "@/components/ui/avatar";
import { expertsDetailsHook } from "@/store";
import { useHookstate } from "@hookstate/core";

const ProfileInfo = ({
  image,
  name,
  description,
}: {
  image: string;
  name: string | undefined;
  description?: string;
}) => {
  const expertInfo = useHookstate(expertsDetailsHook);
  let userName = expertInfo.get().name;

  return (
    <div className="flex gap-2">
      <Avatar image={image} size="lg" />
      <div>
        <h1>{userName ?? "unknown"}</h1>
        <h1 className="text-sm text-muted-foreground font-[400]">
          {" "}
          {description}
        </h1>
      </div>
    </div>
  );
};
export default ProfileInfo;
