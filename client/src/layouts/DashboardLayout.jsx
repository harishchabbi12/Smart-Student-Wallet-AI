import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Transactions",
      icon: Wallet,
      path: "/transactions",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
    {
      name: "AI Advisor",
      icon: Sparkles,
      path: "/ai",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <aside className="w-72 bg-slate-900 text-white flex flex-col shadow-xl">

        {/* Logo */}

        <div className="p-8 border-b border-slate-700">

          <h1 className="text-2xl font-bold tracking-wide">
            💰 Smart Wallet
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Student Finance Assistant
          </p>

        </div>

        {/* Menu */}

        <nav className="flex-1 p-5 space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </nav>

        {/* Logout */}

        <div className="p-5 border-t border-slate-700">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-semibold"
          >
            <LogOut size={18} />

            Logout
          </button>

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 p-10 overflow-y-auto">

        {children}

      </main>

    </div>
  );
}

export default DashboardLayout;