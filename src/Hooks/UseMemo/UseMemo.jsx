// What is UseMemo hook ? 
// To increase the performance of our react applicaion.
// UseMemo hook always return a Memoized value.

import React, { useState, useMemo } from 'react'

export default function UseMemo() {
  const [num, setnum] = useState(0);
  const [show, setshow] = useState(true);

  const handleChange = () => {
    return setnum(num + 1);
  }

  const CountNumber = (Number) => {
    console.log(Number);
    for (let i = 0; i < 800000; i++) { }
    return Number
  }

  const CheckData = useMemo(() => {
    return CountNumber(num)
  }, [num])

  return (
    <div>
      <h1>UseMemo Practice...</h1>
      <button onClick={handleChange} style={{ marginTop: "30vh", backgroundColor: "yellow" }}>Counter</button>
      <p>The New Increment Value is : {CheckData}</p>
      <button onClick={() => setshow(!show)} style={{ backgroundColor: "greenyellow" }}>{show ? "Click me Please" : 'You Click me'}</button>
    </div>
  )
}
