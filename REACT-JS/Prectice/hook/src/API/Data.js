import React, { useEffect, useState } from 'react'

// SEF PRECTIES/

const Data = () => {
    const [Data,setproduct] = useState([])
    useEffect(() => {
        fetch(' https://api.escuelajs.co/api/v1/categories').then((result) => {
        return result.json()
        }).then((res) => {
            setproduct(res)
        })
    })
  return (
      <>
  {Data.map((prd) => {
        return (
          <div className="container d-flex flex-wrap gap-">
             <center>
              <>
    
              <img src={prd.image} alt="" height={'350px'} width={'350px'} />
         
           </>
        </center>
         </div>
          
        )
       
    })}
</>
  
   
  )
}


export default Data
