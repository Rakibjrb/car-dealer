import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
