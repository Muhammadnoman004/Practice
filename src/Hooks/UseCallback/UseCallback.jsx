// To Increase the performance of our react application.

import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function UseCallback() {

  const [count, setcount] = useState(0);
  const [todos, settodos] = useState([]);

  const handleChange = () => {
    setcount(count + 1)
  }

  const AddToDo = useCallback(() => {
    settodos((previous) => [...previous, "New value is"])
  }, [todos])


  return (
    <>
      <Child todos={todos} addtodo={AddToDo} />
      <div>
        <h2 onClick={handleChange}>Count : {count} <button>+</button></h2>
      </div>
    </>
  )
}
