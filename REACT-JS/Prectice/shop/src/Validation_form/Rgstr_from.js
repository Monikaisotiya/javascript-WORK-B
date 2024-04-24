import React from 'react'
import "../Validation_form/Rgstr7_from.css"



const Rgstr_from = () => {
  return (
      <>
          <center >
               <h1 className='noon'>Validation_From</h1>
                 <div>
                 
                  
                  <label htmlFor="">UserName : </label>
                  <input type="text" name="" id="" />
                  <br /><br />
                  <label htmlFor="">Emailaddress : </label>
                  <input type="email" name="" id="" />
                  <br /><br />
                  <label htmlFor="">Password : </label>
                  <input type="password" name="" id="" />
                  <br /><br />
                  <input type="submit" value="submit" />


                  </div>


          </center>
         
       
    </>
  )
}

export default Rgstr_from