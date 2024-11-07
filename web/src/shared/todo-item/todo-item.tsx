import { Skeleton } from "primereact/skeleton";
import { Tooltip } from "primereact/tooltip";
import style from "./style.module.scss";
import { FC } from "react";

interface IPriorityData {
  icon: string;
  color: string;
}
interface TodoItemProps {
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "highest";
  state?: "todo" | "in-progress" | "done";
  createdAt: string;
  expiresIn?: Date;
  priorityData: IPriorityData;
}

export const TodoItem: FC<TodoItemProps> = ({
  title,
  description,
  priority,
  createdAt,
  priorityData,
}) => {
  const created = new Date(createdAt).toLocaleString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className={style.todoItemContainer}>
      <div className={style.todoItemTopContent}>
        <p className={style.todoItemTitle}>{title}</p>
        <div className={style.todoListDate}>{created}</div>
      </div>
      <div className={style.todoItemBottomContent}>
        <Tooltip
          target=".custom-target-icon"
        />
        <i
          className={`custom-target-icon pi pi-${priorityData.icon}`}
          style={{ color: priorityData.color, cursor: "pointer" }}
          data-pr-tooltip={priority}
          data-pr-position="bottom"
        />
        <p className={style.todoItemText}>{description}</p>
      </div>
    </div>
  );
};

export const TodoItemSkeleton: FC = () => {
  return (
    <div className={style.todoItemContainer}>
      <div className={style.todoItemTopContent}>
        <Skeleton width="100%" height="24px"></Skeleton>
        <div></div>
      </div>
      <div className={style.todoItemBottomContent}>
        <p className={style.todoItemText}></p>
      </div>
    </div>
  );
};
