import React from "react";
import api from "../../api/axios";
import TaskCard from "./TaskCard";

const NewTask = ({ tasks, setTasks }) => {
  const newTasks = tasks.filter((t) => t.status === "new");
  if (newTasks.length === 0) return null;

  const acceptTask = async (id) => {
    const res = await api.patch(`/tasks/${id}/status`, {
      status: "accepted",
    });

    setTasks((prev) =>
      prev.map((t) => (t._id === id ? res.data : t))
    );
  };

  return (
    <section>
      <h2 className="text-white text-xl font-semibold mb-4">
        New Tasks
      </h2>

      <div className="flex gap-5 overflow-x-auto">
        {newTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            gradient="bg-gradient-to-b from-blue-700 to-blue-950"
          >
            <button
              onClick={() => acceptTask(task._id)}
              className="bg-green-600 px-4 py-2 rounded"
            >
              Accept Task
            </button>
          </TaskCard>
        ))}
      </div>
    </section>
  );
};

export default NewTask;
