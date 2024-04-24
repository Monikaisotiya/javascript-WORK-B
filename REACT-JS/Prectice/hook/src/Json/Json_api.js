import React, { useEffect, useState } from 'react'
// data db.josn mathi jate banviya 6e and a API call karavi 6e
const Json_api = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setproduct(res);
      });
  })


  return (
<>
  {product.map((prd) => {
        return (
          <center>
            <>
              <h2>{prd.id}</h2>
              <h4>{prd.title}</h4>
              <h3>{prd.price}</h3>
              <img  src={prd.image } alt="" height={'150px'} width={'150px'}/>
              
            </>
          </center>
        );
       
    })}
</>
  
   
  )
}

export default Json_api
