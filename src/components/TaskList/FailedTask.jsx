import React from "react";
import TaskCard from "./TaskCard";

const FailedTask = ({ tasks }) => {
  const failedTasks = tasks.filter(
    (task) => task.status === "failed"
  );

  if (failedTasks.length === 0) return null;

  return (
    <>
      <h2 className="text-white text-xl font-semibold">
        Failed Tasks
      </h2>
      <div className="flex gap-5 ">
        {failedTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            gradient="bg-gradient-to-b from-red-700 to-blue-900"
          />
        ))}
      </div>
    </>
  );
};

export default FailedTask;
