import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import UsersLayout from "../../layouts/users/UsersLayout";
import {
  UsersPage,
  AddUserPage,
  UpdateUserPage,
} from "../../pages/users/index.js";
import AuthGuard from "../../features/auth/AuthGuard.jsx";

const UserRoutes = {
  path: "",
  element: (
    <AuthGuard>
      <UsersLayout>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </UsersLayout>
    </AuthGuard>
  ),
  children: [
    {
      path: "/users",
      children: [
        {
          index: true,
          element: <UsersPage />,
        },
        {
          path: "add",
          element: <AddUserPage />,
        },
        {
          path: "user/:id",
          element: <UpdateUserPage />,
        },
      ],
    },
  ],
};

export default UserRoutes;
