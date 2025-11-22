import React, { useState } from 'react'

function RadioBtn() {
 
   const [selectedFruit,setSelectedFruit] = useState('banana')  
   
   const handleChange = (e) => {
     setSelectedFruit(e.target.value);
   }

   const handleSubmit = (e) =>{
     alert(`Your favourite fruit is: ${selectedFruit}`);
     e.preventDefault();
   }

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="orange" 
          checked={selectedFruit === 'orange'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default RadioBtn