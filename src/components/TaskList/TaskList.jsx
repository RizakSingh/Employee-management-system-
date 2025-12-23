import React from 'react'
import NewTask from "./NewTask";
import AcceptedTask from "./AcceptedTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
const TaskList = ({tasks,setTasks}) => {
  return (
    <div id='tasklist' className='h-[45%] w-full py-6 px-7 overflow-x-auto mt-10 flex items-center justify-start gap-5 flex-nowrap '>
  <NewTask tasks={tasks} setTasks={setTasks} />
      <AcceptedTask tasks={tasks} setTasks={setTasks} />
      <CompleteTask tasks={tasks} />
      <FailedTask tasks={tasks} />
    </div>
  )
}

export default TaskList
