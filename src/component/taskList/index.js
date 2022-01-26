import { useState , useEffect } from "react";
import TaskForm from "../taskForm";
import { getAllStorage } from "../../utils/localStorage";
import './index.css';
import ToDo from '../todo';
import Task from "../task";


const TaskList = (props) =>{
  const[tasks,setTasks] = useState([]);
  const[key,setKey] = useState('');


  const addTask = (task)=>{
    console.log(1);
    if (!task.TitleText || /^\s*$/.test(task.TitleText) || !task.descriptionText || /^\s*$/.test(task.descriptionText)) {
      return;
    }
    
    var newTasks = [];
    
    saveData(task);
    console.log(task);
    
    for (let index = 0; index < 10; index++) {
    } 
    console.log(88888888888888); 
    newTasks = getAllStorage();
    setTasks(newTasks);
    console.log(5555);
    //console.log(...props.allTasks);
   //getDataa();
  }

 useEffect(()=>{
 console.log(...tasks);
  console.log(5555);
//  tasks.map(item =>{
//   console.log(1);
//   console.log(item.TitleText);
// });
 },[tasks]);



 const saveData = (task)=>{
  // setKey(Math.floor(Math.random() * 10000));
  
  localStorage.setItem(task.id,JSON.stringify(task));
  
  
 }

 const saveDataWithID = (task,taskId)=>{
  // setKey(Math.floor(Math.random() * 10000));
  
  localStorage.setItem(taskId,JSON.stringify(task));
  
  
 }

 const getData = ()=>{
   var i = localStorage.getItem(1648)
   var myArray = i.split(',');
  console.log(...myArray);

}

  // const allStorage = ()=>{
  //   var result = false;
  //   var keys = Object.keys(localStorage),
  //   i = keys.length;
  //   var newTasks = [];
  //   while ( i-- ) {
  //    //console.log(localStorage.getItem(keys[i]));
  //    newTasks.push(JSON.parse(localStorage.getItem(keys[i])));
  //     result = true;
  //   }
  //   setTasks();
  //  // console.log(...newTasks);
  //   return newTasks;   
  // }


  const checkTasks = ()=>{
    var newTasks =[];
    var length = props.allTasks.length;
    var length1 = tasks.length; 
    if (length <length1) {
      return tasks;
    }else{
      console.log(props.allTasks);
      return props.allTasks;
    }

  }
   
  

  const updateTodo = (task,id)=>{
    if (!task.TitleText || /^\s*$/.test(task.TitleText) || !task.descriptionText || /^\s*$/.test(task.descriptionText)) {
      return;
    }

    var newTasks = [];
    saveDataWithID(task,id);

    for (let index = 0; index < 10; index++) {
    } 
    newTasks = getAllStorage();
    setTasks(newTasks);
  };

  const updateData =(task)=>{
    // var array = {id:task.id, TitleText:task.TitleText,
    //   descriptionText:task.descriptionText,
    //   status:task.status,
    //   iscomplete:task.iscomplete
    // }
    console.log(task.iscomplete);
    // saveDataWithID(task,array.id);
  };

 return(

  <>
    <div className="form">
    <TaskForm onSubmit ={addTask} />
    <p className="tasks">Tasks</p>
    </div>
    
    <div className="div1">
      {/* <ToDo allTasks={checkTasks()}  /> */}
      {checkTasks().map((task , index) => (
        
        <Task task={task} index={index}  key={task.id}/>
        
      ))}
      
      {/* {checkTasks().map( (item) =>(
         <div className="div2">
        <p key={item.id}>{item.TitleText}  </p>
        <p> {item.descriptionText}</p>
        </div>
      ))} */}
    
    </div>
  </>
  ); 

}
export default TaskList;