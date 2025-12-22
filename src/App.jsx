import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";
import AuthProvider from "./context/AuthProvider";

const AppContent = () => {
  const [userRole, setUserRole] = useState(null);
  const [loggedInEmployee, setLoggedInEmployee] = useState(null);

  const authData = useContext(AuthContext);


  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (savedUser?.role) {
  //     setUserRole(savedUser.role);
  //     if (savedUser.role === "employee") {
  //       setLoggedInEmployee(savedUser.employee);
  //     }
  //   }
  // }, []);

  const handleLogin = (email, password) => {
  
    if (email === "admin@example.com" && password === "123") {
      setUserRole("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    if (!authData?.employees || authData.employees.length === 0) {
      alert("Employee data not loaded");
      return;
    }


    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (!employee) {
      alert("Invalid credentials");
      return;
    }

    setUserRole("employee");
    setLoggedInEmployee(employee);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        employee: employee,
      })
    );
  };

  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}

      {userRole === "admin" && <AdminDashBoard />}

      {userRole === "employee" && (
        <EmployeeDashboard data={loggedInEmployee} />
      )}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
