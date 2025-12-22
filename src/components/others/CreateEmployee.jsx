import React, { useState } from "react";
import api from "../../api/axios";

const CreateEmployee = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/api/admin/create-employee", form);
      alert("Employee created successfully");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[96.5%] ml-7 mt-6  mb-7 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-7">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Create Employee
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <input
          name="email"
          type="email"
          placeholder="Employee Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <input
          name="password"
          type="password"
          placeholder="Temporary Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            {loading ? "Creating..." : "Create Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
