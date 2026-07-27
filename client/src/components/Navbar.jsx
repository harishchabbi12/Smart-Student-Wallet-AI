import { Menu, Bell, Search } from "lucide-react";

function Navbar({ title, onMenuClick }) {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="bg-white rounded-2xl shadow-md px-8 py-5 mb-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            {title}
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome back, {user.name || "Student"} 👋
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />

        </div>

        {/* Notification */}
        <button className="relative p-3 rounded-xl hover:bg-slate-100 transition">

          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">

          {user.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}

        </div>

      </div>

    </div>
  );
}

export default Navbar;