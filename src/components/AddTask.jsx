import React, {useState} from 'react'

import Button from './Button'
import './css/AddTask.css'

export default function AddTask({handleTaskAddition}) {

  const[inputData, setInputData] = useState('')

  const handleInputOnChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    {inputData ? handleTaskAddition(inputData): alert('Insira o titulo da tarefa!')}
    setInputData('')
  }

  return (
    <div className='add-task-container'>
        <input 
          type="text" 
          className='add-task-input' 
          onChange={handleInputOnChange} 
          value={inputData}
          id="add-task"
        />

        <Button btnText="Adicionar" onClick={handleAddTaskClick} />
    </div>
  )
}
