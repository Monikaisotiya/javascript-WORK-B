import React, { useState, useRef } from 'react'

function Useref() {
    const input = useRef(null)
    const inpm = useRef(null)
    const [textm, setTextm] = useState(null)
    const getDatam = () => {
        console.log(inpm.current.value)
        setText(inpm.current.value)
        inpm.current.value = ''
        inpm.current.focus()


    }
    
    const [text, setText] = useState(null)
    const getData = () => {
        console.log(input.current.value)
        setText(input.current.value)
        input.current.value = ''
        input.current.focus()
    }
    return <>
        <center><input type='text' ref={input} />
            <button onClick={() => {
                getData()
            }}>Click me</button>
            <h1>{text}</h1>
        </center>


        <center> <input type="text" ref={inpm} />
            <button onClick={() => {
                getDatam()
            }}> click hover me </button>
            <h5>{text}</h5>
        </center>

    </>
}

export default Useref
