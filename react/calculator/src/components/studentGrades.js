import React, { Component } from 'react'

class StudentGrades extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:0,
         rollno:0,
         sub1:0,
         sub2:0,
         sub3:0,
         sub4:0,
         sub5:0,
         totalMarks:0
      }
    }
    clickHandlerName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    clickHandlerRollno=(event)=>{
        this.setState({
            rollno: parseInt(event.target.value)
        })
    }
    clickHandlerMarks=(event)=>{
        if(event.target.name==="sub1"){
            this.setState({
                sub1: parseInt(event.target.value)
            })
        }
        if(event.target.name==="sub2"){
            this.setState({
                sub2: parseInt(event.target.value)
            })
        }
        if(event.target.name==="sub3"){
            this.setState({
                sub3: parseInt(event.target.value)
            })
        }
        if(event.target.name==="sub4"){
            this.setState({
                sub4: parseInt(event.target.value)
            })
        }
        if(event.target.name==="sub5"){
            this.setState({
                sub5: parseInt(event.target.value)
            })
        }
    }
    totalMarks=()=>{
        this.setState({
            totalMarks: parseInt((this.state.sub1+this.state.sub2+this.state.sub3+this.state.sub4+this.state.sub5)/5)
        })
    }
    submitHandler=event=>{
        alert(`${this.state.name} ${this.state.rollno} ${this.state.totalMarks}`)
        event.preventDefault();
    }
  render() {
    return (
      <form  onSubmit={this.submitHandler}>
        <div>
            <label>Student name: </label>
            <input type="text" value={this.state.name} onChange={this.clickHandlerName}></input>
        </div>
        <div>
            <label>Student RollNum: </label>
            <input type="number" value={this.state.rollno} onChange={this.clickHandlerRollno}></input>
        </div>
        <div>
            <label htmlFor="sub1">Student Marks in Sub1: </label>
            <input type="number" name="sub1" value={this.state.sub1} onChange={this.clickHandlerMarks}></input>
        </div>
        <div>
            <label htmlFor="sub2">Student Marks in Sub2: </label>
            <input type="number" name="sub2" value={this.state.sub2} onChange={this.clickHandlerMarks}></input>
        </div>
        <div>
            <label htmlFor="sub3">Student Marks in Sub3: </label>
            <input type="number" name="sub3" value={this.state.sub3} onChange={this.clickHandlerMarks}></input>
        </div>
        <div>
            <label htmlFor="sub4">Student Marks in Sub4: </label>
            <input type="number" name="sub4" value={this.state.sub4} onChange={this.clickHandlerMarks}></input>
        </div>
        <div>
            <label htmlFor="sub5">Student Marks in Sub5: </label>
            <input type="number" name="sub5" value={this.state.sub5} onChange={this.clickHandlerMarks}></input>
        </div>
        <button type="submit" onClick={this.totalMarks}>Submit</button>
        <div>{this.state.totalMarks}</div>
      </form>
    )
  }
}

export default StudentGrades
