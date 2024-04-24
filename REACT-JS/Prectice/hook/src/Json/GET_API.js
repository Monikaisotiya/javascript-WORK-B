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
      axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
        console.log(result.data);
        setData(result.data);
      });
  }
  
  const addData = () => {
    if (index == null) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name: inpt.current.value,
        })
        .then(() => {
          getdata();
          inpt.current.value = "";
        });
    } else {
      axios
        .patch(`https://jsonplaceholder.typicode.com/users/${index}`, {
          name: inpt.current.value,
        })
        .then((res) => {  
          getdata();
          inpt.current.value = null;
          setindex(null);
        });
   }
  }
  const deletedata = (i) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${i}`).then(() => {
      getdata();
    });
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
                      deletedata(result.i)
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

