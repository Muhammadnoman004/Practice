import React, { forwardRef, useImperativeHandle } from 'react'

export default forwardRef(function ImperativeChild(prop, ref) {

    useImperativeHandle(ref, () => {
        return {
            key: () => Check(),
        }
    })

    const Check = () => {
        console.log('child data got in Parent Component...');
    }
    return (
        <div>
            <h1>UseImperativeHandle Child...</h1>
        </div>
    )
})
