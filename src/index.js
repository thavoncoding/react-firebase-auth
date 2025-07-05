import "./index.css";
import ReactDom from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./App"

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

root.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
);