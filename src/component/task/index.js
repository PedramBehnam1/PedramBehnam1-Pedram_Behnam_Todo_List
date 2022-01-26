import { useState , useEffect } from "react"
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import './index.css'


const Task=(props)=>{
const[edit,setEddit] = useState({
 id:props.task.id,
 TitleText:props.task.TitleText,
 descriptionText:props.task.descriptionText,
 status:props.task.status,
 iscomplete:props.task.iscomplete

})


const[update,setUpdate] = useState({
 id:null,
 TitleText:"",
 descriptionText:"",
 status:"",
 iscomplete:false

})

const[state,setState] = useState(false);
const [title , setTitle] = useState(''); 
const [description , setDescription] = useState('');
const[newStatus, setNewStatus]=useState('');



const handleOnClik = ()=>{
  setEddit({
   id:edit.id,
   TitleText:edit.TitleText,
   descriptionText:edit.descriptionText,
   status:edit.status,
   iscomplete: !edit.iscomplete
  });
  
  console.log(edit.iscomplete);
}


useEffect(()=>{
 localStorage.setItem(edit.id,JSON.stringify(edit));
},[edit]);


const updateTask = ()=>{
 setEddit({
  id:edit.id,
  TitleText:title,
  descriptionText:description,
  status:newStatus,
  iscomplete: edit.iscomplete
 });

 console.log(edit.status);

 setState(false);
}

const handleOnClik2 = ()=>{
 setState(!state);
 console.log(state);
}

const handleSubmit = (e)=>{
 e.preventDefault();
}

const handleChange = (e)=>{
 var name = e.target.name;
 var value = e.target.value;
 if (name == "title") {
 setTitle(value);
 }else if (name == "description") {
 setDescription(value); 
 }else if (name == "status") {
  setNewStatus(value); 
 }
}

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
   console.log("pppppppppppp")
 }
 return array;
}

const giveaNewId = ()=>{
 return Math.floor(Math.random() * 10000);
}

if (state) {
 return(
   <form className="editForm" onSubmit={handleSubmit}>
    <label className="edit task" >Add a new Task</label>
    
    <textarea type="text" cols="40" rows="2"  name="title"              onChange={handleChange} placeholder="Title" className="title"
    />
   
    <textarea type="text" cols="40" rows="5" name="description" onChange={handleChange}
    placeholder="Description" className="description"
    />
    <select  name="status"  defaultValue="vvvv" onChange={handleChange}>
    <option  value="" >Choose here</option>

    {
      
     checkStatus(edit.status).map((status)=>(
       
      <option key={giveaNewId()}  value={status}>{status}</option>
       
      ))
    } 
    </select>
    
    <button onClick={updateTask}>edit</button>
   </form>
  )
}


return(
 <div>

    <div  className="todo">
      <div className="p">
        <p>{edit.TitleText}</p>

        <p> {edit.descriptionText} </p> 
      </div>
    <div className="icons">
      <button className={edit.iscomplete? 'completedTask': 'oncompletedTask'} onClick={ handleOnClik}>{edit.status}</button>
      <RiCloseCircleLine />
      <TiEdit onClick={handleOnClik2} />
      
    </div>
    
   </div>


 </div>
)

}

export default Task;
