import { Skeleton } from "primereact/skeleton";
import style from "./style.module.scss";
interface TodoItemProps {
  title: string;
  description: string;
  priority?: "low" | "medium" | "high";
  state?: "todo" | "in-progress" | "done";
  createdAt: string;
  expiresIn?: Date;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  title,
  description,
  createdAt,
}) => {
  const created = new Date(createdAt).toLocaleDateString("en-CA");

  return (
    <div className={style.todoItemContainer}>
      <div className={style.todoItemTopContent}>
        <p className={style.todoItemTitle}>{title}</p>
        <div className={style.todoListDate}>{created}</div>
      </div>
      <div className={style.todoItemBottomContent}>
        <p className={style.todoItemText}>{description}</p>
      </div>
    </div>
  );
};

export const TodoItemSkeleton: React.FC = () => {
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
