import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router";
import type { RootState } from "@/redux/store";

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const role = user?.role || "user";

  // MENU ITEMS BASED ON ROLE
  const menuItems =
    role === "user"
      ? [
          { path: "/", label: "home " },
          { path: "/dashboard/profile", label: "Profile update" },
          { path: "/dashboard", label: "User Dashboard" },
          { path: "/dashboard/deposit", label: "Deposit" },
          { path: "/dashboard/withdraw", label: "Withdraw" },
          { path: "/dashboard/send", label: "Send Money" },
          { path: "/dashboard/transactions", label: "Transactions" },
        ]
      : role === "admin"
      ? [
          { path: "/dashboard/overview", label: "Overview" },
          { path: "/dashboard/manage-user", label: "Manage Users" },
          { path: "/dashboard/manage-agent", label: "Manage Agents" },
          { path: "/dashboard/profile-manage", label: "Profile Manage" },
          { path: "/dashboard/transactions", label: "All Transactions" },
        ]
      : [
          { path: "/", label: "home " },
          { path: "/dashboard", label: "Profile" },
          { path: "/dashboard/overview", label: "Overview" },
          { path: "/dashboard/cash-in", label: "Cash In" },
          { path: "/dashboard/cash-out", label: "Cash Out" },
          { path: "/dashboard/transactionsagent", label: "All Transactions" },
          { path: "/dashboard/commission", label: "Commission History" },
          
        ];

        const location = useLocation()

  return (
  <div className="flex min-h-screen">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6 uppercase">{role} Panel</h2>

        <ul className="space-y-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path; // active check
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-blue-900" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
