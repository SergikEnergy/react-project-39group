import React from "react";

import { createRoot } from "react-dom/client";
import { App } from "./App";

import CssBaseline from "@mui/material/CssBaseline";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>
)
;
