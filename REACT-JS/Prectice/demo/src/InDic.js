import React, { useState } from 'react'


const InDic = () => {
    const [counter, setCounter] = useState(0)

    const increementCount = () => {
        setCounter(counter + 1)
    }

    const decreementCount = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <center>
                <h1>{counter}</h1>
                <button onClick={() => {
                    increementCount()
                }}>Increement</button>

                <button onClick={() => {
                    decreementCount()
                }}>Decreement</button>


            </center>
        </>
    )
}

export default InDic