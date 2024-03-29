import React, { useEffect, useState} from 'react'

const Hook2 = () => {

    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((result) => {
            return result.json()
        }).then((res) => {
            console.log(res);
            setproduct(res)
        })
    },[])
    return (

        
        <div className='container d-flex flex-wrap gap-5  bg-success ' >
            
        {product.map((prd) => {
                return (
                    <>
                      <div class="card" style={{width:'18rem'}}>
  <img height={'150px'} width={'150px'} src={prd.image} class="card-img-top" alt="..." />
  <div class="card-body">
<h5 class="card-title">${ prd.price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  
                    </>
                )
                
            
        })}
        </div>
        
  )
}
export default Hook2