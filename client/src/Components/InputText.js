import React from 'react'

import "./InputText.css"

const InputText = ({name, propLabel, pHolder, error, validationPattern, maxLength, type, minLength}) => {
   
  return (
    <div className='InputText'>
      <label>{propLabel}</label>
          <input type={type} name={name} placeholder={pHolder} minLength={minLength} maxLength={Number(maxLength)}  pattern={validationPattern}/>
       <span>{error}</span>
    </div>
  )
}

export default InputText
