import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home"; //deafult (não preciso colocar os {})
import { GlobalStyles } from "./styles/GlobalStyles.js";

//export sem deafult

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
