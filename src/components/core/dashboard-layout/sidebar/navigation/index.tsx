import { ConnectWithExperts } from "./connect-experts";
import { NavLinks } from "./nav-links";

type Props = {
  mobileMode?: boolean;
  handleChange?: () => void;
};

const Navigation = (props: Props) => {
  return (
    <section className="flex-grow">
      <NavLinks {...props} />
      <ConnectWithExperts />
    </section>
  );
};

export default Navigation;
