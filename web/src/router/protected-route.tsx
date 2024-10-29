import { useAppSelector } from "@/store/hooks";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);
  return isAuth ? children : <Navigate to="/auth/signin" replace />;
};
