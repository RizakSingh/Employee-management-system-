import React from "react";

const TaskCard = ({ task, gradient, children }) => {
  return (
    <div
      className={`flex-shrink-0 h-full w-[340px] ${gradient} shadow-lg shadow-black rounded-2xl text-white`}
    >
      <div className="flex justify-between items-center p-5 text-white">
        <h3 className="bg-red-600 font-semibold px-3 py-1.5 shadow-sm shadow-black text-sm rounded-sm">
          {task.category || "High"}
        </h3>

        <h4 className="text-sm">
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No date"}
        </h4>
      </div>

      <h2 className="mt-3 text-2xl font-semibold ml-4 mr-4">
        {task.title}
      </h2>

      <p className="mt-2 text-sm p-4">{task.description}</p>

      {/* Buttons injected here */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default TaskCard;
