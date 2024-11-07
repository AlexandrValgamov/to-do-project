import { DefaultLayout, ExternalLayout } from "@/layout";
import { ErrorPage, Login, Main, Register } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage code={404} message="Страница не найдена" />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
  {
    path: "/auth",
    element: <ExternalLayout />,
    children: [
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: `*`,
        element: <Navigate to={"signin"} replace={true} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
