import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import Home from "../screens/home/Home";
import Auth from "../screens/auth/Auth";
import NotFound from "../screens/not-found/NotFound";

export default function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
      element: <Auth />,
    },
  ]);
  return <RouterProvider router={router} />;
}
