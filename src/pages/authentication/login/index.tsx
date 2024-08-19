import { Button, FloatingInput } from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="bg-secondary rounded-lg py-8 px-[52px] flex justify-between items-stretch gap-[104px]">
      <div className="w-full">
        <h1>Welcome Back!</h1>
        <p>
          Join our community of entrepreneurs, and let's make your startup
          dreams a reality!
        </p>
        <figure>
          <img src="/assets/images/login-main.png" alt="Main Login Image" />
        </figure>
      </div>
      <div className="min-w-[584px] bg-background rounded p-[52px] flex flex-col gap-10 relative">
        <MainHeading />
        <button
          type="button"
          onClick={() => console.log("Hello There!")}
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end border-8 border-secondary"
        >
          <X />
        </button>
        <div className="flex flex-col gap-10">
          <FloatingInput type="email" name="email" label="Enter Email" />
          <FloatingInput
            type="password"
            name="password"
            label="Enter existing password"
          />
          <Button type="submit">Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
