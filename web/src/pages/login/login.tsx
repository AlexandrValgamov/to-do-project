import style from "./style.module.scss";
import { useFormik } from "formik";
import api from "@/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userActions } from "@/store/slices/user/user.slice";
import { FormInput } from "@/components/form-input/form-input";
import { FormButton } from "@/components/form-button/form-button";
import { Link } from "react-router-dom";
import { storage } from "@/storage";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setIsAuth } = userActions;
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  document.title = "Login";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);

      api.ApiRequest.login({
        email: values.email,
        password: values.password,
      })
        .then((data) => {
          storage.setUserData(data);
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
    <div className={style.login}>
      <h2 className={style.login__title}>Вход</h2>
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
        <FormButton label="Войти" type="submit" />
        <Link className={style.login__link} to="/auth/signup">
          регистрация
        </Link>
      </form>
    </div>
  );
};
