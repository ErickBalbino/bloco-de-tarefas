import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'

export default function App() {
   
  const[tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: 2,
      title: 'Estudar inglês',
      completed: false,
    }
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks)
  }

  const handleTextDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      
      if(task.id === taskId) return {
        ...tasks,
  
        completed: !task.completed, 
        title: task.title, 
        id: task.id
      }
 
      return task
    })

    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <Header />

      <AddTask handleTaskAddition={handleTaskAddition} />
      
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTextDeletion={handleTextDeletion} />
    </div>
  )
}