import React, { Component } from 'react'

class Voting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         numberOfYes:0,
         numberOfNo:0,
         result1:0,
         result2:0
      }
      this.increment = this.increment.bind(this)
      this.updatePoll = this.updatePoll.bind(this)
    }
    updatePoll=(event)=>{
        this.setState({
            result1: (this.state.numberOfYes)/(this.state.numberOfYes+this.state.numberOfNo)*100
        })
        this.setState({
            result2: (this.state.numberOfNo)/(this.state.numberOfYes+this.state.numberOfNo)*100
        })
        console.log(this.state.result1)
        console.log(this.state.result1)
    }
    increment=(event)=>{
        if(event.target.name==="yes"){
           this.setState(prevState=>{
                return{
                    numberOfYes: prevState.numberOfYes+1
                }
            }, this.updatePoll)
        }
        else if(event.target.name==="no"){
            this.setState(prevState=>{
                return{
                    numberOfNo: prevState.numberOfNo+1
                }
            },this.updatePoll)
        }
        console.log(this.state.numberOfNo)
        console.log(this.state.numberOfYes)
    }
    
    
  render() {
    return (
      <div>
        <center>
            <h1>India is on the path of becoming a superpower</h1>
            <button onClick={this.increment} name="yes" >Yes</button>
            <button onClick={this.increment}  name = "no" >No</button>
            <h3>Yes: {this.state.result1} %</h3>
            <h3>No: {this.state.result2} %</h3>
            
        </center>
        </div>
    )
  }
}
export default Voting
