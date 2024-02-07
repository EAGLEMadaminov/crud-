import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
axios.defaults.baseURL = " http://localhost:3000";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer autoClose={2000} pauseOnHover theme="light" />
  </>
);
