import React from 'react'

import "./InputText.css"

const InputText = ({name, propLabel, pHolder, error, validationPattern, type}) => {
   
  return (
    <div className='InputText'>
      <label>{propLabel}</label>
          <input type={type} name={name} placeholder={pHolder} required pattern={validationPattern}/>
        <span className='errorTxt'>{error}</span>
    </div>
  )
}

export default InputText
