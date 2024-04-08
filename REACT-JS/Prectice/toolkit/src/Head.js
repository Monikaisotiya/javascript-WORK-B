import React from 'react'
import { useSelector } from "react-redux";


const Head = () => {
    const state = useSelector((result) => {
        console.log(result);
        return result.addedCart
    
})

  return (
    <>
          <h1 style={{color:'red'}}>{ state }</h1>
    </>
  )
}

export default Head







// import React from "react";
// import { useSelector } from "react-redux";

// const Head = () => {
//     return
//     <>
//         <h1>{ state}</h1> 
        
//   </>;
// };

// export default Head;
