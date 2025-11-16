import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import type { RootState } from "@/redux/store";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  role?: "user" | "agent" | "admin";
}

export const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <Navigate to="/login" replace />;

  console.log(user)

  if (role && user.role !== role) return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};


