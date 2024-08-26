import "./theme/theme.scss";
import "./assets/css/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </StrictMode>
  </Provider>
);
