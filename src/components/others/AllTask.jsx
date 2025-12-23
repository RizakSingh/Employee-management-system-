import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await api.get("/admin/tasks");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="mt-10 px-7">
      <h2 className="text-2xl font-semibold text-white mb-6">
        All Tasks (Admin View)
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gradient-to-b from-black to-blue-900 text-white p-4 rounded-lg shadow"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded">
                {task.status.toUpperCase()}
              </span>
            </div>

            <p className="text-sm mt-1">{task.description}</p>

            <div className="flex justify-between mt-3 text-sm">
              <span>
                Assigned to:{" "}
                <strong>{task.assignedTo?.name || "N/A"}</strong>
              </span>
              <span>Priority: {task.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
