import style from "./style.module.scss";
import { useFormik } from "formik";
import api from "@/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { FormButton } from "@/components/form-button/form-button";
import { FormInput } from "@/components/form-input/form-input";
import { Link } from "react-router-dom";
import { classNames } from "primereact/utils";
import { storage } from "@/storage";

export const Register = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  document.title = "Регистрация";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      api.ApiRequest.createUser({
        email: values.email,
        password: values.password,
      })
        .then((data) => {
          storage.setUserData(data);
          navigate("/", { replace: true });
        })
        .catch(() => {
          console.error("login error");
        });
    },
  });

  return isAuth ? (
    <Navigate to="/" replace />
  ) : (
    <div className={style.login}>
      <h2 className={style.login__title}>Регистрация</h2>
      <form className={style.login__form} onSubmit={formik.handleSubmit}>
        <FormInput
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          type="email"
          label="Email"
        />
        <FormInput
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          type="password"
          label="Пароль"
        />
        <FormButton label="Регистрация" type="submit" />
        <Link
          className={classNames(style.login__link, "p-link")}
          to="/auth/signin"
        >
          войти
        </Link>
      </form>
    </div>
  );
};
