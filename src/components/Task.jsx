import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

import './css/Task.css'

export default function Task({ task, handleTaskClick, handleTextDeletion }) {
  return (

    <div className='task-container' style={ task.completed ? {borderLeft: '6px solid chartreuse'} : {} }>
      <div className='task-title' onClick={() => {handleTaskClick(task.id)}}>
          {task.title}
      </div>

      <div className='buttons-container'>
        <FaInfoCircle className='icon' />
        <HiX className='icon' onClick={() => {handleTextDeletion(task.id    )}} />
      </div>
    </div>
  )
}