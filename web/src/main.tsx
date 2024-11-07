import "@/theme/soho-dark/theme.scss";
import "@assets/css/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { addLocale, PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import * as loc from "primelocale/ru.json"
addLocale('ru', loc.ru)

const value = {
    locale: 'ru'
}
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <PrimeReactProvider value={value}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </StrictMode>
  </Provider>
);
