import { hookstate } from "@hookstate/core";

const ideaClarityFormDataInitialValues = {
  problem: "",
  solution: "",
  targetedAudience: "",
  competitors: "",
};

export const ideaClarityFormDataHook = hookstate(
  ideaClarityFormDataInitialValues
);
