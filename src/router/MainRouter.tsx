import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/home/Home";
import Auth from "../screens/auth/Auth";
import NotFound from "../screens/not-found/NotFound";
import ProtectedLayout from "../components/layouts/protected-layout/ProtectedLayout";
import AuthLayout from "../components/layouts/auth-layout/AuthLayout";

export default function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Auth />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
