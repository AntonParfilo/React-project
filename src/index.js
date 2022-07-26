import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/bootstrap-grid.min.css";
import "./styles/main.css";
import App from "./App";
import { store } from "./redux/redux";
import { checkCart } from "./redux/cartSlice";
import { Provider } from "react-redux";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  );
store.dispatch(checkCart());
