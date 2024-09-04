import style from "./style.module.scss";
import { useFormik } from "formik";
import api from "@/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userActions } from "@/store/slices/user/user.slice";
import { FormInput } from "@/components/form-input";
import { FormButton } from "@/components/form-button";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setIsAuth } = userActions;
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      api.ApiRequest.login({
        username: values.username,
        password: values.password,
      })
        .then((data) => {
          console.log("response", data);
          dispatch(setIsAuth(true));
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
    <div>
      <h2 className={style.loginTitle}>Вход</h2>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <FormInput
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          type="text"
          label="Логин"
        />
        <FormInput
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          type="password"
          label="Пароль"
        />
        <FormButton label="Войти" type="submit" />
      </form>
    </div>
  );
};
