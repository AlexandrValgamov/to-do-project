import style from "./style.module.scss";
import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const ExternalLayout = () => {
  const location = useLocation();
  const locationPath = useMemo(() => location.pathname, [location]);

  return (
    <div className={style.externalLayout}>
      <Outlet key={locationPath} />
    </div>
  );
};
