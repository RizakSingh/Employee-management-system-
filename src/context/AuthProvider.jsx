import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // ✅ Initialize data only once
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees } = getLocalStorage();
    setEmployees(employees || []);
  }, []);

  return (
    <AuthContext.Provider value={{ employees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
