import style from "./style.module.scss";
import { FC, ReactNode } from "react";

interface IContentWrapperProps {
  children: ReactNode;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({ children }) => {
  return <div className={style.contentWrapper}>{children}</div>;
};
