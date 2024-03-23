import React, { useState } from 'react'
import light1 from './../light1.jpeg'
import dark2 from './../dark2.jpeg'
import img3 from './../img3.jpeg'
import img4 from './../img4.jpeg'
import './Render.css'

const Render = () => {
    // let value = 'dark2'



    const [data, setdata] = useState(null)
    
      const changeContent = (con) => {
        setdata(con)
    }


  return (
      <>
          {/* example 1  */}
          
          {/* {value == 'light1' && (<img src={light1} alt=''  />)}
          {value == 'dark2' && (<img src={dark2} alt='' />)} */}
    
          {/* {value == 'light1' ? (<div className='box'><img src={light1} /></div>) : (<div className='box'><img src={dark2} /></div>)}  */}
         
          
          {/* example 2 */}

          <div id="react-application">
              <div className="controls">
                  
                    <button id="button_one" onClick={() => {
                        changeContent('f1')
                  }}>Render Div One</button>
                  

                    <button id="button_two" onClick={() => {
                        changeContent('f2')
                  }}>Render Div Two</button>
                  

                    <button id="button_three" onClick={() => {
                        changeContent('f3')
                  }}>Render Div Three</button>
                  

              </div>
              
              <div className="conditional-render-section">
                  
                    {data == 'f1' && (
                        <>
                            <img height={'320px'} src={img3} alt="" />
                        </>
                    )}

                    {data == 'f2' && (
                        <>
                            <img height={'320px'} src={img4} alt="" />
                        </>
                    )}

                    {data == 'f3' && (
                        <>
                            <p style={{ width: '320px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis delectus et repellendus accusantium velit ab praesentium quos vel totam. Veniam beatae enim blanditiis, reprehenderit architecto asperiores maiores maxime. Laborum, nulla.</p>
                        </>
                    )}

                </div>
            </div>







        </>
    )
}
     

export default Render