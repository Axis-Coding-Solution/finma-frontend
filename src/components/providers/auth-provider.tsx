import {  useState, ReactNode } from "react";
import { getAuthFromStorage } from "@/utils";
import { AuthContext } from "../context";

type PropsTypes = {
  children: ReactNode;
};

const auth = getAuthFromStorage();

function AuthProvider({ children }: PropsTypes) {
  const [isAuthenticated, setIsAuthenticated] = useState(auth?.isAuthenticated);
  const [user, setUser] = useState(auth?.user);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
