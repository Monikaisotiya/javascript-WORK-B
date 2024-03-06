import React, {useContext } from 'react'
import ChildD from './ChildD'
import { Acomponent } from './ChildA.js'

const ChildC = () => {
        const [data,update] = useContext(Acomponent)

  return (
      <div>
        
          <h1> hello i m C {data}</h1>
    </div>
  )
}

export default ChildC