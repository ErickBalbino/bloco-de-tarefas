import React from 'react'

import './css/Button.css'

export default function Button({btnText, onClick}) {
  return (
    <div>
        <button className="button" onClick={onClick}>
            {btnText}
        </button>
    </div>
  )
}
