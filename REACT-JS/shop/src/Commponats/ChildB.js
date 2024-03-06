import React, { useContext } from 'react'
import ChildC from './ChildC'
import { Acomponent } from './ChildA.js'

const ChildB = () => { 
     const [data,update] = useContext(Acomponent)
  return (
      <div>
        
          <h1>i m B { data}</h1>
    </div>
  )
}

export default ChildB
