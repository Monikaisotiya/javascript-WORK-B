import React, { useState, useRef } from 'react'
import './ToDo.css'

const ToDo = () => {
  const input = useRef(null);
 const [Todo , setTodo] = useState([])


  const addData = () => {
    setTodo([...Todo, input.current.value])
    input.current.value = null
    console.log(Todo);
    
  }
  
  return (
    <>
      <input type="text" ref={input} />

      <button onClick={() => {
        addData()
      }}>Add</button>

      {Todo.map((result, index) => {
        <h1>{result}</h1>
      })}
    </>
  )
}

export default ToDo
