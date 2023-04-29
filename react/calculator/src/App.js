import React, { Component } from 'react'
import Form from './components/forms'
import Calculate from './components/calc'
import Counter from './components/classCounter'
import HooksCounter from './components/HooksCounter'
import HooksObject from './components/HooksObject'
import HooksArray from './components/HooksArray'
import HooksEffect from './components/HooksEffect'
import StudentGrades from './components/studentGrades'
import Voting from './components/Voting'
import VotingHooks from './components/VotingHooks'
import Hooks from './components/Hooks'


//class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //      result: 0,
  //      first: 0,
  //      second:0
  //   }
  //   // this.handelClick = this.handelClick.bind(this)
  //   // this.cal = this.cal.bind(this)
  // }
  
  // addNumbers=()=>{
  //   this.setState({
  //     result: this.state.first + this.state.second
  //   })
  // }

  // subNum=()=>{
  //   this.setState({
  //     result: this.state.first - this.state.second
  //   })
  // }

  // mul=()=>{
  //   this.setState({
  //     result: this.state.first * this.state.second
  //   })
  // }
  // div=()=>{
  //   this.setState({
  //     result: this.state.first / this.state.second
  //   })
  // }

  // handelClick = (event) =>{
  //   if(event.target.name==="first"){
  //     this.setState({
  //       first: parseInt(event.target.value)
  //     })
  //   }

  //   if(event.target.name==="second"){
  //     this.setState({
  //       second: parseInt(event.target.value)
  //     })
  //   }
  // }

  // cal = () =>{
  //   this.setState({
  //     sum: this.state.first+this.state.second
  //   })
  // }

  // render(){
  //   return(
  //     <div>
  //       <label htmlFor="first">Enter Num1: </label>
  //       <input type="number" name ="first" value={this.state.first} onChange={this.handelClick}></input>
  //       <br></br>
  //       <label htmlFor="second">Enter Num2: </label>
  //       <input type="number" name ="second" value={this.state.second} onChange={this.handelClick}></input>
  //       <button onClick={this.cal}>Add</button>
  //       <div>{this.state.sum}</div>
  //     </div>
  //   )
  // }

//   render() {
//     return (
//       <div>
//         <div> {this.state.result}</div>
//         <button onClick={this.addNumbers.bind(this, 10, 20)}>Add</button>
//         <button onClick={this.subNum.bind(this, 10, 20)}>Sub</button>
//         <button onClick={this.mul.bind(this, 10, 20)}>Mul</button>
//         <button onClick={this.div.bind(this, 10, 20)}>Div</button>

//       </div>
//     )
//   }
// }



// export default App;


class App extends Component {
  render() {
    return (
      <div>
        {/* <Form></Form> */}
        {/* <Calculate></Calculate> */}
        {/* <Counter></Counter> */}
        {/* <HooksCounter></HooksCounter> */}
        {/* <HooksObject></HooksObject> */}
        {/* <HooksArray></HooksArray> */}
        {/* <HooksEffect></HooksEffect> */}
        {/* <StudentGrades></StudentGrades> */}
        {/* <Voting></Voting> */}
        <VotingHooks></VotingHooks>
        {/* <Hooks></Hooks> */}
      </div>
    )
  }
}


// class Comp_div extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             num1: 0,
//             num2: 0,
//             sum: 0,
//             visible: false
//         }

//         this.handlechange = this.handlechange.bind(this)
//         this.cacl = this.calc.bind(this)
//     }
//     handlechange = (event) => {

//         if (event.target.name === "num1") {
//             this.setState({
//                 num1: parseInt(event.target.value)
//             })
//         }
//         else {
//             this.setState({
//                 num2: parseInt(event.target.value)
//             })
//         }
//     }
//     calc = () => {
//         this.setState({
//             sum: this.state.num1 + this.state.num2,
//             visible: true
//         })
//     }
//     render() {

//         return (
//             <>
//                 <label htmlFor="num1">Enter Num1</label>
//                 <input type="number" name="num1" value={this.state.num1} onChange={this.handlechange} /><br />
//                 <label htmlFor="num2">Enter Num2</label>
//                 <input type="number" name="num2" id="" value={this.state.num2} onChange={this.handlechange} /><br />
//                 <button onClick={this.calc}>Calculate sum</button>
//                 {this.state.visible && <div>Sum is {this.state.sum}</div>}
//             </>
//         )
//     }

//   }
// }

export default App
