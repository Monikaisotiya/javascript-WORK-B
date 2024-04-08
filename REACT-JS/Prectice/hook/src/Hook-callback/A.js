import React, {useState,useCallback } from 'react'
import B from './B'

const A = () => {
    const [count, setcount] = useState()
    const [Todo, setTodo] = useState();
    const changeB = useCallback(() => {
        console.log('i am from a');
    })
  return (
      <>A 
          <button onClick={() => {
              setcount(count+1)
          }}>Increement</button>
          <h1>{count}</h1>
          <B todolist={Todo} fun={changeB} />
      <B/>
    </>
  )
}

export default A
