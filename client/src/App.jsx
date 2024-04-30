import { useState,useEffect } from 'react'
import './App.css'
import Taskhome from './pages/Home'
import { Link } from 'react-router-dom'

function App() {
  const [tasks,setTasks]=useState([])

  const fetchTasks=async ()=>{
    const response =await fetch('http://127.0.0.1:8000/todo/')
    const data=await response.json()

    setTasks(data)
  }

  useEffect(()=>{
    fetchTasks()
  },[])

  console.log(tasks)

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <h1 className='text-center text-[30px]'>To do App</h1>
      <h3 className='text-center text-[30px] fixed'><Link to='/addtask'>Add task</Link></h3>
      {tasks.map((task)=> {
        return (
          <Taskhome task={task}
          reload={fetchTasks}/>
        )
      })
      }
    </section> 
  
    

      
    
  )
}

export default App
