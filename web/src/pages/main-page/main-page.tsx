import api from "@/api";
import { Form } from "@/components/form/form";
import { TodoList } from "@/components/todo-list/todo-list";
import { mapUserData } from "@/enteties/user/mapping.api-to-app";
import { ContentWrapper } from "@/hocs/content-wrapper/content-wrapper";
import { PageWrapper } from "@/hocs/page-wrapper/page-wrapper";
import { SidebarWrapper } from "@/hocs/sidebar-wrapper/sidebar-wrapper ";
import { storage } from "@/storage";
import { useAppDispatch } from "@/store/hooks";
import { userActions } from "@/store/slices/user/user.slice";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";

export const Main = () => {
  const { setUser, setIsAuth } = userActions;
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useAppDispatch();

  const fetchUser = async () => {
    const response = await api.ApiRequest.getUserData();
    console.log("response", response);
    
    storage.setUserData(response);
    const mapData = mapUserData(response);
    dispatch(setUser(mapData));
    dispatch(setIsAuth(true));
  };

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
        />
      </SidebarWrapper>
    </PageWrapper>
  );
};
