import { ConnectWithExperts } from "./connect-experts";
import { NavLinks } from "./nav-links";

const Navigation = () => {
  return (
    <section className="flex-grow">
      <NavLinks />
      <ConnectWithExperts />
    </section>
  );
};

export default Navigation;
