import React from 'react'

import "./SubHeader.css"

const SubHeader = ({subHeaderText}) => {
  return (
    <div className='subHeader'>
      {subHeaderText}
    </div>
  )
}

export default SubHeader
