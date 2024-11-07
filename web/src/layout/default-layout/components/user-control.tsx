import { Button } from "primereact/button";
import style from "./style.module.scss";
import classNames from "classnames";
import { storage } from "@/storage";

export const UserControl = () => {
  const handleClick = () => {
    storage.removeUserData();
    window.location.reload();
  };

  const userData = storage.getUserData();
  return (
    <div className={style.user}>
      <p className={classNames(style.user__email, "p-button")}>
        {userData.email}
      </p>
      <Button label="Выйти" onClick={handleClick} outlined />
    </div>
  );
};
