import React, { useEffect, useState } from "react";
import "./TaskPage.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
const ListItems = ({ allitems, setAllitems, editindex, setEditindex }) => {
  const[count,setCount]=useState(0);
  const updatedItems = [...allitems];
  useEffect(()=>{
    console.log(count);
  },[count])
  const handleComplete = (index) => {
    if (
      updatedItems[index].completedDate &&
      updatedItems[index].completedTime
    ) {
      updatedItems[index].completedDate = "";
      updatedItems[index].completedTime = "";
      updatedItems[index].completed=false;       
      setCount(prev => prev - 1);
      
    
    } 
    else {
      let now = new Date();
      updatedItems[index].completed=true; 
      updatedItems[index].completedDate = now.toLocaleDateString();
      updatedItems[index].completedTime = now.toLocaleTimeString();
     setCount(prev => prev + 1);
   
    }
    
    setAllitems(updatedItems);
  };
  const handleDelete = (index) => {
    let updatedItems = allitems.filter((item) => item != allitems[index]);
    setAllitems(updatedItems);
    setEditindex(null);
    toast.info("Task deleted!");
  };
  const [editedvalue, setEditedvalue] = useState("");
  const handleEdit = (index) => {
    setEditindex(index);
    setEditedvalue(updatedItems[index].task);
  };
  let saveEditedValue = (index) => {
    if(editedvalue!==""){
       const duplicateExists = allitems.some(
      (item, i) =>
        i !== index && item.task.toLowerCase() === editedvalue.toLowerCase()
    );

    if (duplicateExists) {
      // alert("Task already exists");
      toast.error("Task Already Exist")
      return;
  }
  else{
     updatedItems[index].task = editedvalue;
    setAllitems(updatedItems);
    setEditindex(null);
    setEditedvalue("");
       return
  }}
    
    else{
      // alert("task cannot be empty")
      toast.error("Task cannot be empty")
      return
    }
  };
  const [visibleTask, setVisibleTask] = useState(7);
  
  
  return (
    <div className="tableContainer">
      <table border={1}>
        <thead>
          <tr>
            <th rowSpan={2} colSpan={2}>
              Tasks
            </th>
            <th colSpan={2}>Posted On:</th>
            <th colSpan={2}>Completed On:</th>
            <th colSpan={2}>Action</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Date</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allitems.slice(0, visibleTask).map((item, index) => {
            return (
              <tr
                key={index}
                className={
                  item.completed ? "completedRow" : ""
                }
              >
                <td
                  colSpan={2}
                  className="task"
                  title="Click to mark as Completed"
                  onClick={() => handleComplete(index)
                  }
                >
                  {editindex === index ? (
                    <input
                      type="text"
                      className="editInputBox"
                      value={editedvalue}
                      onChange={(e) => setEditedvalue(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          saveEditedValue(index);
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    item.task
                  )}
                </td>
                <td>{item.postedDate}</td>
                <td>{item.postedTime}</td>
                <td>{item.completedDate}</td>
                <td>{item.completedTime}</td>
                <td>
                  <FaEdit
                    className="action"
                    onClick={() => handleEdit(index)}
                  />
                </td>
                <td>
                  <MdDelete
                    className="action"
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="rewards">
        
      </div>

      {visibleTask < allitems.length && (
        <button
          className="LoadMoreBtn"
          onClick={() => setVisibleTask(visibleTask + 4)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ListItems;
