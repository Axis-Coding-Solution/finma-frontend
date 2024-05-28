import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col gap-3  ">
      <MainHeading heading="Login" paragraph="Welcome back to FimnaAI!" />
      {/* <div className=" flex gap-3 mt-3"> */}
      <Input type="email" id="email" placeholder="Enter your Email" />
     <div className="text-end">
      <Input type="text" placeholder="Enter Your Password" />
      <Link to="/auth/forget-password" >
        <span className="text-sm mt-1">Forget Password?</span>
      </Link>
      </div>

      {/* </div> */}
      <div className="text-end "></div>
      <div className="flex justify-between gap-10 ">
        <Button variant="default" size="lg" className="">
          <span>Log In</span>
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
