import type { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isProfileOpen, setIsProfileOpen] = useState(false); 
  const navigate = useNavigate();
    const location = useLocation(); // <-- current route ধরবে

  const user = useSelector((state: RootState) => state.auth.user);
    


  // Menu items
  const menuItems = [
    { label: "home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contect" },
    { label: "FAQ", path: "/faq" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
      ...(!user
    ? [{ label: "Login", path: "/login", className: "text-blue-600" }]
    : []),
  ];

    const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // ✅ Logout Handler
  const handleLogout = () => {
    // Clear tokens / user data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // if using redux -> dispatch(logout());
    // dispatch(logout());

    toast("logout sucsess")

    setIsProfileOpen(false);
    setIsMenuOpen(false);

    navigate("/login");
  };

  return (
    <header className="bg-white shadow relative z-50">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-teal-600 font-bold text-xl">
          digitalWALLET
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition ${
                    isActiveRoute(item.path)
                      ? "text-teal-600 font-semibold border-b-2 border-teal-600 pb-1"
                      : "text-gray-600 hover:text-gray-800"
                  } ${item.label === "login" ? "text-teal-800 bg-gray-300 py-2 px-3 rounded-full font-bold" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile + Mobile Button */}
        <div className="flex items-center gap-4">
          {/* Profile Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="rounded-full border overflow-hidden"
            >
              <img
                src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-menu-button-3d-icon-render-png-image_8541911.png"
                className="w-10 h-10 object-cover"
                alt="profile"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow rounded-md animate-fadeIn">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-50"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 border rounded"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow animate-slideDown">
          <ul className="flex flex-col gap-1 p-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-2 py-2 rounded ${
                    isActiveRoute(item.path)
                      ? "text-teal-600 font-semibold bg-teal-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Profile */}
            <li className="mt-3 border-t pt-3">
              <Link
                to="/dashboard"
                className="block px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-2 py-2 text-red-600 hover:bg-red-50 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
