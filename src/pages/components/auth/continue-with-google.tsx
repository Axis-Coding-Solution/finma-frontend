import { useContinueWithGoogleQuery } from "@/api/hooks";
import { GoogleIcon } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { errorToast } from "@/utils";

export const ContinueWithGoogle = ({
  text = "Sign up with Google",
}: {
  text?: String;
}) => {
  const { refetch } = useContinueWithGoogleQuery();
  const handleContinueWithGoogle = async () => {
    try {
      const res = await refetch();
      window.location.href = res.data;
    } catch (error) {
      errorToast("Something went wrong while signing up with google!");
    }
  };
  return (
    <Button
      onClick={handleContinueWithGoogle}
      icon={<img src={GoogleIcon} />}
      variant="outline"
    >
      {text}
    </Button>
  );
};
