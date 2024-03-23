import React, { useRef} from 'react'

const Frist = () => {
    const buttonRef = useRef();
  return (
    <>
       <div className="box" style={{ width: '300px', height:'200px' }}>
      <h1 style={{fontSize:'20px'}}>The Button has a ref</h1>  
      <button
        onClick={() => {
          console.log(buttonRef.current);
        }}
        ref={buttonRef}
        className="button">
          Special Button
       </button>
      </div>
    </>
  )
}

export default Frist



