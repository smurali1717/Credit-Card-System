import React from 'react'
import "./SubHeader.css"
const Header = ({headerText}) => {
  return (
    <div className='mainHeader'>
      {headerText}
    </div>
  )
}

export default Header
