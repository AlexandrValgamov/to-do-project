import { useFormik } from "formik";
import style from "./style.module.scss";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import api from "@/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { todosActions } from "@/store/slices/todos/todos.slice";

export const Form = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);
  const dispatch = useAppDispatch();
  const { addTodo } = todosActions;

  const frormik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      api.ApiRequest.createTodo({
        ...values,
        userId: userData?._id || "",
      }).then((res) => {
        dispatch(addTodo({ data: res.data }));
        console.log("res1", res);
      });
    },
  });

  return (
    <div>
      <form className={style.form} onSubmit={frormik.handleSubmit}>
        <div className={style.formInputs}>
          <InputText
            id="title"
            type="text"
            className="p-inputtext-sm"
            placeholder="Заголовок"
            onChange={frormik.handleChange}
            value={frormik.values.title}
          />
          <InputTextarea
            id="description"
            placeholder="Описание..."
            autoResize
            value={frormik.values.description}
            rows={2}
            cols={80}
            onChange={frormik.handleChange}
          />
        </div>
        <div className={style.formButtons}>
          <Button severity="success" raised icon="pi pi-check" type="submit" />
        </div>
      </form>
    </div>
  );
};
