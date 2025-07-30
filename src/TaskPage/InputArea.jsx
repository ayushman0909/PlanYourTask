import React, { useState } from 'react'
import "./TaskPage.css";
import { toast } from "react-toastify";


const InputArea = ({allitems,setAllitems,setEditindex}) => {
  const[item,setItem]=useState("");
 
 
  const handleInput=()=>{
    const now=new Date();
    const newItems={
      task:item,
      postedDate: now.toLocaleDateString(),
      postedTime: now.toLocaleTimeString(),
      completedDate: "",
      completedTime: "",
      completed: false
      
  }
 
    if(allitems.some(itemToAdd=>itemToAdd.task.toLowerCase()===newItems.task.toLowerCase())){
     toast.error("Task Already Exist")
      return;
    }
    if(!item.trim()){
    toast.error(" Task cannot be empty")
     
      return;
    }
    toast.success("Task Sucessfully Added")
    setAllitems([...allitems,newItems])
    setItem("")
  }
   
 const handlekey=(e)=>{
  if(e.key=="Enter"){
    handleInput();
  }
 }
   
  return (
    <div className='InputArea'>
       <div className="input">
        <input type="text" className='taskInput' placeholder='Enter Your Task' value={item} onChange={(e)=>setItem(e.target.value)} onKeyDown={handlekey} onClick={()=>setEditindex(null)}/>
        <button className='addbtn'onClick={handleInput}>Add </button>
        
       </div>
      
       {/* {
        alert==="Empty" ? 
          (<h3 className='alert'>Task cannot be empty</h3>)
        :alert=="AlreadyExist" ? (<h3 className='alert'>Task already exist</h3> ):<></>
       } */}
    </div>
  )
}

export default InputArea
