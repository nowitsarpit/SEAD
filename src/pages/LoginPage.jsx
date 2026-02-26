import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function LoginPage() {
  const navigate = useNavigate();
  const { setUserRole } = useContext(QueueContext);

  const handleLogin = (role, path) => {
    setUserRole(role);
    navigate(path);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-4 w-72">
        <button
          onClick={() => handleLogin("customer", "/customer")}
          className="bg-blue-500 w-full px-6 py-3 rounded-lg"
        >
          Customer
        </button>

        <button
          onClick={() => handleLogin("counter", "/counter")}
          className="bg-green-500 w-full px-6 py-3 rounded-lg"
        >
          Counter
        </button>

        <button
          onClick={() => handleLogin("admin", "/admin")}
          className="bg-purple-500 w-full px-6 py-3 rounded-lg"
        >
          Admin
        </button>

        <button
          onClick={() => handleLogin("display", "/display")}
          className="bg-gray-600 w-full px-6 py-3 rounded-lg"
        >
          Display
        </button>
      </div>
    </div>
  );
}

export default LoginPage;