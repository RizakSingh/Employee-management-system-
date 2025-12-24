import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/admin/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    await api.delete(`/admin/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div className="px-7">
      <h2 className="text-2xl font-semibold mb-6">All Tasks</h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gradient-to-b from-black to-blue-900 p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded">
                {task.status}
              </span>
            </div>

            <p className="text-sm mt-1">{task.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-sm">
                Assigned to: {task.assignedTo?.name || "N/A"}
              </span>

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-600 px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
