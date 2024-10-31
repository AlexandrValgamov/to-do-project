import style from "./style.module.scss";
import { ProtectedRoute } from "@/router/protected-route";
import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UserControl } from "./components/user-control";

export const DefaultLayout = () => {
  const location = useLocation();
  const locationPath = useMemo(() => location.pathname, [location]);

  return (
    <div className={style.defaultLayoutContainer}>
      <ProtectedRoute>
        <div className={style.defaultLayoutHeader}>
          <UserControl />
        </div>
        <Outlet key={locationPath} />
      </ProtectedRoute>
    </div>
  );
};
