import React from "react";
import api from "../../api/axios";
import TaskCard from "./TaskCard";

const NewTask = ({ tasks, setTasks }) => {
  const newTasks = tasks.filter((t) => t.status === "new");

  const acceptTask = async (id) => {
    const res = await api.patch(`/tasks/${id}/status`, {
      status: "accepted",
    });

    setTasks((prev) =>
      prev.map((t) => (t._id === id ? res.data : t))
    );
  };

  if (newTasks.length === 0) return null;

  return (
    <div className="flex gap-5 "> 
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
  );
};

export default NewTask;
