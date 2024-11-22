import { Card } from "primereact/card";
import style from "./style.module.scss";

export const CompletedTasks = () => {
  return (
    <Card className={style.card}>
      <div className={style.completedTasks}>Выполнено</div>
    </Card>
  );
};
