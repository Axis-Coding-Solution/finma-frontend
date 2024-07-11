import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { MainHeading } from "@/pages/components/common";
import { PasswordInput } from "@/components/ui/password-input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpInitialValues } from "@/utils/initial-values";
import { signUpSchema } from "@/utils/validation-schemas";
import { InputError } from "@/components/ui/input-error";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { signUpApi } from "@/api/http";
import { useAuth } from "@/utils/hooks";

const routes = {
  innovator: "/lead-magnet/start",
  expert: "/onboarding/experts",
  mentor: "/onboarding/mentors",
};

const getRouteOnRole = (role: "innovator" | "expert" | "mentor") => {
  return routes[role];
};

const SignUpWithEmail = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const signUpMutate = useMutation({
    mutationFn: signUpApi,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: signUpInitialValues,
    resolver: yupResolver(signUpSchema as any),
  });

  const onSubmitHandler = async (data: typeof signUpInitialValues) => {
    try {
      const response = await signUpMutate.mutateAsync(data);
      successToast(response.message);

      const { token, user } = response.data;
      auth?.handleLoginToSession({ token, user });

      const role = user.role;
      const url = getRouteOnRole(role);
      navigate(url, { replace: true });

    } catch (error: any) {
      if (error?.data?.redirectUrl)
        navigate(error.data.redirectUrl, { replace: true });
      errorToast(error.message);
    }
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
            <Label htmlFor="terms" className="mb-0">
              By continuing, you agree to Finma's
              <Button className="mx-1 p-0" variant="link">
                <Link to="/terms-of-use">Terms of Use</Link>
              </Button>
              and
              <Button className="mx-1 p-0" variant="link">
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </Button>
            </Label>
          </div>
          <InputError error={errors.isAgree} />
        </div>
        <div className="flex justify-between">
          <Button
            type="submit"
            variant="default"
            disabled={signUpMutate.isPending}
          >
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
