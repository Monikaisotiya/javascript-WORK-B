import React, { Component } from 'react'

export default class ToDolist extends Component {
    constructor() {
        super()
        this.state = {
            std: [],
            index:null
        }
    }

  
    adddata() {
        let Data = document.getElementById('Data').value
        if (this.state.index == null) {
            this.setState({ std: [...this.state.std, Data] })
        document.getElementById('Data').value = ''
        console.log(this.state);
        } else {
      let std = [...this.state.std]
      std[this.state.index] = Data
      this.setState({ std: std, index: null })
      document.getElementById('data').value = ''
    }
        
    }


    deletedata(i) {
        let newstd = [...this.state.std]
        newstd.splice(i, 1)
        this.setState({std:newstd})
    }

    updatedata(res, i) {
    document.getElementById('Data').value = res
    this.setState({ index: i })
  }



  render() {
    return (
        <center>

           <>
                <h1>  todo list creat by class componate</h1>
                

            <input type="text" id='Data' />
            <button onClick={() => {
          this.adddata()
        }}>{this.state.index == null ? 'Add' : 'Update'}</button>
          
                {this.state.std.map((result,index) => {
                    return (
                        <>
                            <h1>{result}</h1>
                            
                            <button onClick={() => {
                                this.deletedata()
                            }}>Delete</button>
                            
                            <button onClick={() => {
                                this.updatedata(result,index)
                            }}>update</button>
                        
                        </>
                    )
                })}
      </>


        </center>
    )
  }
}
