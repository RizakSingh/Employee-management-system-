import React from "react";
import TaskCard from "./TaskCard";

const CompleteTask = ({ tasks }) => {
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  );

  if (completedTasks.length === 0) return null;

  return (
    <><section>
      <h2 className="text-white text-xl font-semibold mb-4">
        Completed Tasks
      </h2>
      <div className="flex gap-5 overflow-x-auto ">
        {completedTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            gradient="bg-gradient-to-b from-green-700 to-blue-900"
          />
        ))}
      </div>
      </section>
    </>
  );
};

export default CompleteTask;
