import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import type { RootState } from "@/redux/store";

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const role = user?.role || "user";

  // MENU ITEMS BASED ON ROLE
  const menuItems =
    role === "user"
      ? [
          { path: "/d/user/dashboard", label: "User Dashboard" },
          { path: "/d/user/deposit", label: "Deposit" },
          { path: "/d/user/withdraw", label: "Withdraw" },
          { path: "/d/user/send", label: "Send Money" },
          { path: "/d/user/transactions", label: "Transactions" },
          { path: "/d/user/profile", label: "Profile" },
          {path: "/", label: "home "}
        ]
      : role === "admin"
      ? [
          { path: "/d/admin/overview", label: "Overview" },
          { path: "/d/admin/manage-user", label: "Manage Users" },
          { path: "/d/admin/manage-agent", label: "Manage Agents" },
          { path: "/d/admin/profile-manage", label: "Profile Manage" },
          { path: "/d/admin/transactions", label: "All Transactions" },
        ]
      : [
    // { path: "/d/agent/overview", label: "Overview" },
    { path: "/d/agent/cash-in", label: "Cash In" },
    { path: "/d/agent/cash-out", label: "Cash Out" },
    // { path: "/d/agent/transactions", label: "All Transactions" },
    { path: "/d/agent/commission", label: "Commission History" },
    // { path: "/d/agent/profile", label: "Profile" },
        ];

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6 uppercase">{role} Panel</h2>

        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block px-3 py-2 rounded hover:bg-gray-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
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
