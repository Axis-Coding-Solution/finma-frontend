import { ArrowConnerLeft } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { IdeaClarityField } from "../idea-clarity-field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIdeaClarity } from "@/api/http";
import { useForm } from "react-hook-form";
import { FORM_MODE } from "@/utils/constants";
import { onboardingIdeaClarityInitialValues } from "@/utils/initial-values";
import { useEffect } from "react";
import { errorToast, successToast } from "@/utils";
import { ideaClarityFields } from "@/data/dashboard";
import { useAddIdeaClarityMutation } from "@/api/hooks/dashboard/idea-clarity";

export function EditIdeaClarity({
  setSelectStep,
  data,
}: {
  setSelectStep: any;
  data: any;
}) {
  const { mutateAsync } = useAddIdeaClarityMutation();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateIdeaClarity,
  });
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: onboardingIdeaClarityInitialValues,
  });

  useEffect(() => {
    if (typeof data == "object" && data) {
      const updateValues = {
        id: data?.ideaClarity?._id,
        problem: data?.ideaClarity?.problem,
        solution: data?.ideaClarity?.solution,
        targetedAudience: data?.ideaClarity?.targetedAudience,
        competitors: data?.ideaClarity?.competitors,
      };
      reset(updateValues);
    }
  }, [data]);

  const onSubmitHandler = async (
    values: typeof onboardingIdeaClarityInitialValues
  ) => {
    try {
      let res;
      if (!data?.ideaClarity) {
        res = await mutateAsync({ ...values, projectId: data?._id });
      } else {
        res = await mutation.mutateAsync(values);
      }
      queryClient.invalidateQueries({ queryKey: ["/idea-clarity/project"] });
      setSelectStep(0);
      successToast(res.message);
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <Button
        variant="link"
        className="!p-0 flex items-center gap-2 absolute top-5 left-5"
        onClick={() => setSelectStep(0)}
      >
        <img src={ArrowConnerLeft} alt="" />
        <span>Back</span>
      </Button>
      <DialogHeader>
        <DialogTitle className="text-center">
          Evaluation model answers
        </DialogTitle>
      </DialogHeader>
      <form
        className="flex flex-col gap-10 px-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {ideaClarityFields.map((field, index) => {
          const name = field.name as
            | "problem"
            | "solution"
            | "targetedAudience"
            | "competitors";
          return (
            <IdeaClarityField
              key={index}
              index={index + 1}
              name={name}
              register={register}
              title={field.title}
              value={watch(name)}
              detail={field.detail}
            />
          );
        })}
        <div className=" flex justify-between items-center">
          <Button type="button" variant="outline" disabled={isSubmitting}>
            Discard changes
          </Button>
          <Button type="submit" variant="default" disabled={isSubmitting}>
            Submit answers
          </Button>
        </div>
      </form>
    </>
  );
}
