import React, { useContext } from 'react'
import {T} from './Main'

const Sec = () => {
    const [color]= useContext(T)
  return (
    <>
        <h1 style={{backgroundColor:color =='dark' ? 'black': 'white',color: color=='dark'? 'white':'black'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quibusdam ipsam recusandae, quo mollitia eveniet et nobis aliquam tenetur. Odio, ab. Molestias similique ducimus accusamus, iste est velit earum culpa!
      </h1>
    </>
  )
}

export default Sec
