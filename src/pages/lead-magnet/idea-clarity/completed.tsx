import { saveIdeaClarityApi } from "@/api/http";
import editNote from "@/assets/svgs/edit-note.svg";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { ideaClarityFormDataHook } from "@/store";
import { errorToast, successToast } from "@/utils";
import { useHookstate } from "@hookstate/core";
import { useMutation } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { IdeaClarityContextTypes } from ".";

function IdeaClarityCompletedPage() {
  const { navigate } = useOutletContext<IdeaClarityContextTypes>();
  const formDataState = useHookstate(ideaClarityFormDataHook);
  const ideaClarityMutation = useMutation({
    mutationFn: saveIdeaClarityApi,
  });

  const handleSaveIdeaClarity = async () => {
    try {
      const response = await ideaClarityMutation.mutateAsync(
        formDataState.value
      );
      successToast(response.message);
      navigate("/lead-magnet/risk-score", {
        state: response.data,
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <div className="py-10 flex justify-start items-center">
      <div className="w-[80%]">
        <img src={editNote} alt="" className="w-20 h-20 mb-4" />
        <MainHeading
          heading="You're ready go."
          paragraph="Based on your inputs, our AI model will analyze and calculate the overall risk and potential of your idea. Click the button below to see your evaluation results."
        />
        <Button
          variant="default"
          className="mt-4"
          onClick={handleSaveIdeaClarity}
          disabled={ideaClarityMutation.isPending}
        >
          Get Your Risk Score
        </Button>
      </div>
    </div>
  );
}

export default IdeaClarityCompletedPage;
