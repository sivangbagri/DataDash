import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVFwWmFZfVpgcV9CYFZTQ2YuP1ZhSXxXdkBhXn9bdHRXTmVbWEI="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <ContextProvider>
      <App />
    </ContextProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
