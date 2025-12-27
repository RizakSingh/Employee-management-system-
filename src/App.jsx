import React, { useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { user, loading } = useContext(AuthContext);

  // while checking token / restoring session
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // not logged in
  if (!user) {
    return <Login />;
  }

  // role-based rendering
  if (user.role === "admin") {
    return <AdminDashboard />;
  }

  return <EmployeeDashboard data={user}  />;
};

export default App;
