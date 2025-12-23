import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import Footer from '../others/Footer';
import AllTask from '../others/AllTask';
import CreateEmployee from '../others/CreateEmployee';
const AdminDashBoard = () => {
    
  return (<>
  
    <div className='bg-gradient-to-b  from-black to-blue-950  text-white '>
         <Header ></Header>
           <CreateEmployee />
   <CreateTask/>
   <AllTask/>
<Footer></Footer>
    </div>
 
    </>
  )
}

export default AdminDashBoard
