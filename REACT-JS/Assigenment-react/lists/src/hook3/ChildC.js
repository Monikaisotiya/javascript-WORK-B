import React, { useContext} from 'react'
import { Acomponent } from './ChildA'

const ChildC = () => {
    const Data = useContext(Acomponent)
  return (
    <div>
          <h1>hello dear i m Data of C</h1>
          <h1 style={{color:'green'}}>{Data }</h1>
    </div>
  )
}

export default ChildC
