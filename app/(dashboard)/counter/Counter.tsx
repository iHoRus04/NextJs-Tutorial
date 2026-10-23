"use client";
import { useState } from "react";


function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Tang</button>
    </>
  );
}

export default Counter;
