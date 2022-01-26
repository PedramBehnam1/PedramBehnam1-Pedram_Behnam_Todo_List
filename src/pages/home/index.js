import React , {Component } from  'react';
import Header from '../../component/header'
import TaskList from '../../component/taskList';
import {getAllStorage} from "../../utils/localStorage";
import './index.css';


class Home extends Component {
 constructor(props) {
  super(props);

  // Initializing the state 
  this.state = { storage: [] };
 }
 
 componentDidMount(){
   setTimeout(() => {
    this.setState({ storage: getAllStorage() });
  }, 2000);
 };

 render() {
  return(
   <>
   <div className='header1'>
    <Header title= "Home page"/>
   </div>
   <TaskList allTasks = {this.state.storage}/>
   </>
  );
 }
}
export default Home;