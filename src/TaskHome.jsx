import { useState } from 'react';
import './App.css';
import { Task } from './components/Task';


export function TaskHome() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const [count, setCount] = useState(1)
  const handleChange = (event) =>{
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    let newTask = {
      id:count,
      title:task,
      isCompleted:false
    }
    setTasks([...tasks , newTask]);
    setCount(count+1)
  }

  const deleteTask = (id) =>{
    let newTasks = tasks.filter((task) =>{
      if(task.id === id){
        return false
      }
      else{
        return true
      }
    })

    setTasks(newTasks)
  }

  const completeTask = (id) =>{
    setTasks(
      tasks.map((task)=>{
        if(task.id === id){
          return {...task, isCompleted:true}
        }
        else{
          return task
        }
      })
    )
  }


  return (
    <div className="App">
      <div className="addTask">
        <input type='text' placeholder='Add task...' onChange={handleChange} />
        <button onClick={handleSubmit}>Add Task</button>
      </div>

      <div className="taskList">
        <ul>
        {
          tasks.map((task,key)=>{
            return <Task task = {task} key = {key} completeTask = {completeTask} deleteTask = {deleteTask} />
          })
        }
        </ul>
      </div>
    </div>
  );
}
