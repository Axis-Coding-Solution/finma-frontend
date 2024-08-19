import { useEffect } from "react";
import { Button } from "@/components/_ui/button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MainHeading } from "@/pages/components/common";
import { GoogleIcon, MessageIcon } from "@/assets/images/index";
import { useMutation } from "@tanstack/react-query";
import { signUpWithGoogleApi } from "@/api/http";
import { errorToast } from "@/utils";

const SignUp = () => {
  const mutation = useMutation({
    mutationFn: signUpWithGoogleApi,
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const errMsg = searchParams.get("errorMessage");

  useEffect(() => {
    if (errMsg) {
      navigate("/auth/sign-up", { replace: true });
      errorToast(errMsg);
    }
  }, []);
  const handleSignUpWithGoogle = async () => {
    try {
      const res = await mutation.mutateAsync();
      let ideaClarity = localStorage.getItem("ideaClarity");
      if (!ideaClarity) {
        window.location.href = new URL(res.data).href;
      }
      window.location.href = new URL(res.data).href;
    } catch (error) {
      errorToast("Something went wrong while signing up with google!");
    }
  };
  return (
    <>
      <MainHeading
        heading="Sign Up"
        paragraph="Join our community of entrepreneurs, and let's make your startup dreams
        a reality!"
      />
      <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        <div className="">
          <Button
            variant="default"
            size="lg"
            disabled={mutation.isPending}
            className="w-full"
            onClick={handleSignUpWithGoogle}
          >
            <img src={GoogleIcon} className="w-5 h-5" />
            <span>Sign Up With Google</span>
          </Button>
        </div>
        <Button
          to="/auth/sign-up/email"
          variant="outline"
          tag={Link}
          disabled={mutation.isPending}
          size="lg"
          className="w-full"
        >
          <img src={MessageIcon} className="w-5 h-5" />
          <span>Sign Up With email</span>
        </Button>
        <p className="text-center">
          Have an account?
          <Link to="/auth/login" className="ms-1 font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </>
    // <div>Sign UP With Google</div>
  );
};

export default SignUp;
