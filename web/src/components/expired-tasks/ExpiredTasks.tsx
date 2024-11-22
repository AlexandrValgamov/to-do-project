import { Card } from "primereact/card";
import style from "./style.module.scss";

export const ExpiredTasks = () => {
  return (
    <Card className={style.card}>
      <div className={style.expiredTasks}>Просрочено</div>
    </Card>
  );
};
