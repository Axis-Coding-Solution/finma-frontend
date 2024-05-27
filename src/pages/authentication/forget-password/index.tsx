import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgetPassword = () => {
  return (
    <div className=" ">
      <h1 className="text-[70px] font-bold">Forgot password?</h1>
      <p className="text-[16px]">
        Enter your email address and we’ll send you a link to reset your
        password
      </p>

      <div className="mt-3">
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="border border-gray-300 p-2 rounded-sm w-96"
        />
      </div>

      <div className="flex justify-between gap-10 mt-10">
        <Button variant="secondary" size="lg" className="">
          <span>Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default ForgetPassword;
