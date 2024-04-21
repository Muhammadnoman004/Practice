import React from 'react'
import { memo } from 'react';

function Child({ todos, addtodo }) {
    console.log("Child Render");

    return (
        <div>
            <h1>ToDo</h1>
            {
                todos.map((value, index) => {
                    return <p key={index}>{`${value} ${index}`}</p>
                })
            }
            <button onClick={addtodo}>Add Todo</button>
        </div>
    )
}

export default memo(Child);