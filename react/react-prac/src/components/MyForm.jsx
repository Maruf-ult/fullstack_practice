import { useState } from "react";


function MyForm(){
     
     const [name,setName] = useState("");
     const handleChange = (e)=>{
        setName(e.target.value);
     }
     const handleSubmit = (e) =>{
          e.preventDefault();
          alert(name);
          
     }
     
     return(
          <>
           <form onSubmit={handleSubmit}>
               <label>
                    Enter the name:
                    <input value={name}
                    onChange={handleChange}
                    >
                    </input>
               </label>
               <input type="submit"></input>
           </form>
          </>

     );
}

export default MyForm;