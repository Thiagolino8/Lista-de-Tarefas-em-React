import { render } from "preact";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")!
);
