import React,{ useState , useEffect } from "react";
import './index.css';

const TaskForm = (props)=>{
 const [title , setTitle] = useState(''); 
 const [description , setDescription] = useState('');


 const handleSubmit = (e) =>{
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    TitleText:title,
    descriptionText:description,
    status:"ToDo",
    iscomplete:false,
    
  });
  
  setTitle('');
  setDescription('');
  
 }


 const handleChange = (e) =>{
   
  var name = e.target.name;
  var value = e.target.value;
  if (name == "title") {
  setTitle(value);
  }else if (name == "description") {
  setDescription(value); 
  }


 }

 // useEffect(()=>{
 //  console.log(title);
  
 // },[title]);

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <label className="addLabel" >Add a new Task</label>
    
    <textarea type="text" cols="40" rows="2"  name="title"              onChange={handleChange} placeholder="Title" className="title"
    />
    
    <textarea type="text" cols="40" rows="5" name="description" onChange={handleChange}
    placeholder="Description" className="description"
    />
    
    <button>add</button>
   </form>
  </div>
 );
}

export default TaskForm;