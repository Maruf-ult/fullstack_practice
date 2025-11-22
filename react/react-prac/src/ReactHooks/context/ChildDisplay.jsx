import React, { useContext } from 'react'
import { GlobalStateContext } from './CreateContext.jsx';

function ChildDisplay() {

     const {isToggle} = useContext(GlobalStateContext);
  return (
    <div>
       <p>Current State:{isToggle?"ON":"OFF"}</p>
    </div>
  )
}

export default ChildDisplay