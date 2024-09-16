import { AppLogoLight } from "@/assets/images";

const NavLogo = () => {
  return (
    <section className="2xl:h-24 h-16 px-2 flex justify-start items-center">
      <img src={AppLogoLight} className="w-24 h-10" />
    </section>
  );
};

export default NavLogo;
