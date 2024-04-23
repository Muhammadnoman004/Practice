import React, { memo, useDeferredValue, useEffect, useState } from 'react'

export default function UseDeferred() {

  const [value, setvalue] = useState("");
  const defferredValue = useDeferredValue(value)

  const handleChange = (e) => {
    const val = e.target.value
    setvalue(val)
  }

  useEffect(() => {
    console.log("value is", value);
  }, [value])

  useEffect(() => {
    console.log("defferredValue is", defferredValue);
  }, [defferredValue])

  return (
    <div>
      <h1>UseDeferredValue Practice...</h1>
      <input type="text" onChange={handleChange} id="" />

      {[...new Array(20)].map((_, i) => {
        return <MemoizSearchText key={i} Value={defferredValue} />
      })
      }
    </div>
  )
}

const SearchText = ({ Value }) => {
  let i = 0;
  while (i < 10000000) {
    i++
  }
  return <p>Search term : {Value}</p>
}

const MemoizSearchText = memo(SearchText);
