import React from 'react'

import './css/Task.css'

export default function Task({task}) {
  return (
    <div className="task-container">
      <h3 className="task-title">{task.title}</h3>
    </div>
  )
}