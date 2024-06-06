import { useState, ReactNode } from "react";
import {
  getAuthFromStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "@/utils";
import { AuthContext } from "../context";

type PropsTypes = {
  children: ReactNode;
};

const auth = getAuthFromStorage();

function AuthProvider({ children }: PropsTypes) {
  const [isAuthenticated, setIsAuthenticated] = useState(auth?.isAuthenticated);
  const [user, setUser] = useState(auth?.user);

  const handleLogin = ({ user, token }: { user: any; token: string }) => {
    setIsAuthenticated(true);
    setUser(user);
    saveUserToLocalStorage({ user, token });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeUserFromLocalStorage();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
