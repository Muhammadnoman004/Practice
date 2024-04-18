// UseLayoutEffect runs synchronously after a render but before the screen is updated...

//UseEffect runs asynchoronously and after a render is painted to the screen...

import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'

export default function UseLayoutEffect() {

    const [number, setnumber] = useState(0);

    // useEffect(() => {
    //     if (number === 0) setnumber(5 + Math.random() * 50);
    //     console.log("UseEffect");
    // }, [number])

    useLayoutEffect(() => {
        if (number === 0) setnumber(5 + Math.random() * 50);
        console.log("UseLayoutEffect");
    }, [number])

    // useEffect(() => {
    //     console.log("Third useEffect");
    // })

    return (
        <div>
            <h1>UseLayoutEffect Practice...</h1>
            <h2>{number}</h2>
            <button onClick={() => setnumber(0)}>Push</button>
        </div>
    )
}
