import api from "@/api";
import style from "./style.module.scss";

import { TodoItem, TodoItemSkeleton } from "@/shared/todo-item/todo-item";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { todosActions } from "@/store/slices/todos/todos.slice";

const icons = {
  highest: {
    icon: "angle-double-up",
    color: "var(--theme-accent-100)",
  },
  high: {
    icon: "angle-up",
    color: "var(--theme-accent-60)",
  },
  medium: {
    icon: "equals",
    color: "var(--theme-orange-100)",
  },
  low: {
    icon: "minus",
    color: "var(--theme-green-100)",
  },
};

export const TodoList = () => {
  const { setTodos, setTodosLoading } = todosActions;
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.userSlice.userData);
  const { todosData, isLoading } = useAppSelector((state) => state.todosSlice);

  const fetchTodos = async (id: string) => {
    const response = await api.ApiRequest.getTodosByUSerId(id);
    dispatch(setTodos(response));
  };

  useEffect(() => {
    if (userData?._id) {
      dispatch(setTodosLoading(true));
      fetchTodos(userData?._id).finally(() => {
        dispatch(setTodosLoading(false));
      });
    }
  }, [userData]);

  if (!isLoading)
    return (
      <div className={style.todoList}>
        {todosData?.map(({ _id, title, description, createdAt, priority }) => (
          <TodoItem
            key={_id}
            createdAt={createdAt}
            title={title}
            description={description}
            priorityData={icons[priority]}
            priority={priority}
          />
        ))}
      </div>
    );

  return (
    <div className={style.todoList}>
      <TodoItemSkeleton />
      <TodoItemSkeleton />
    </div>
  );
};
