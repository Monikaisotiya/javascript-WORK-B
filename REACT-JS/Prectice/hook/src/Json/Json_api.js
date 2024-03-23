import React, { useEffect, useState } from 'react'
// data db.josn mathi jate banviya 6e and a API call karavi 6e
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
            {/* <h3>{prd.marks }</h3> */}
         
           </>
        </center>
          
        )
       
    })}
</>
  
   
  )
}

export default Json_api
