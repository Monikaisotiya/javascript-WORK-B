import React, { useState } from 'react'

const Hook1 = () => {
    const [counter, setcounter] = useState(0)
    
    const Increementcounter = () => {
        setcounter(counter+1)
    }

    const Decreementcounter = () => {
        setcounter(counter-1)
    }
  return (
      <>
          <center style={{backgroundColor:'pink'}}>
              <h2> 1. usestate</h2>

              <h1>{counter}</h1>
              <button onClick={() => {
                  Increementcounter()
              }}>Increement</button>

              <button onClick={() => {
                  Decreementcounter()
              }}>Decreement</button>



      </center>
      
      </>
  )
}

export default Hook1