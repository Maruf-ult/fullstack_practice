import React, { useEffect, useRef } from 'react';

function UseRef() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const onClick = () => {
    inputRef1.current.value = "pedro";
  };

  const onFocus = () => {
    inputRef2.current.focus();
  };

  useEffect(() => {
    console.log("page rendered");
  }, []); 

  return (
    <div>
      <input type="text" ref={inputRef1} />
      <button onClick={onClick}>Set Value</button>

      <input type="text" ref={inputRef2} />
      <button onClick={onFocus}>Focus</button>
    </div>
  );
}

export default UseRef;