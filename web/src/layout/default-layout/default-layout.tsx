import style from './style.module.scss'
import { ProtectedRoute } from "@/router/protected-route";
import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const DefaultLayout = () => {
  const location = useLocation();
  const locationPath = useMemo(() => location.pathname, [location]);

  return (
    <div className={style.defaultLayoutContainer}>
      <div className={style.defaultLayoutHeader} />
      <ProtectedRoute>
        <Outlet key={locationPath} />
      </ProtectedRoute>
    </div>
  );
};
