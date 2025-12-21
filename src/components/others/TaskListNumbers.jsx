import React from 'react'

const TaskListNumbers = () => {
  return (
   <div className="flex mt-10 justify-between p-6 gap-5 w-screen">
 
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-b from-yellow-600 to-blue-900 text-white shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-b from-purple-700 to-blue-950 text-white shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-b from-green-700 to-blue-900 text-white shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-b from-red-700 to-blue-900 text-white shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
