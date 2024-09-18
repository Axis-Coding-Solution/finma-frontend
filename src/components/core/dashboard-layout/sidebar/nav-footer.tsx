import { LogOut } from "lucide-react";
import { LinkItem } from "./navigation/link-item";
import { useAuth } from "@/utils/hooks";
import { successToast } from "@/utils";

const NavFooter = () => {
  const auth = useAuth();

  const HandleLogout = () => {
    auth?.handleLogout();
    successToast("Logout successfully!");
  };

  return (
    <section className="2xl:pb-4 pb-2 flex flex-col gap-1">
      <LinkItem
        iconDirection="rotate-180"
        name="Log out"
        path="/auth/login"
        Icon={LogOut}
        handleChange={HandleLogout}
      />
    </section>
  );
};

export default NavFooter;
