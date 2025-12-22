import React from 'react'
import AllTask from './AllTask'

const CreateTask = () => {
  return (<>
    <div className="w-[96.5%] ml-7  bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-7 ">
        <h2 className="text-2xl font-semibold text-white mb-6">Create a Task</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Task Title */}
          <div>
            <label className="block text-gray-300 mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-300 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-gray-300 mb-2">Assign to</label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              rows="4"
              placeholder="Enter task details..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition"
            >
              Create Task
            </button>

          </div>
        </form>
      </div>
      </>
  )
}

export default CreateTask
