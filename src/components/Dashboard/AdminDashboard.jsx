import React, { useState } from "react";
import Header from "../others/Header";
import CreateEmployee from "../others/CreateEmployee";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import Footer from "../others/Footer";

const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState("task");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white">
      <Header />

      {/* Tabs */}
      <div className="flex gap-4 px-7 mt-6">
        <TabButton
          label="Create Employee"
          active={activeTab === "employee"}
          onClick={() => setActiveTab("employee")}
        />
        <TabButton
          label="Create Task"
          active={activeTab === "task"}
          onClick={() => setActiveTab("task")}
        />
        <TabButton
          label="All Tasks"
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        />
      </div>

      {/* Content */}
      <div className="mt-10">
        {activeTab === "employee" && <CreateEmployee />}
        {activeTab === "task" && <CreateTask />}
        {activeTab === "all" && <AllTask />}
      </div>

      <Footer />
    </div>
  );
};

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded transition font-medium ${
      active ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
    }`}
  >
    {label}
  </button>
);

export default AdminDashBoard;
