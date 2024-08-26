import { useFormik } from "formik";
import style from "./style.module.scss";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import api from "@/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { todosActions } from "@/store/slices/todos/todos.slice";
import { SelectButton } from "primereact/selectbutton";

export const Form = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);
  const dispatch = useAppDispatch();
  const { addTodo } = todosActions;

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "medium",
    },
    onSubmit: (values) => {
      console.log("values", values);
      api.ApiRequest.createTodo({
        ...values,
        userId: userData?._id || "",
      }).then((res) => {
        dispatch(addTodo({ data: res.data }));
      });
    },
  });

  const justifyOptions = [
    {
      icon: "pi pi-angle-double-up",
      value: "highest",
      color: "var(--theme-accent-100)",
    },
    { icon: "pi pi-angle-up", value: "high", color: "var(--theme-accent-60)" },
    { icon: "pi pi-equals", value: "medium", color: "var(--theme-orange-100)" },
    { icon: "pi pi-minus", value: "low", color: "var(--theme-green-100)" },
  ];

  const justifyTemplate = (option: (typeof justifyOptions)[number]) => {
    return <i className={option.icon} style={{ color: option.color }}></i>;
  };

  return (
    <div>
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
            rows={2}
            cols={80}
            onChange={formik.handleChange}
          />
          <SelectButton
            id="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            itemTemplate={justifyTemplate}
            optionLabel="value"
            options={justifyOptions}
          />
        </div>
        <div className={style.formButtons}>
          <Button aria-label="submit" icon="pi pi-check" type="submit" severity="success" />
        </div>
      </form>
    </div>
  );
};
