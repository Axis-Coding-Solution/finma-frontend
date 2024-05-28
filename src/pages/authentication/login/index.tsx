import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" ">
      <MainHeading heading="Login" paragraph="Welcome back to FimnaAI!" />
      <div className=" flex flex-col gap-3 mt-3">
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="border border-gray-300 p-2 rounded-sm w-96"
        />
        <Input
          type="text"
          placeholder="Enter Your Password"
          className="border  border-gray-300 p-2 rounded-sm w-96"
        />
      </div>
      <div className="flex justify-end ">
       <Link to="/auth/forget-password"><span className="text-sm mt-1">forget Password?</span></Link>
      </div>
      <div className="flex justify-between gap-10 mt-10">
        <Button variant="default" size="lg" className="">
          <span>Login</span>
        </Button>

        <span className="flex items-center">
          {" "}
          Don’t have an account?
          <span className="font-bold underline">
            <Link to="/auth/sign-up">Sign Up</Link>
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
