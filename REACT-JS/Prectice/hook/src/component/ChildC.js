import React, { useContext } from 'react'
import { Acomponent } from './ChildA'

const ChildC = () => {
    const data =useContext(Acomponent)

  return (
    <div>
          HIII I M C 
          <h1 style={{ color: 'green' }}>{data }</h1>
    </div>
  )
}

export default ChildC
