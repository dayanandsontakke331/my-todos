import './App.css';
import AddTaskForm from './Components/AddTask/AddTaskForm';
import Tasks from "./Components/Tasks/Tasks"
import { useState } from 'react';

// const dummyData = [
//   {
//     tasktID : "Task1",
//     taskDesc : "Your First Task"
//   },
//   {
//     tasktID : "Task2",
//     taskDesc : "Your Second Task"
//   },
//   {
//     tasktID : "Task3",
//     taskDesc : "Your Third Task"
//   },
//   {
//     tasktID : "Task4",
//     taskDesc : "Your Forth Task"
//   }
// ]

function App() {

  // const [state, setstate] = useState(initialState)

  const dummyData = [
    // {
    //   tasktID : "Task1",
    //   taskDesc : "Your First Task"
    // },
    // {
    //   tasktID : "Task2",
    //   taskDesc : "Your Second Task"
    // },
    // {
    //   tasktID : "Task3",
    //   taskDesc : "Your Third Task"
    // },
    // {
    //   tasktID : "Task4",
    //   taskDesc : "Your Forth Task"
    // }
  ]

  const [taskData, settaskData] = useState(dummyData)


  const getDataFromAddTask = (data) => {
    console.log("from app")
    // console.log([{data}])
    settaskData([...taskData,data])
    
  }
  console.log(taskData)

  return (
    <div>
      <AddTaskForm getDataFromAddTask={getDataFromAddTask}/>
      {/* {taskData.map((taskList)=>  )} */}
      {taskData.length === 0 && <h1 className='message'> oops! NO Task Found... </h1>  }
      {
        taskData.map((row,index) => {
          return <Tasks  taskData ={row} key={index}  />
        })
      }
      
     
    </div>
  );
}

export default App;
