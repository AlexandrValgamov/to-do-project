import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  loggedIn: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  loggedIn,
}) => {
  return loggedIn ? children : <Navigate to="/sign-in" replace />;
};
