import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = null | {
  isAuthenticated: boolean | undefined;
  setIsAuthenticated: Dispatch<SetStateAction<boolean | undefined>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};
export const AuthContext = createContext<AuthContextType>(null);
