import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Login /> }, 
      { path: "dashboard", element: <Dashboard /> }, 



    ],
  },
]);

export default router;