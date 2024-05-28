import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";

const ForgetPassword = () => {
  return (
    <div className=" ">
     
      <MainHeading heading="Forgot password?" paragraph="   Enter your email address and we’ll send you a link to reset your
        password" />

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
