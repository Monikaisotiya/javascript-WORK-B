import React, { useContext} from 'react'
import { T } from './Main'

const Third = () => {
    const[color] = useContext(T)
  return (
    <h1 style={{backgroundColor: color =='dark'?'black':'white',color:color=='dark'? 'white':'black'}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quis explicabo numquam deserunt totam, quam fugit dolorum voluptate possimus natus molestias eum ab dignissimos doloribus, non minus, maxime dolor adipisci! Impedit esse consequuntur quos eveniet cupiditate excepturi natus, nobis aspernatur fugiat perferendis architecto, cum necessitatibus quia minus temporibus et inventore!
    </h1>
  )
}

export default Third
