import React,{ createContext,useState} from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC'
import ChildD from './ChildD'
 export const Acomponent = createContext() 
const ChildA = () => {
    const hook = useState('A')
  return (
      <div>
          <Acomponent.Provider value={hook}>
              <ChildB />
              <ChildC />
              <ChildD />
          </Acomponent.Provider>
      
       

    </div>
  )
}

export default ChildA
