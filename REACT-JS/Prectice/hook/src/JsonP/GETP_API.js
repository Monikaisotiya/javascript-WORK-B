import axios from 'axios' 
import React, { useEffect, useRef, useState } from 'react'

const GETP_API = () => {
    const [Data, setData] = useState([])
    const [index,setindex]= useState(null)

    const int = useRef(null)
    useEffect(() => {
        getdata()
    },[])
    
 const getdata = () => {
      axios.get('http://localhost:7001/std').then((result) => {
        console.log(result.data);
        setData(result.data)
        })
    }

    const addData = () => {
        if (index == null) {
            axios.post('http://localhost:7001/std', { name: int.current.value }).then(() => {
                getdata()
                int.current.value = ''
            })
        } else {
            axios.patch(`http://localhost:7001/std/${index}`, { name: int.current.value }).then((res) => {
        getdata()
        int.current.value = null
        setindex(null)
      })
        }
            
    }

   
    const deleteData = (i) => {
    axios.delete(`http://localhost:7001/std/${i}`).then(() => {
      getdata()
    })
  }
    const updataData = (id,name,lastname,Email) => {
    setindex(id)
        int.current.value = name
        int.current.value = lastname
        int.current.value = Email
   }
    
  return (
      <>
          <input type="text" ref={int} />
          <button onClick={() => {
              addData()
          }}>{index == null?'Add':'Update'}</button>
          <table border={2} rules='all'>
              <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>LastName</th>
                  <th>Email</th>
              </tr>
              {Data.map((result,i) => {
                  return (
                      <>
                          <tr>
                              <td>{i+1}</td>
                              <td>{result.name}</td>
                              <td>{result.lastname}</td>
                              <td>{result.Email}</td>
                              <td>
                                  <button onClick={() => {
                                      deleteData(result.id)
                                  }}>Delete</button>

                                  <button onClick={() => {
                                      updataData(result.id ,result.name ,result.lastname, result.Email )
                                  }}>Updata</button>


                              </td>

                      </tr>
                      
                      
                      </>
                  )

              })}
          </table>
      </>
  )
}

export default GETP_API