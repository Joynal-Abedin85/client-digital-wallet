import Login from "@/auth/Login";
import Register from "@/auth/Register";
import adminlayout from "@/components/adminlayout";
import commonlayout from "@/components/commonlayout";
import about from "@/pages/about";
import analytics from "@/pages/analytics";
import home from "@/pages/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: commonlayout,
    path: "/",
    children: [
      {
        Component: home,
        path: "/",
      },
      {
        Component: about,
        path: "about",
      },
    ],
  },

  {
    Component: adminlayout,
    path: "admin",
    children: [
      {
        Component: analytics,
        path: "analytic",
      },
    ],
  },
  {
    Component: Register,
    path: "register"
  },
  {
    Component: Login,
    path: "login"
  }
]);
