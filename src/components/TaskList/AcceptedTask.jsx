import React from "react";
import api from "../../api/axios";
import TaskCard from "./TaskCard";

const AcceptedTask = ({ tasks, setTasks }) => {
  const acceptedTasks = tasks.filter(
    (task) => task.status === "accepted"
  );
  if (acceptedTasks.length === 0) return null;
  const updateStatus = async (id, status) => {
    const res = await api.patch(`/tasks/${id}/status`, { status });

    setTasks((prev) =>
      prev.map((t) => (t._id === id ? res.data : t))
    );
  };


  return (
    <>
    <section>
      <h2 className="text-white text-xl font-semibold mb-4">Accepted Tasks</h2>
      <div className="flex gap-5 overflow-x-auto">
        {acceptedTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            gradient="bg-gradient-to-b from-purple-700 to-blue-950"
          >
            <div className="flex gap-3">
              <button
                onClick={() => updateStatus(task._id, "completed")}
                className="bg-green-600 px-3 py-2 rounded"
              >
                Complete
              </button>
              <button
                onClick={() => updateStatus(task._id, "failed")}
                className="bg-red-600 px-3 py-2 rounded"
              >
                Fail
              </button>
            </div>
          </TaskCard>
        ))}
      </div>
      </section>
    </>
  );
};

export default AcceptedTask;
