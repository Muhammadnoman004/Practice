import React, { useRef } from 'react'
import ImperativeChild from './ImperativeChild'

export default function ImperativeParent() {
    const ref = useRef();

    return (
        <div>
            <h1>UseImperativeHandle Parent...</h1>
            <button onClick={() => ref.current.key()}>Handle Child Component</button>
            <ImperativeChild ref={ref} />
        </div>
    )
}
