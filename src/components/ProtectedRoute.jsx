import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { QueueContext } from "../context/QueueContext";

function ProtectedRoute({ children, allowedRole }) {
  const { userRole } = useContext(QueueContext);

  // Not logged in
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // Logged in but wrong role
  if (userRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;