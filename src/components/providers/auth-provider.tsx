import { useState, ReactNode } from "react";
import {
  getAuthFromStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "@/utils";
import { AuthContext } from "../context";
import { useQueryClient } from "@tanstack/react-query";

type PropsTypes = {
  children: ReactNode;
};

const auth = getAuthFromStorage();

function AuthProvider({ children }: PropsTypes) {
  const [isAuthenticated, setIsAuthenticated] = useState(auth?.isAuthenticated);
  const [user, setUser] = useState(auth?.user);
  const queryClient = useQueryClient();

  const handleLogin = ({ user, token }: { user: any; token: string }) => {
    setIsAuthenticated(true);
    setUser(user);
    saveUserToLocalStorage({ user, token });
  };

  const updateUser = (user: any) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    queryClient.clear();
    removeUserFromLocalStorage();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        handleLogin,
        handleLogout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
