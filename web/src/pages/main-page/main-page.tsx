import api from "@/api";
import { Form } from "@/components/form/form";
import { TodoList } from "@/components/todo-list/todo-list";
import { ContentWrapper } from "@/hocs/content-wrapper/content-wrapper";
import { PageWrapper } from "@/hocs/page-wrapper/page-wrapper";
import { SidebarWrapper } from "@/hocs/sidebar-wrapper/sidebar-wrapper ";
import { useAppDispatch } from "@/store/hooks";
import { userActions } from "@/store/slices/user/user.slice";
import { addLocale } from "primereact/api";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import locale_ru from "primelocale/ru.json";
import { storage } from "@/storage";
import { mapTodosData } from "@/enteties/todo/mapping.api-to-app";

export const Main = () => {
  const { setUser, setIsAuth } = userActions;
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useAppDispatch();

  const userDataInStore = storage.getUserData();

  const fetchUser = async () => {
    const response = await api.ApiRequest.getTodosByUserId(userDataInStore.userId);
    const mapData = mapTodosData(response);
    dispatch(setUser(mapData));
    dispatch(setIsAuth(true));
  };

  addLocale("ru", locale_ru.ru);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper>
        <Form />
        <TodoList />
      </ContentWrapper>
      <SidebarWrapper>
        <Calendar
          value={date}
          onChange={(e) => {
            if (e.value) setDate(e.value);
          }}
          inline
          locale="ru"
        />
      </SidebarWrapper>
    </PageWrapper>
  );
};
