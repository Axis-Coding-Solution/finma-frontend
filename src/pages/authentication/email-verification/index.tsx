import { useEmailVerificationMutation } from "@/api/hooks";
import { MainHeading } from "@/pages/components/common";
import { errorToast, successToast } from "@/utils";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const emailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const token = String(searchParams.get("token"));
  const id = String(searchParams.get("id"));

  const { mutateAsync } = useEmailVerificationMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      if (token && id) {
        try {
          const values = { token, id };
          const response = await mutateAsync(values);
          successToast(response.message);
          navigate("/onboarding/select-role", { replace: true });
        } catch (error: any) {
          errorToast(error.message);
        }
      }
    };
    verifyEmail();
  }, [token, id, mutateAsync, navigate]);

  return (
    <div className="bg-secondary rounded-lg 2xl:p-7 md:p-5 p-4">
      <div className="2xl:w-[532px] sm:w-[432px]  w-full  bg-background rounded 2xl:p-[52px] md:p-6 p-4  flex flex-col 2xl:gap-[52px] sm:gap-10 gap-6 relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <div className="sm:mt-0 mt-4 2xl:py-8 py-5">
          <MainHeading
            title="Email Verification"
            subtitle="Email has been verification Successfully"
          />
          <h5 className="font-semibold text-lg text-center mt-4">
            {token} {id}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default emailVerificationPage;
