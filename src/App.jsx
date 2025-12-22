import React, { useEffect, useState, useContext } from 'react';
import Login from './components/auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashBoard from './components/Dashboard/AdminDashBoard';
import { AuthContext } from './context/AuthProvider';
import AuthProvider from './context/AuthProvider';

const AppContent = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  console.log("Employee Data Loaded:", authData?.employees);

  useEffect(() => {
    if (authData) {
      const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (savedUser) {
        setUser(savedUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      console.log("this is admin");
    } else if (authData?.employees?.find(e => e.email === email && e.password === password)) {
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      console.log("this is user");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashBoard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
