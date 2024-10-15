import "bulma/css/bulma.css";
import { createRoot, Root } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement: HTMLElement = document.getElementById("root")!;
const root: Root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
