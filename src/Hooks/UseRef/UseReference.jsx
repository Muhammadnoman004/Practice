import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function UseReference() {

  const InputRef = useRef('')
  console.log(InputRef);

  const [name, setname] = useState("Noman");

  // useEffect(() => {
  //   InputRef.current = InputRef.current + 1
  // })

  const handleChange = () => {
    InputRef.current.style.backgroundColor = "grey"
    InputRef.current.style.color = "white"
    InputRef.current.focus()
  }

  return (
    <div>
      <h1>UseRef Practice...</h1>
      <input type="text" ref={InputRef} value={name} onChange={(e) => setname(e.target.value)} />
      <button onClick={() => setname('')}>reset</button>
      <button onClick={handleChange}>Color Change</button>
      {/* <h2>Current counting is {InputRef.current}</h2> */}

    </div>
  )
}
