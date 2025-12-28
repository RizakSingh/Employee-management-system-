import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
 import api from "../api/axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
  fetch(import.meta.env.VITE_API_BASE_URL + "/health")
    .catch(() => {});

  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (storedUser && token) {
    setUser(JSON.parse(storedUser));

    // ✅ restore token after refresh
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  setLoading(false);
}, []);

  // 🔐 LOGIN (backend)
 const login = async (email, password) => {
  try {
    setAuthLoading(true);

    const res = await api.post("/auth/login", {
      email,
      password,
    });

    // store auth data
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // set token globally for axios
    api.defaults.headers.common["Authorization"] =
      `Bearer ${res.data.token}`;

    setUser(res.data.user);
  } catch (error) {
    throw error; // Login.jsx catch karega
  } finally {
    setAuthLoading(false);
  }
};


  // 🚪 LOGOUT
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
