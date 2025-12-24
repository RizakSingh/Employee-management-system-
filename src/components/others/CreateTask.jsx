import React, { useEffect, useState } from "react";
import api from "../../api/axios"; // ✅ your axios instance
import AllTask from "./AllTask";

const CreateTask = () => {
  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignedTo: "",
    category: "",
  });

  // 🔽 Fetch employees for dropdown
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/admin/employees");
        setEmployees(res.data);
      } catch (err) {
        console.error("Failed to fetch employees", err);
      }
    };

    fetchEmployees();
  }, []);

  // 🔁 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📤 Submit task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks/create",form);

      alert("Task created successfully");

      // 🔄 Reset form
      setForm({
        title: "",
        description: "",
        dueDate: "",
        assignedTo: "",
        category: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Task creation failed");
    }
  };

  return (
    <>
      <div className="w-[96.5%] ml-7 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-7">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Create a Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-300 mb-2">Task Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              type="text"
              placeholder="Make a UI design"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-300 mb-2">Date</label>
            <input
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              type="date"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-gray-300 mb-2">Assign to</label>
            <select
              name="assignedTo"
              value={form.assignedTo}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.name || "Employee"} ({emp.email})
                </option>
              ))}
            </select>
          </div>
           <div>
          <label className="block text-gray-300 mb-2">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter task details..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>

    
    </>
  );
};

export default CreateTask;
