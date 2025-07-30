import "./TaskPage.css";
import Heading from "./Heading"
import InputArea from "./InputArea";
import ListItems from "./ListItems";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";//chatgpt
import "react-toastify/dist/ReactToastify.css";//chatgpt
import Filter from "./FIlter";
const TaskPage = () => {
  const[allitems,setAllitems]=useState(()=>{
    const storedItems=localStorage.getItem("tasks");
    return storedItems ? JSON.parse(storedItems) :[];});
    
  
 
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(allitems));
  },[allitems])
  const[editindex,setEditindex]=useState(null);
  const[filteredTasks,setFilteredTasks]=useState();
   const[isActive,setIsActive]=useState("all");

const showAllTasks = () => {
  setFilteredTasks(undefined);
  setIsActive("all")
};
  const showCompletedTask=()=>{
    const completed = allitems.filter(task => task.completed === true);
    setFilteredTasks(completed);
    setIsActive("completed")
  }
   const showPendingTask=()=>{
    const Pending = allitems.filter(task => task.completed === false);
    setFilteredTasks(Pending);
    setIsActive("pending")
  }
 
 
  return <div className="TaskBackground">
  <div className="TaskPageMainContainer">
         <Heading/>
        <InputArea allitems={allitems} setAllitems={setAllitems} editindex={editindex} setEditindex={setEditindex}  />
        <div className="filterAndTable">
        <Filter showAllTasks={showAllTasks} showCompletedTask={showCompletedTask} showPendingTask={showPendingTask} isActive={isActive}/>
         <ListItems  allitems={filteredTasks !== undefined ? filteredTasks : allitems}  setAllitems={setAllitems} editindex={editindex} setEditindex={setEditindex}/></div>
         <ToastContainer position="top-center" autoClose={2000} /> 
  </div>
  </div>
};

export default TaskPage;