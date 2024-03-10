import React,{useState,useRef} from 'react'

export default function Td() {
    const [set, setdata] = useState([])
    const input = useRef(null)
    const AddData = () => {
        setdata([...set, input.current.value])
        input.current.value =''
    }

    const DeleteData = (index) => {
        let newdata = set.filter((result, id) => {
            return id != index
        })
    }
  return (
    <>
          <center>
              
              <input type='text' refrnce={input} />
              <button onClick={() => {
                  AddData()
              }}>ADD</button>
              {set.map((result, i) => {
                  return (
                      <>
                          <h1>{result}</h1>
                          <button onClick={() => {
                              DeleteData(i)
                          }}>
                              Dlt
                          </button>
                      
                      </>
                      
                  )
              })}
      </center>
    </>
  )
}
