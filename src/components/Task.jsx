import React from 'react'

import './css/Task.css'

export default function Task({task, handleTaskClick}) {
  return (

    <div className='task-container'>
      <div className='task-title'
           style={ task.completed ? {borderLeft: '6px solid chartreuse'} : {} }
           onClick={() => {handleTaskClick(task.id)}}
      >
          {task.title}
      </div>
    </div>
  )
}