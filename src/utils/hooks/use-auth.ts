import { useContext } from "react";
import { AuthContext } from "@/components/context";

export const useAuth = () => useContext(AuthContext);
