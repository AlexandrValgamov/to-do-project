import api from "@/api";
import style from "./style.module.scss";

import { TodoItem } from "@/shared/todo-item/todo-item";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { TAppTodosData } from "@/enteties/todo/app-types";

export const TodoList = () => {
  const [data, setData] = useState<TAppTodosData>([]);
  const userData = useAppSelector((state) => state.userSlice.userData);
console.log("userData,", userData);

  useEffect(() => {
    if (userData?._id) {
      api.ApiRequest.getTodosByUSerId(userData?._id).then((res) => {
        console.log("res ", res)
        
        setData(res.data);
      });
    }
  }, [userData]);

  return (
    <div className={style.todoList}>
      {data.map(({ _id, title, description, createdAt }) => (
        <TodoItem
          key={_id}
          createdAt={createdAt}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
