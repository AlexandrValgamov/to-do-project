import api from "@/api";
import style from "./style.module.scss";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { todosActions } from "@/store/slices/todos/todos.slice";
import { DataView } from "primereact/dataview";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { TAppTodosData } from "@/enteties/todo/app-types";
import { ItemTemplate } from "./components/item-template/ItemTemplate";
import { Card } from "primereact/card";

export const TodoList = () => {
  const [sortOrder, setSortOrder] = useState<0 | 1 | -1 | null | undefined>(0);
  const [sortKey, setSortKey] = useState("");
  const [sortField, setSortField] = useState("");
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  const { setTodos, setTodosLoading } = todosActions;
  const dispatch = useAppDispatch();
  const { userId } = JSON.parse(localStorage.getItem("userData") ?? "{}");

  const { todosData, isLoading } = useAppSelector((state) => state.todosSlice);
  const fetchTodos = async (id: string) => {
    const response = await api.ApiRequest.getTodosByUserId(id);
    dispatch(setTodos(response));
  };

  useEffect(() => {
    if (userId) {
      dispatch(setTodosLoading(true));
      fetchTodos(userId).finally(() => {
        dispatch(setTodosLoading(false));
      });
    }
  }, []);

  const onSortChange = (event: DropdownChangeEvent) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const header = () => {
    return (
      <Dropdown
        options={sortOptions}
        value={sortKey}
        optionLabel="label"
        placeholder="Sort By Price"
        onChange={onSortChange}
        className="w-full sm:w-14rem"
      />
    );
  };

  const listTemplate = (items: TAppTodosData | []) => {
    if (!items || items.length === 0) return null;

    let list = items.map((item) => {
      return <ItemTemplate key={item.id} item={item} />;
    });

    return <div className={style.todoList}>{list}</div>;
  };

  if (!isLoading)
    return (
      <Card
        className={style.wrapper}
        pt={{
          content: {
            style: {
              padding: 0,
              
            },
          },
        }}
      >
        <DataView
          value={todosData}
          listTemplate={listTemplate}
          header={header()}
          sortField={sortField}
          sortOrder={sortOrder}
          className={style.dataView}
          pt={{
            header: {
              className: style.dataView__header,
            },
            content: {
              className: style.dataView__content,
            }
          }}
        />
      </Card>
    );

  return (
    <div className={style.todoList}>
      <div>Loading...</div>
    </div>
  );
};
