import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { useEffect,useState } from 'react'
import api from "../../api/axios"
const EmployeeDashboard = ({data}) => {
     const [tasks, setTasks] = useState([]);

     
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks/my");
        setTasks(res.data);
      } catch (err) {
        console.error("Failed to load tasks", err);
      }
    };

    fetchTasks();
  }, []);
  return (
    <div className=' h-screen w-screen  bg-gradient-to-b from-black to-blue-900'>
      <Header />
     < TaskListNumbers tasks= {tasks}/>
     <TaskList tasks= {tasks} setTasks= {setTasks}/>
    </div>
  )
}

export default EmployeeDashboard
