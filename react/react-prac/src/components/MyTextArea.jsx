import React, { useState } from 'react'

function MyTextArea() {
 
     const [text,setText] = useState("");

  return (
    <div>
       <form>
          <label>
               Enter the text:
           <textarea value={text} 
           onChange={(e)=>setText(e.target.value)}
           >          
           </textarea>
           </label>
           <p>here is the text:{text}</p>
       </form>
    </div>
  )
}

export default MyTextArea;