import React, {useState} from 'react'
import "../AddTask/AddTask.css"

 const AddTask = (props) => {
     const [name, setName] = useState(" ");
     const [desc, setdesc] = useState(" ")


     const formData = {
        tasktID : name,
        taskDesc : desc
     }
    //  const name="vaibhav"
     

    //  console.log(formData)

     const addData = (e) => {
        //  console.log("Hii From Add Data funtion");
        e.preventDefault();
         props.getDataFromAddTask(formData)
         setName(" ")
         setdesc(" ")
     }

    return (
        <div className="form">
            <form className="form-contents">
               <div className='innerForm'>
                    <div>
                            <label>Name</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                    <div>
                            <label>Description</label>
                            <input type="text" onChange={(e)=> setdesc(e.target.value)} value={desc} />
                    </div>
               </div>
               <button className="add-btn" onClick={addData} >Add Task</button>
            </form>
        </div>
    )
}
export default AddTask;
