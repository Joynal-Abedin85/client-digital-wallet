import Login from "@/auth/Login";
import Register from "@/auth/Register";
import { PrivateRoute } from "@/components/authcompo/privateroute";
import Verify from "@/components/authcompo/Verify";
import commonlayout from "@/components/commonlayout";
import about from "@/pages/about";
import CashIn from "@/pages/agent/CashIn";
import CashOut from "@/pages/agent/Cashout";
import CommissionHistory from "@/pages/agent/CommisionHistory";
import contect from "@/pages/contect";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
import home from "@/pages/home";
import DashboardPage from "@/pages/maindashboard";
import Unauthorized from "@/pages/Unauthorized";
import Deposit from "@/pages/user/deposit";
import Profile from "@/pages/user/profile";
import Send from "@/pages/user/sendmoney";
import Transactions from "@/pages/user/transection";
import UserDashboard from "@/pages/user/userdashboard";
import Withdraw from "@/pages/user/withdraw";
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
        path: "contect",
      },
      {
        Component: faq,
        path: "faq",
      },
      {
        Component: Features,
        path: "features",
      },
    ],
  },

  {
    Component: Register,
    path: "register",
  },
  {
    Component: Login,
    path: "login",
  },
  {
    Component: Verify,
    path: "verify",
  },

  {
    Component: Unauthorized,
    path: "unauthorized",
  },
  {
    Component: DashboardPage,
    path: "d",
    children: [
      {
        path: "user/dashboard",
        element: (
          <PrivateRoute role="user">
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "user/send",
        element: (
          <PrivateRoute role="user">
            <Send />
          </PrivateRoute>
        ),
      },
      {
        path: "user/deposit",
        element: (
          <PrivateRoute role="user">
            <Deposit />
          </PrivateRoute>
        ),
      },
      {
        path: "user/withdraw",
        element: (
          <PrivateRoute role="user">
            <Withdraw />
          </PrivateRoute>
        ),
      },
      {
        path: "user/transactions",
        element: (
          <PrivateRoute role="user">
            <Transactions />
          </PrivateRoute>
        ),
      },
      {
        path: "user/profile",
        element: (
          <PrivateRoute role="user">
            <Profile />
          </PrivateRoute>
        ),
      },

      // { path: "agent/overview", element: <PrivateRoute role="agent"><AgentOverview /></PrivateRoute> },
      {
        path: "agent/cash-in",
        element: (
          <PrivateRoute role="agent">
            <CashIn />
          </PrivateRoute>
        ),
      },
      {
        path: "agent/cash-out",
        element: (
          <PrivateRoute role="agent">
            <CashOut />
          </PrivateRoute>
        ),
      },
      {
        path: "agent/commission",
        element: (
          <PrivateRoute role="agent">
            <CommissionHistory />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
