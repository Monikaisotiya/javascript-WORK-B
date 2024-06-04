import React, { useState, useRef } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [ Id , setId] = useState(null)
    const input = useRef(null)
    const AddData = () => {
        setTodo([...todo, input.current.value])
        input.current.value = ''

    }

    const deleteData = (index) => {
        let newdata = todo.filter((result, id) => {
            return id != index
        })
        setTodo(newdata)
    }

    const UpdataData = (res, index) => {
        input.current.value = res
        setId(index)

        
    }

    return <>
        <center>
            <input type='text' ref={input} />
            <button onClick={() => {
                AddData()
            }}>
                Add
            </button>
            {todo.map((result, i) =>{
                return (
                    <>
                        <h1>{result}</h1>
                        <button onClick={() => {
                            deleteData(i)
                        }}>Delete</button>

                        <button onClick={() => {
                            UpdataData(result,i)
                        }}>Update</button>
                    </>
                )
            })}
        </center>
    </>
}
export default Todo