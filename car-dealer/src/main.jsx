import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";

import "./index.css";
import DataProvider from "./DataProvider/DataProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes}>
            <App />
          </RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>
);
