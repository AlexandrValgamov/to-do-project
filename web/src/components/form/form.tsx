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
import { PriorityButton } from "../priority-button/PriorityButton";
import { mapAppToApiTodosData } from "@/enteties/todo/mapping.app-to-api";

export const Form = () => {
  const userData = storage.getUserData();

  const dispatch = useAppDispatch();
  const { addTodo } = todosActions;

  const formik = useFormik<TSchemaTodoForm>({
    initialValues: {
      title: null,
      description: "",
      targetDate: null,
      tags: [],
      priority: null,
    },
    validationSchema: schemaTodoForm,
    onSubmit: (values) => {
      console.log("values", values);
      api.ApiRequest.createTodo(
        mapAppToApiTodosData({
          ...values,
          userId: userData.userId || "",
        })
      ).then((res) => {
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
            onChange={(e) => formik.setFieldValue("title", e.target.value)}
            value={formik.values.title ?? ""}
          />
          <InputTextarea
            id="description"
            placeholder="Описание..."
            autoResize
            value={formik.values.description}
            onChange={(e) =>
              formik.setFieldValue("description", e.target.value)
            }
            rows={1}
            cols={80}
          />
        </div>
        <div className={style.formButtons}>
          <CustomCalendarButton
            value={formik.values.targetDate}
            setValue={(value: Date | null) =>
              formik.setFieldValue("targetDate", value)
            }
          />
          <PriorityButton
            value={formik.values.priority}
            setValue={(value: number | null) =>
              formik.setFieldValue("priority", value)
            }
          />
          <Button
            type="button"
            label="Метки"
            outlined
            size="small"
            icon="pi pi-tag"
            disabled
            style={{
              padding: "0.3rem",
              fontWeight: "400",
            }}
          />
        </div>
        <div className={style.submitGroup}>
          <Button
            type="button"
            label="Отмена"
            severity="danger"
            onClick={() => formik.resetForm()}
          />
          <Button type="submit" label="Добавить задачу" severity="success" />
        </div>
      </form>
    </Card>
  );
};
