import React, { Component } from 'react'

export default class Lyfcycle extends Component {

     constructor() {
        super()
        this.state={count:0}
    }

    static getDerivedStateFromProps(props, state) {
        return{count:props.site}
    }

    getSnapshotBeforeUpdate(prevprops,prevstate) {
        console.log(prevstate);
        
    }

    componentDidMount() {
        console.log('componentDidMount');
        
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }

    shouldComponentUpdate(nextpeops, newstate) {
        console.log('shouldComponentUpdate');
        if (this.state.count<5) {
            return true
             document.body.style.backgroundColor = 'red'
        } else {
            return false
        }
        
    }


    componentWillUpdate(newprops, newstate) {
        console.log('componentWillupdate');
        if (newstate.count>5) {
             document.body.style.backgroundColor = 'red'
        }
        
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate');
        // console.log('oldprops');
        
        
    }
  render() {
    return (
      <div>
         <button onClick={() => {
                this.setState({count:this.state.count+1})
            }}>Increement</button>
            <h1>{this.state.count }</h1>
            

      </div>
    )
  }
}
