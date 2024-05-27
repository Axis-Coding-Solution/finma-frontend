import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" ">
      <h1 className="text-[70px] font-bold">Login</h1>
      <p className="text-[16px]">Welcome back to FimnaAI!</p>

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
        <span className="text-sm mt-1">forget Password?</span>
      </div>
      <div className="flex justify-between gap-10 mt-10">
        <Button variant="default" size="lg" className="">
        <span>Login</span>
        </Button>

        <span className="flex items-center"> Don’t have an account?<span className="font-bold underline">Sign Up</span> </span>
      </div>
    </div>
  );
};

export default Login;
