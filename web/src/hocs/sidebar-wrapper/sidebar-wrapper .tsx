import style from "./style.module.scss";
import { FC, ReactNode } from "react";

interface ISidebarWrapperProps {
  children: ReactNode;
}

export const SidebarWrapper: FC<ISidebarWrapperProps> = ({ children }) => {
  return <div className={style.sidebarWrapper}>{children}</div>;
};
