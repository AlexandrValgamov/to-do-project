import "./theme/theme.scss";
import "./assets/css/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./pages/main-page";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <PrimeReactProvider>
        <Main />
      </PrimeReactProvider>
    </StrictMode>
  </Provider>
);
