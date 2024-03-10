import React,{useState,useRef} from 'react'

function Frist() {
  const [set, setdata] = useState([])
  const input =useRef(null)
  const adddata = () => {
    setdata([...set, input.current.value])
    input.current.value =''
  }
  return (
    <>
      <center>
        <input type='text' refranc={input} />
        <button onClick={() => {
          adddata()
        }}>ADD</button>

      </center>
    </>
  )
}
export default For;

