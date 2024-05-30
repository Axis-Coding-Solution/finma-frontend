import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <MainHeading heading="Login" paragraph="Welcome back to FimnaAI!" />
      <Input type="email" id="email" placeholder="Enter your Email" />
      <div className="text-end">
        <Input type="text" placeholder="Enter Your Password" />
        <Link to="/auth/forget-password">
          <Button variant="link">Forget Password?</Button>
        </Link>
      </div>
      <div className="text-end "></div>
      <div className="flex flex-col md:flex-row justify-between gap-10 ">
        <Link to="/dashboard/overview">
          <Button variant="default" size="lg">
            Log In
          </Button>
        </Link>
        <span className="items-center">
          Don’t have an account?
          <Link to="/auth/sign-up" className="ms-1 font-bold underline">
            Sign Up
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
