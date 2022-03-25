import React, {useState} from 'react'

import Button from './Button'
import './css/AddTask.css'

export default function AddTask({handleTextAddition}) {

  const[inputData, setInputData] = useState('')

  const handleInputOnChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTextAddition(inputData)
  }

  return (
    <div className='add-task-container'>
        <input 
          type="text" 
          className='add-task-input' 
          onChange={handleInputOnChange} 
          value={inputData} 
        />

        <Button btnText="Adicionar" onClick={handleAddTaskClick} />
    </div>
  )
}
