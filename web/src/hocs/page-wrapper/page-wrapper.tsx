import style from "./style.module.scss";
import { FC, ReactNode } from "react";

interface IPageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: FC<IPageWrapperProps> = ({ children }) => {
  return (
    <div className={style.mainWrapper}>
      {children}
    </div>
  )
}