import { useFormik } from "formik";
import style from "./style.module.scss";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import api from "@/api";
import { useAppDispatch } from "@/store/hooks";
import { todosActions } from "@/store/slices/todos/todos.slice";
import { storage } from "@/storage";
import { Card } from "primereact/card";
import { CustomCalendarButton } from "../custom-calendar-button/CustomCalendarButton";
import { schemaTodoForm, TSchemaTodoForm } from "./schema/schema";

export const Form = () => {
  const userData = storage.getUserData();

  const dispatch = useAppDispatch();
  const { addTodo } = todosActions;

  const formik = useFormik<TSchemaTodoForm>({
    initialValues: {
      title: undefined,
      description: "",
      date: undefined,
      tags: [],
      priority: 1,
    },
    validationSchema: schemaTodoForm,
    onSubmit: (values) => {
      console.log("values", values);
      api.ApiRequest.createTodo({
        ...values,
        userId: userData.userId || "",
      }).then((res) => {
        dispatch(addTodo({ data: res.data }));
      });
    },
  });

  return (
    <Card
      pt={{
        content: {
          style: {
            padding: 0,
          },
        },
      }}
    >
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.formInputs}>
          <InputText
            id="title"
            type="text"
            className="p-inputtext-sm"
            placeholder="Заголовок"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <InputTextarea
            id="description"
            placeholder="Описание..."
            autoResize
            value={formik.values.description}
            rows={1}
            cols={80}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.formButtons}>
          <CustomCalendarButton
            value={formik.values.date}
            setValue={(value: Date | null) => formik.setFieldValue("date", value)}
            classname={style.formButton}
          />
          <Button
            label="Приоритет"
            outlined
            size="small"
            icon="pi pi-flag"
            className={style.formButton}
          />
          <Button
            label="Метки"
            outlined
            size="small"
            icon="pi pi-tag"
            className={style.formButton}
          />
        </div>
        <div className={style.submitGroup}>
          <Button label="Отмена" severity="warning" />
          <Button type="submit" label="Добавить задачу" severity="success" />
        </div>
      </form>
    </Card>
  );
};
