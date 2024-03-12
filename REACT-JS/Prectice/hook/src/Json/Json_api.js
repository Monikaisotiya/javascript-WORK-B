import React, { useEffect, useState } from 'react'

const Json_api = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:8001/std').then((result) => {
      return result.json()
    }).then((res) => {
       setproduct(res)
    })


  })


  return (
<>
  {product.map((prd) => {
        return (
          <center>
              <>
            <h2>{prd.id }</h2>
            <h4>{prd.name}</h4>
            <h3>{prd.marks }</h3>
         
           </>
        </center>
          
        )
       
    })}
</>
  
   
  )
}

export default Json_api
