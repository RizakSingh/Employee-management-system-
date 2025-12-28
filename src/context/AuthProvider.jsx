import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
 import api from "../api/axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
  fetch(import.meta.env.VITE_API_BASE_URL + "/api/health")
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
  const res = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  setUser(res.data.user);
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
