import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { MainHeading } from "@/pages/components/common";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@/utils/constants";
import { loginSchema } from "@/utils/validation-schemas";
import { loginInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/api/http";
import { errorToast, successToast } from "@/utils";
import { useAuth } from "@/utils/hooks";

const Login = () => {
  const loginMutation = useMutation({
    mutationFn: loginApi,
  });
  const navigate = useNavigate();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: loginInitialValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data: typeof loginInitialValues) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      const { token, user, redirectUrl } = response.data;
      auth?.handleLogin({ token, user });
      successToast(response.message);
      navigate(redirectUrl, { replace: true });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <MainHeading heading="Login" paragraph="Welcome back to FimnaAI!" />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Enter your Email"
          />
          <InputError error={errors.email} />
        </div>
        <div className="text-end mt-4">
          <PasswordInput
            id="login-password"
            {...register("password")}
            placeholder="Enter your password"
            label="Password"
          />
          <InputError error={errors.password} />
          <Button
            to="/auth/forget-password"
            tag={Link}
            variant="link"
            className="px-0 mt-2"
          >
            Forget Password?
          </Button>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-between gap-10 ">
          {/* <Link to="/dashboard/overview"> */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={loginMutation.isPending}
          >
            Log In
          </Button>
          {/* </Link> */}
          <span className="items-center">
            Don`t have an account?
            <Button
              to="/auth/sign-up"
              tag={Link}
              variant="link"
              className="ms-1 px-0 mt-2"
            >
              Sign Up
            </Button>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
