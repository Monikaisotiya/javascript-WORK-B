import React, { useState, useEffect, useRef } from 'react'
import './Crud.css'

const Crud = () => {
    const [input, setInput] = useState({ name: '', email: '', phone: '', password: '' });
    const [data, setData] = useState([])
    const [ id, setId] = useState(null)
    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    const password = useRef('')

    useEffect(() => {
        console.log(input);
        
    }, [input])
    
    useEffect(() => {
        console.log(data);
        
    }, [data])
    
    const handllechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input);
        
    }

    const handllesubmit = (e) => {
        e.preventDefault();

        if (id == null) {
            setData([...data,input])
        } else {
            let updata = [...data]
            updata[id].name = name.current.value
            updata[id].email = email.current.value
            updata[id].phone = phone.current.value
            updata[id].password = password.current.value
            setData(updata)
        }
         setInput({ name: '', email: '', phone: '', password: '' })
    name.current.value = ''
    email.current.value = ''
    phone.current.value = ''
    password.current.value = ''
    setId(null)
    }

    const deletedata = (i) => {
        let newData = [...data]
        newData.splice(i, 1)
        setData(newData)
    }
    
    const updatadata = (res,index) => {
        setId(index)
        name.current.value = res.name
        email.current.value = res.email
        phone.current.value = res.phone
        password.current.value = res.password
    }


    return (
        <>
            <center >

                <form onSubmit={handllesubmit} id='Form' >
                    

                    <div  id='inpt'>
                        
                         <label htmlFor="">Name</label>
                <input style={{backgroundColor:'pink', borderRadius:'10px', marginLeft:'20px'}} type="text" ref={name} onKeyUp={handllechange} name="name" id="" />
                    <br />
                    <br />
                <label htmlFor="">Email</label>
                <input  style={{backgroundColor:'pink', borderRadius:'10px', marginLeft:'20px'}} type="email" ref={email} onKeyUp={handllechange} name="email" id="" />
                    <br />
                    <br />
                <label htmlFor="">phone</label>
                <input style={{backgroundColor:'pink', borderRadius:'10px', marginLeft:'20px'}} type="text" ref={phone} onKeyUp={handllechange} name="phone" id="" />
                    <br />
                    <br />
                <label htmlFor="">password</label>
                <input style={{backgroundColor:'pink', borderRadius:'10px', marginLeft:'20px'}} type="password" ref={password} onKeyUp={handllechange} name="password" id="" />
                    <br />
                    <br />
                        <input style={{ backgroundColor: 'black', color: 'white', height: '40px', width: '90px', border: '2px solid red', borderRadius:'8px'}} type="submit" value="submit" />
               </div>
              
                </form>
                


                <br />
                <br />
                <br />
                <br />

                <table rules='all'>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>password</th>
                        <th>Action</th>
                    </tr>
                    {data.map((result,index  ) => {
                        return (
                            <>
                                <tr>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
                                    <td>{result.phone}</td>
                                    <td>{result.password}</td>
                                    <td><button onClick={() => {
                                        deletedata(index)
                                    }}>delete</button>
                                        <button onClick={() => {
                                            updatadata(result,index)
                                    }}>updata</button>
                                    </td>
                                    
                            </tr>
                            </>
          )
})}
                </table>
            </center>
           
        </>
    );
}

export default Crud
