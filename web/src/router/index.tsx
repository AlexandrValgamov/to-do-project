import { DefaultLayout, ExternalLayout } from "@/layout";
import { ErrorPage, Login, Main, Register } from "@/pages";
import { createBrowserRouter, Navigate,  } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: `/`,
        element: <Main />,
      },
      {
        path: `*`,
        element: <ErrorPage code={404} message="Страница не найдена" />,
      },
    ],
  },
  {
    path: "/auth",
    element: <ExternalLayout />,
    children: [
      {
        path: `/auth/signin`,
        element: <Login />,
      },
      {
        path: `/auth/signup`,
        element: <Register />,
      },
      {
        path: `*`,
        element: <Navigate to={`/signin`} replace={true} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
