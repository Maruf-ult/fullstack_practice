import React from 'react'
import { useContext } from 'react'
import { GlobalStateContext } from './CreateContext.jsx'


function ChildToggle() {
     const {setIsToggle} = useContext(GlobalStateContext) 
  return (
    <div>
      <button onClick={()=> setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  )
}

export default ChildToggle