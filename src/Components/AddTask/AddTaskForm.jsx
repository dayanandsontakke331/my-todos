import React from 'react';
import "../AddTask/AddTaskForm.css"
import AddTask from './AddTask';

 const AddTaskForm = (props) => {

    const getDataFromAddTask = (data) => {
        // console.log("add task formS");
        console.log(data)
        props.getDataFromAddTask(data)
      }


    return (
        <div className="taskForm">
            <AddTask getDataFromAddTask={getDataFromAddTask}  />
        </div>
    )
}
export default AddTaskForm;
        