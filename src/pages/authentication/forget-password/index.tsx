import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";

const ForgetPassword = () => {
  return (
    <div>
      <MainHeading
        heading="Forgot password?"
        paragraph="Enter your email address and we'll send you a link to reset your
        password"
      />
      <div className="mt-3">
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="border border-gray-300 p-2 rounded-sm w-96"
        />
      </div>
      <Button variant="secondary" size="lg">
        Continue
      </Button>
    </div>
  );
};

export default ForgetPassword;
