import { ArrowConnerLeft } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IdeaClarityField } from "./idea-clarity-field";
import { useForm } from "react-hook-form";
import { FORM_MODE } from "@/utils/constants";
import { onboardingIdeaClarityInitialValues } from "@/utils/initial-values";
import { useMutation } from "@tanstack/react-query";
import { updateIdeaClarity } from "@/api/http";
import { useEffect } from "react";
import { errorToast, successToast } from "@/utils";

const ideaClarityFields = [
  {
    title: "The Problem",
    name: "problem",
    detail:
      "Do you have strong, credible evidence that the problem you are addressing exists and is significant?",
  },
  {
    title: "Solution",
    name: "solution",
    detail:
      "Has your solution been tested, and does it show clear evidence of effectively solving the problem?",
  },
  {
    title: "Targeted audience",
    name: "targetedAudience",
    detail:
      "Who is the specific group of people who are currently struggling with the problem your startup aims to solve?",
  },
  {
    title: "Competitors",
    name: "competitors",
    detail:
      "Who are your direct competitors, and what makes your solution stand out?",
  },
];

export function EditIdeaClarityModal({data}: {data: any}) {
 

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
      const res = await mutation.mutateAsync(values);
      successToast(res.message);
    } catch (error: any) {
      console.log("🚀 ~ EditIdeaClarityModal ~ error:", error)
      errorToast(error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full justify-center flex mt-4">
          <Button variant="outline" className="md:w-1/2 w-auto ">
            <span className="md:text-sm text-xs">
              View and edit <br className="sm:hidden block" />
              evaluation model answers
            </span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <Button
          variant="link"
          className="!p-0 flex items-center gap-2 absolute top-5 left-5"
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
      </DialogContent>
    </Dialog>
  );
}
