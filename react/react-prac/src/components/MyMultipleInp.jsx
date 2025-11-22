import React, { useState } from 'react'

function MyMultipleInp() {
  const [inputs,setInputs] = useState({});
 
  const handleChange = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
   setInputs(values => ({...values,[name]:value}));
  }


  return (
    <div>
       <form>
         <label>
           first name:
           <input 
           type='text' 
           name='firstname'
           value={inputs.firstname}
           onChange={handleChange}
           />
           </label>
           <label>
            Last name:
           <input
           type='text'
           name='lastname'
           value={inputs.lastname}
           onChange={handleChange}
           />
           </label>
           <p>Current values: {inputs.firstname} {inputs.lastname}</p>
       </form>
      
    </div>
  )
}

export default MyMultipleInp