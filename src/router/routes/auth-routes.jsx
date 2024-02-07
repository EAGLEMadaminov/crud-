import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginPage, RegisterPage } from "../../pages/auth/index.js";
import AuthLayout from "../../layouts/auth/AuthLayout.jsx";

const authRoutes = {
  path: "auth",
  element: (
    <AuthLayout>
      <Suspense fallback={<>loading...</>}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  ),
  children: [
    {
      index: true,
      element: <Navigate to="/sign-in" />,
    },
    {
      path: "sign-in",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};

export default authRoutes;
