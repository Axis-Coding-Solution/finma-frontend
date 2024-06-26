import { createContext } from "react";

type AuthContextType = null | {
  isAuthenticated: boolean | undefined;
  user: any;
  handleLogin: ({ user, token }: { user: any; token: string }) => void;
  handleLogout: () => void;
};
export const AuthContext = createContext<AuthContextType>(null);
