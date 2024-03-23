import React, { Component } from 'react'

export default class Demo extends Component {

    constructor() {
      super()
      this.state = {count:0, std:[]}
  }
  
  Increment() {
    this.setState({count:this.state.count+1})
  }
  render() {
    return (<>
      <center>

        <button onClick={() => {
        this.Increment()
        }}>Incre</button>
      

      <h1>{ this.state.count}</h1>


      </center>
      </>
    )
  }
}
