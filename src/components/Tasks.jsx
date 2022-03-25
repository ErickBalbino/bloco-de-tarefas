import React from 'react'

import './css/Tasks.css'
import Task from './Task'

export default function Tasks({tasks}) {
  return (
    <div className='tasks-container'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
