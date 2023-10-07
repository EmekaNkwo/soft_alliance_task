import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorItemBgSelected: "#4baa79",
              colorItemTextSelected: "#4baa79",
              fontSizeIcon: 30,
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
