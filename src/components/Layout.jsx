import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function Layout({ children }) {
  const { userRole, setUserRole } = useContext(QueueContext);
  const location = useLocation();

  const handleLogout = () => {
    setUserRole(null);
    window.location.href = "/";
  };

  const navItems = {
    customer: [{ name: "Dashboard", path: "/customer" }],
    counter: [{ name: "Counter", path: "/counter" }],
    admin: [{ name: "Admin", path: "/admin" }],
    display: [{ name: "Display", path: "/display" }],
  };

  if (!userRole) return children;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-8 text-indigo-400">
          SmartQueue
        </h1>

        <nav className="space-y-3">
          {navItems[userRole]?.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 text-gray-900 p-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;