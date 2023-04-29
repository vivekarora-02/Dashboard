import React, {useState, useEffect} from 'react';


function Comp_div() {

    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [visible, setvisible] = useState(false);
    const [sum, setsum] = useState(0);
    const handlechange = (event) => {
        if (event.target.name === "num1") {
            setnum1(parseInt(event.target.value));
        }
        else {
            setnum2(parseInt(event.target.value));
        }
    }
    const calc = () => {
        setvisible(true)
        setsum(num1 + num2)
    }
    return (
        <>
            <label htmlFor="num1">Number 1</label>
            <input type="number" name="num1" id="" value={num1} onChange={handlechange} />
            <label htmlFor="num2">Number 2</label>
            <input type="number" name="num2" id="" value={num2} onChange={handlechange} />
            <button onClick={calc}>Calculate Sum</button>
            {visible && <div>Sum is {sum}</div>}
        </>

    )
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





// }

export default Comp_div;