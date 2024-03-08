import React, { createContext} from 'react'
import ChildB from './ChildB'
 export const Acomponent = createContext('A')

const ChildA = () => {
  return (
      <div>
          
          <Acomponent.Provider value='hey i m a Data'>
               <ChildB />
          </Acomponent.Provider> 
          <h1> hello this is my a to c go data</h1>
    </div>
  )
}

export default ChildA