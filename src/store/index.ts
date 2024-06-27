import { hookstate } from "@hookstate/core";

const ideaClarityFormDataInitialValues = {
  problem: "",
  solution: "",
  targetedAudience: "",
  competitors: "",
};
const expertsDetailsInitialValues = {
  name: "",
  description: "",
  image: "",
};

export const ideaClarityFormDataHook = hookstate(
  ideaClarityFormDataInitialValues
);
export const expertsDetailsHook = hookstate(expertsDetailsInitialValues);
