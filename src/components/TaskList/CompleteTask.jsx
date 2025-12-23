import React from "react";
import TaskCard from "./TaskCard";

const CompleteTask = ({ tasks }) => {
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  );

  if (completedTasks.length === 0) return null;

  return (
    <>
      <h2 className="text-white text-xl font-semibold">
        Completed Tasks
      </h2>
      <div className="flex gap-5 ">
        {completedTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            gradient="bg-gradient-to-b from-green-700 to-blue-900"
          />
        ))}
      </div>
    </>
  );
};

export default CompleteTask;
