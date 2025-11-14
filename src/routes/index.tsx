import Login from "@/auth/Login";
import Register from "@/auth/Register";
import adminlayout from "@/components/adminlayout";
import Verify from "@/components/authcompo/Verify";
import commonlayout from "@/components/commonlayout";
import about from "@/pages/about";
import analytics from "@/pages/analytics";
import contect from "@/pages/contect";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
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
      {
        Component: contect,
        path : "contect"
      },
      {
        Component: faq,
        path: "faq"
      },
      {
        Component: Features,
        path: "features"
      }
    ],
  },

  {
    Component: adminlayout,
    path: "admin",
    children: [
      {
        Component: analytics,
        path: "analytics",
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
  },
  {
    Component: Verify,
    path: "verify"
  }
]);
