import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Main from "./pages/Main";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import Feeds from "./pages/Feeds";
import Tracking from "./pages/Tracking";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
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
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              fontFamily: "Montserrat",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
