import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { MainHeading } from "@/pages/components/common";
import { PasswordInput } from "@/components/ui/password-input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@/utils/constants";
import { signUpInitialValues } from "@/utils/initial-values";
import { signUpSchema } from "@/utils/validation-schemas";
import { InputError } from "@/components/ui/input-error";

const SignUpWithEmail = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: signUpInitialValues,
    resolver: yupResolver(signUpSchema as any),
  });

  const onSubmitHandler = (data: typeof signUpInitialValues) => {
    console.log(data);
  };

  return (
    <>
      <MainHeading
        heading="Sign Up"
        paragraph="Join our community of entrepreneurs, and let's make your startup dreams"
      />
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input
            type="email"
            {...register("email")}
            id="emailAddress"
            placeholder="Enter your Email"
          />
          <InputError error={errors.email} />
        </div>
        <div>
          <PasswordInput
            id="login-password"
            placeholder="Enter your password"
            label="Password"
            {...register("password")}
          />
          <InputError error={errors.password} />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <Controller
              name="isAgree"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Label htmlFor="terms">
              By continuing, you agree to Finma's
              <Button className="mx-1 p-0" variant="link">
                Terms of Use
              </Button>{" "}
              and
              <Button className="mx-1 p-0" variant="link">
                Privacy Policy
              </Button>
            </Label>
          </div>
          <InputError error={errors.isAgree} />
        </div>
        <div className="flex justify-between">
          <Button type="submit" variant="default">
            Create an Account
          </Button>
          <span className="flex gap-1 items-center">
            Have an account?
            <Link to="/auth/login" className="hover:underline font-bold">
              Log In
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignUpWithEmail;
