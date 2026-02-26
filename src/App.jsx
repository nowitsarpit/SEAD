import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";
import CounterPage from "./pages/CounterPage";
import AdminPage from "./pages/AdminPage";
import DisplayPage from "./pages/DisplayPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Customer Route */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRole="customer">
              <Layout>
                <CustomerPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Counter Route */}
        <Route
          path="/counter"
          element={
            <ProtectedRoute allowedRole="counter">
              <Layout>
                <CounterPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <Layout>
                <AdminPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Display Route */}
        <Route
          path="/display"
          element={
            <ProtectedRoute allowedRole="display">
              <Layout>
                <DisplayPage />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;