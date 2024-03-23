import  axios  from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import './GET.css'


const GET_API = () => {
  const [Data, setData] = useState([])
  const [index,setindex] = useState(null)

  const inpt = useRef(null)
    useEffect(() => {
       getdata()
    },[])
    
    const getdata = () => {
      axios.get('http://localhost:8001/std').then((result) => {
        console.log(result.data);
        setData(result.data)
        })
  }
  
  const addData = () => {
    if (index == null) {
      axios.post('http://localhost:8001/std', { name: inpt.current.value }).then(() => {
      getdata()
      inpt.current.value = ''
      
    })
    } else {
      axios.patch(`http://localhost:8001/std/${index}`, { name: inpt.current.value }).then((res) => {
        getdata()
        inpt.current.value = null
        setindex(null)
      })
   }
  }
  const deletedata = (i) => {
    axios.delete(`http://localhost:8001/std/${i}`).then(() => {
      getdata()
    })
  }

  const updatData = (id, name) => {
    setindex(id)
    inpt.current.value = name
   }
  return (
    <>
      <div className="count">
         <center className='main'>
        <input type="text" ref={inpt} className='moon' />

        <button onClick={() => {
          addData()
        }}>
          {index == null?'Add':'Update'}
        </button>
        <table border={1} rules='all'>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {Data.map((result, i) => {
              return (
                   <>
                  <tr>
                    <td>{i+1 }</td>
                    <td>{result.name}</td>


                    <td>
                      <button onClick={() => {
                      deletedata(result.id)
                      }}>Delete</button>

                      <button onClick={() => {
                        updatData(result.id,result.name)
                      }}>
                        updata
                   </button>
                    </td>
                       </tr>
                    </>
                        )
          })}


        </table>

      </center>
     </div>
      
    </>
  )
}

export default GET_API

