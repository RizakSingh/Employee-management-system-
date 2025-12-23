import React from 'react'

const TaskListNumbers = ({tasks}) => {
      const counts = {
    new: tasks.filter((t) => t.status === "new").length,
    accepted: tasks.filter((t) => t.status === "accepted").length,
    completed: tasks.filter((t) => t.status === "completed").length,
    failed: tasks.filter((t) => t.status === "failed").length,
  };
  return (
   <div className="flex mt-10 justify-between p-6 gap-5 w-screen">
 
           <Box count={counts.new} label="New" color="from-yellow-600 to-blue-900" />
      <Box count={counts.accepted} label="Accepted" color="from-purple-700 to-blue-950" />
      <Box count={counts.completed} label="Completed" color="from-green-700 to-blue-900" />
      <Box count={counts.failed} label="Failed" color="from-red-700 to-blue-900" />
    </div>
  )
}
const Box = ({ count, label, color }) => (
  <div className={`rounded-xl w-[45%] py-6 px-9 bg-gradient-to-b ${color} text-white shadow-lg`}>
    <h2 className="text-3xl font-semibold">{count}</h2>
    <h3 className="text-xl font-medium">{label}</h3>
  </div>
);

export default TaskListNumbers
