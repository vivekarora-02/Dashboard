import React, { Component } from 'react'

class Calculate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         result: 0,
         num1: 0,
         num2: 0
      }
      this.handelClick = this.handelClick.bind(this)

      this.addition = this.addition.bind(this)
      this.subtraction = this.subtraction.bind(this)
      this.multiplication = this.multiplication.bind(this)
      this.division = this.division.bind(this)
    }

    handelClick=(event)=>{
        if(event.target.name==="num1"){
            this.setState({
                num1: parseInt(event.target.value)
            })
        }
        if(event.target.name==="num2"){
            this.setState({
                num2: parseInt(event.target.value)
            })
        }
    }

    addition=()=>{
        this.setState({
            result: this.state.num1+this.state.num2
        })
    }
    subtraction=()=>{
        this.setState({
            result: this.state.num1-this.state.num2
        })
    }
    multiplication=()=>{
        this.setState({
            result: this.state.num1*this.state.num2
        })
    }
    division=()=>{
        this.setState({
            result: this.state.num1/this.state.num2
        })
    }
    
    
  render() {
    return (
      <div>
        <label htmlFor="num1">Enter Num1: </label>
        <input type="number" name ="num1" value={this.state.num1} onChange={this.handelClick}></input>
        <br></br>
        <label htmlFor="num2">Enter Num2: </label>
        <input type="number" name ="num2" value={this.state.num2} onChange={this.handelClick}></input>
        <button onClick={this.addition}>Add</button>
        <button onClick={this.subtraction}>Sub</button>
        <button onClick={this.multiplication}>Mul</button>
        <button onClick={this.division}>Div</button>
        <div>{this.state.result}</div>
      </div>
    )
  }
}

export default Calculate