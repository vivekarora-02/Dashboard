import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        comment:'',
         username:'',
         topic:''
      }
    }
    handleCommentsChange = event=>{
        this.setState({
            comment: event.target.value
        })
    }
    handleUsernameChange = event=>{
        this.setState({
            username: event.target.value
        })
    }
   
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    submitHandler=event=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
    }
  render() {
    return (
        <form onSubmit={this.submitHandler}>
            <div>
                <label>comment</label>
                <input type="text"
                value={this.state.comment} 
                onChange = {this.handleCommentsChange}>
                </input>
            </div>
            <div>
                <label>username</label>
                <input type="text" 
                value={this.state.username} 
                onChange = {this.handleUsernameChange}></input>
            </div>
            <div>
                <label>topic</label>
                <select
                value={this.state.topic} 
                onChange={this.handleTopicChange}>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <div> 
                <button type="submit">Submit</button>
            </div>  
       
      </form>
    )
  }
}

export default Form;