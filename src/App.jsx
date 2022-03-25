import React, {useState} from 'react'

import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default function App() {

  const[tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: true
    },
    {
      id: "2",
      title: "Ler livros",
      completed: false
    }
  ])

  const handleTextAddition = (taskTitle) => {
    const newTask = [ ...tasks, {
      id: Math.random(10),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTask)
  }

  return (
    <div className='container'>
      <AddTask handleTextAddition={handleTextAddition} />
      
      <Tasks tasks={tasks} />
    </div>
  )
}