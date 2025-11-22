import { useState } from "react";
import ChildToggle from "./ChildToggle.jsx";
import ChildDisplay from "./ChildDisplay.jsx";
import { GlobalStateContext } from "./CreateContext.jsx";


function ContextExample() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value ={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle/>
        <ChildDisplay/>
      </div>
    </GlobalStateContext.Provider>
  );
}

export default ContextExample;
