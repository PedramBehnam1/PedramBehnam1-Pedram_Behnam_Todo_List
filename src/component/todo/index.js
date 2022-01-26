import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TaskForm from "../taskForm";
import './index.css'

const ToDo = (props)=>{

  const [edit,setEdit] = useState({
    id:null,
    TitleText:'',
    descriptionText:'',
    status:'',
    state:false
  });

  // for (let index = 0; index < props.allTasks.length; index++) {
  //   const task = props.allTasks[index];
  //   let[status,setStatus] = useState(task.iscomplete);
  //   task.setStatus = setStatus
    
  // }

  


  const submitUbdate = (TitleText,descriptionText)=>{
    props.updateTodo(edit.id,TitleText,descriptionText,edit.status);
    setEdit({
      id:null,
      TitleText:'',
      descriptionText:'',
      status:''
    });
  };

  const checkStatus = (status)=>{
    let array = [];
    if (status === 'ToDo') {
      array.push('inprogress');
            
    }else if(status === 'inprogress'){
      array.push('InQA');
      array.push('Blocked');
    }else if(status === 'Blocked'){
      array.push('ToDo');
    }else if(status === 'InQA'){
      array.push('ToDo');
      array.push('Done');
    }else if(status === 'Done'){
      array.push('Deployed');
    }
    return array;
  }

  const handleChange = (e)=> {
    console.log("Fruit Selected!!");
    setEdit({ status: e.target.value });
  }


  if (edit.id) {
    console.log('hi');
    let array = checkStatus(edit.status);
    <>
    <select value={this.edit.status} onChange={handleChange}>
      {array.map(index =>(
        <option value="">{index}</option>
      ))

      }
    </select>
    <TaskForm edit={edit} onSubmit={submitUbdate} />
    </>
  }

  const saveDataWithID = (task,taskId)=>{
    // setKey(Math.floor(Math.random() * 10000));
    
    localStorage.setItem(taskId,JSON.stringify(task));
    
    
   }
  const handleOnClick = (task)=>{
    task.iscomplete = !task.iscomplete;
    
    var array = {
      id:task.id,
      TitleText:task.TitleText,
      descriptionText:task.descriptionText,
      status:task.status,
      iscomplete:!task.iscomplete
    }
   saveDataWithID(array,array.id);  

    console.log(array.iscomplete);
  }

//() => setEdit({id:task.id, TitleText:task.TitleText, descriptionText:task.descriptionText,status:task.status})

  

    



  return props.allTasks.map((task , index)=>(
   <div key={index} className="todo">
      <div className="p">
        <p>{task.TitleText}</p>

         <p> {task.descriptionText} </p> 
      </div>
    <div className="icons">
      <button className={task.iscomplete? 'completedTask': 'oncompletedTask'} onClick={ ()=>{task.iscomplete = task.iscomplete}}>{task.status}</button>
      <RiCloseCircleLine />
      <TiEdit  />
      
    </div>

   </div>
  )); 
   
  


}

export default ToDo;