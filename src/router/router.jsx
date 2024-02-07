import { createBrowserRouter, Navigate } from "react-router-dom";
import { authRoutes, usersRoutes } from "./routes/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="users" />,
  },
  authRoutes,
  usersRoutes,
  {
    path: "*",
    element: <Navigate to="404" />,
  },
  {
    path: "/404",
    element: <h1>Page not found</h1>,
  },
]);

export default router;
