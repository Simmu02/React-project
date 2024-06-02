import React from 'react'
import style from "./style.css"

const Chips = ({text,isSelected,onButtonClick}) => {
  return (

    
       <button className={`chip ${isSelected?'selected-chip':''}`} onClick={()=>onButtonClick(text)}>{text}</button>

       
  )
}

export default Chips