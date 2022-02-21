import React, {useState} from "react";
import "./Task.css";
const Tasks = (props) => {
  const getDataFromAddTask = (data) => {
    console.log(data);
  };

const [color, setcolor] = useState(" ")
const [textDecoration, settextDecoration] = useState(" ")

const changeColor = () => {
    setcolor("red")
    settextDecoration("line-through")
}

  return (
    <div className="taskItems">
      <div className="tasks">
        <h1 style={{color : color, textDecoration : textDecoration  }}> {props.taskData.tasktID} </h1>
        <p style={{color : color, textDecoration : textDecoration}}> {props.taskData.taskDesc} </p>
      </div>

      <div className="todos-btn">
        <button type="submit" className="addBtn" onClick={changeColor}>
          Complete
        </button>
        <button type="submit" className="dltBtn">
          Delete
        </button>
      </div>
    </div>
  );
};
export default Tasks;
