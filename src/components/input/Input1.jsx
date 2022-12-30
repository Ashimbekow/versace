import React from 'react'

function Input1({handleInp}) {
    
  return (
  <div>
    <input type="text"  onChange={(e)=>handleInp(e)} placeholder='title or body'/>
  </div>
  )
}

export default Input1