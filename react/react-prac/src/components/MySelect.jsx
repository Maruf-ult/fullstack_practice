import React, { useState } from 'react'

function MySelect() {
  const [name,setName] = useState("Maruf");

  const handleChange= (e) =>{
     setName(e.target.value);
  }
  
     return (
    <div>
      <select value={name} onChange={handleChange}>
          <option value="Volvo">Volvo</option>
          <option value="bmw">bmw</option>
          <option value="partext">partext</option>
      </select>
    </div>
  )
}

export default MySelect