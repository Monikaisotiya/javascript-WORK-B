import React, { useState,createContext} from 'react'
import Frist from './Frist'
import Sec from './Sec'
import Third from './Third'
export const T = createContext()

const Main = () => {
    const Theme = useState('light')
  return (
      <>
          <T.Provider value={Theme}>
             <Frist /> 
             <Sec />   
             <Third/> 
          </T.Provider>
          
          
    </>
  )
}

export default Main
