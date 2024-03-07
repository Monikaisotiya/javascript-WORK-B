import React, { useContext } from 'react'
import { Acomponent } from './ChildA.js'

const ChildD = () => {
    const [data,update] = useContext(Acomponent)
   
  return (
      <div>
          <button onClick={() => { 
              update('yes')
          }}>Yes</button>
          <button onClick={() => { 
               update('no')
          }}>No</button>
          {/* hello i m D
          <h1 style={{ color: 'red' }}>{data}</h1>
          <button onClick={() => {
              updateContext()
          }}>
              update
          </button> */}
    </div>
  )
}

export default ChildD