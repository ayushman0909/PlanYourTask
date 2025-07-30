import React, { useState } from "react";
import "./TaskPage.css";
const Filter = ({ showAllTasks, showCompletedTask, showPendingTask ,isActive}) => {
 
  return (
    <div className="filterContainer">
      <button
        className={`Filterbtn ${isActive=="all" ?"highlight":""}`}
        onClick={showAllTasks}
      >
        ALL
      </button>
      <button className={`Filterbtn ${isActive=="completed" ?"highlight":""}`} onClick={showCompletedTask}>
        Completed
      </button>
      <button className={`Filterbtn ${isActive=="pending" ?"highlight":""}`} onClick={showPendingTask}>
        Pending
      </button>
    </div>
  );
};

export default Filter;
