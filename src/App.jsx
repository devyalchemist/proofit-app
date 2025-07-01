import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./ui/header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Main from "./pages/Main";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import Feeds from "./pages/Feeds";
import Tracking from "./pages/Tracking";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
  {
    Component: Login,
    errorElement: <PageNotFound />,
    path: "/login",
  },
  {
    Component: SignUp,
    path: "/sign-up",
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        Component: Settings,
        path: "settings",
      },
      {
        Component: Feeds,
        path: "feeds",
      },
      {
        path: "tracking",
        Component: Tracking,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
