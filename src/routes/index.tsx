import Login from "@/auth/Login";
import Register from "@/auth/Register";
import { PrivateRoute } from "@/components/authcompo/privateroute";
import Verify from "@/components/authcompo/Verify";
import commonlayout from "@/components/commonlayout";
import about from "@/pages/about";
import AgentOverview from "@/pages/agent/Agentoverview";
import AgentTransactions from "@/pages/agent/Agenttransection";
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
    path: "dashboard",
    children: [
      {
        path: "",
        element: (
          <PrivateRoute >
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "send",
        element: (
          <PrivateRoute role="user">
            <Send />
          </PrivateRoute>
        ),
      },
      {
        path: "deposit",
        element: (
          <PrivateRoute role="user">
            <Deposit />
          </PrivateRoute>
        ),
      },
      {
        path: "withdraw",
        element: (
          <PrivateRoute role="user">
            <Withdraw />
          </PrivateRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <PrivateRoute role="user">
            <Transactions />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute role="user">
            <Profile />
          </PrivateRoute>
        ),
      },

      // { path: "agent/overview", element: <PrivateRoute role="agent"><AgentOverview /></PrivateRoute> },
      {
        path: "cash-in",
        element: (
          <PrivateRoute role="agent">
            <CashIn />
          </PrivateRoute>
        ),
      },
      {
        path: "cash-out",
        element: (
          <PrivateRoute role="agent">
            <CashOut />
          </PrivateRoute>
        ),
      },
      {
        path: "commission",
        element: (
          <PrivateRoute role="agent">
            <CommissionHistory />
          </PrivateRoute>
        ),
      },

          {
      path: "overview",
      element: (
        <PrivateRoute role="agent">
          <AgentOverview />
        </PrivateRoute>
      )
    },
    {
      path: "transactionsagent",
      element: (
        <PrivateRoute role="agent">
          <AgentTransactions />
        </PrivateRoute>
      )
    }
    ],
  },
]);
