import { Avatar } from "@/components/ui/avatar";

const ProfileInfo = ({
  image,
  userData,
  name,
  description,
}: {
  image: string;
  name: string | undefined;
  description?: string;
  userData?: any;
}) => {
  return (
    <div className="flex gap-2">
      <Avatar image={userData?.profilePicture ?? image} size="lg" />
      <div>
        <h1 className="text-foreground 2xl:text-xl text-lg">
          {userData?.fullName ?? name}
        </h1>
        <h1 className="2xl:text-sm text-muted-foreground font-[400] text-xs">
          {userData?.entrepreneurType ?? description}
        </h1>
      </div>
    </div>
  );
};
export default ProfileInfo;
