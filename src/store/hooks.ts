import { State, useHookstate } from "@hookstate/core";
import { onboardingForm, userMessages } from ".";

const wrapState = (state: State<any[], {}>) => ({
  getChat: () => state.value,
  pushMessage: (msg: any) => state.set((prev: any[]) => [...prev, msg]),
  setChat: (chat: any[]) => state.set(chat),
});

const wrapOnboardingStates = (state: State<any, {}>) => ({
  getFormData: () => state.value,
  setFormData: (data: any) => state.set(data),
  clearFormData: () => state.set(null),
});

export const useMessagesStore = () => wrapState(useHookstate(userMessages));

export const useOnboardingForm = () =>
  wrapOnboardingStates(useHookstate(onboardingForm));
