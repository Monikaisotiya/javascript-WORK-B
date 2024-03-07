import React from 'react'

const Event = () => {

    const alertData = () => {
        console.log('hello this is my alert data');
        
    }

    const dbclickeEvent = () => {
        console.log('db click evnet');
        
    }

    const mouseover = (e) => {
        // e.target.style.color ='blue'
        console.log('mouse over event');
        
    }

    const onMouseLeave = () => {
        console.log('on mouse leave event');
        
    }

    const onmouseup = () => {
        alert('hello mouse up')
    }

    const onmousedown = () => {
        console.log('on mouse down event');
        
    }

     const onkeyupevent = (e) => {
        console.log(e.target.value);

    }
     const keydown = (e) => {
        console.log(e.target.value);
    }

    const keypress = (e) => {
        console.log(e.target.value);

    }
     const submitData = (e) => {

        e.preventDefault();
        console.log('event stop');

    }




  return (
      <>
    {/* mouse event  */}
          {/* 1  click event  */}
          <button onClick={() => {
              alertData()
          }}>click event</button>

          <hr />
          {/* double click event */}
          <button onDoubleClick={() => {
              dbclickeEvent()
          }}> DB click </button>

          <hr />
          {/* mouse over */}
          <button onMouseOver={() => {
              mouseover()
          }}>mouse over</button>
          
          <hr />
          {/* mouseleave */}
          <button onMouseLeave={() => {
              onMouseLeave()
          }}>mouse leave event</button>

          <hr />
          {/* on mouse up */}
          <button onMouseUp={() => {
              onmouseup()
          }}>on mouse up</button>

          <hr />
          {/* on mouse down */}
          <button onMouseDown={() => {
              onmousedown()
          }}>
              on mouse down
          </button>
          <hr />
          {/* key bord event */}
          {/* on key up event */}
          <input type="text" onKeyUp={onkeyupevent} />

           <hr />
            {/*on key down event*/}
            <hr />
            <input type="text" onKeyDown={keydown} />
            <hr />
            {/* on key press */}
          <input type="text" onKeyPress={keypress} />
          
            {/* submit event */}
            <form action="" onSubmit={(event) => {
                submitData(event)
            }}></form>

    </>
  )
}

export default Event
