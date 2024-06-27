import { State, useHookstate } from "@hookstate/core";
import { userMessages } from ".";

const wrapState = (state: State<any[], {}>) => ({
  getChat: () => state.value,
  pushMessage: (msg: any) => state.set((prev: any[]) => [...prev, msg]),
  setChat: (chat: any[]) => state.set(chat),
});

export const useMessagesStore = () => wrapState(useHookstate(userMessages));
