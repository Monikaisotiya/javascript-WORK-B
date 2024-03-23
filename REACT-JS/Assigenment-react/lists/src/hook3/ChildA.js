import React, { createContext } from 'react'
import ChildB from './ChildB'
export const Acomponent = createContext('A') 

const ChildA = () => {
  return (
    <div>
          <center style={{backgroundColor:"pink"}}>
              <h2> 2. useing useContext and createContext </h2>
          <Acomponent.Provider value="hello i m a DATA for A ">
              <ChildB/>
          </Acomponent.Provider>
          <h1>hello dear this is my A going to C data</h1>
          </center>
    </div>
  )
}

export default ChildA
