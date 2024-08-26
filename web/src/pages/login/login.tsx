import style from "./style.module.scss";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import api from "@/api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      api.ApiRequest.login({
        name: values.username,
        password: values.password,
      })
        .then(() => {
          // handleAuthorize(email);
          // resetForm();
          navigate("/", { replace: true });
        })
        .catch(() => {
          console.error("login error");
        });
    },
  });

  return (
    <div>
      <div className={style.loginTitle}>Вход</div>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <FloatLabel>
          <InputText
            id="username"
            type="text"
            className="p-inputtext-sm"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="username">Логин</label>
        </FloatLabel>
        <FloatLabel>
          <InputText
            id="password"
            type="password"
            className="p-inputtext-sm"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="password">Пароль</label>
        </FloatLabel>
        <div className={style.formButton}>
          <Button label="Submit" type="submit" severity="success" />
        </div>
      </form>
    </div>
  );
};
