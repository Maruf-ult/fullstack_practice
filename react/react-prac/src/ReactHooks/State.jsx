import React, { useState } from 'react'

function State() {
     const [count,setCount] = useState(0);

     const increment = ()=>{
          setCount((prev) => prev+1);
     }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default State