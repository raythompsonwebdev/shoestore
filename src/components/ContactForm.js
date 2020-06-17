import React from "react";


class ContactForm extends React.Component { 
    
  constructor(props) {
    super(props);
    this.state = {
        username: ' ',
        comments: ' ',
        email: ' '
        
    };
    
    this.submit = this.submit.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    
  }  
  
  handleUserName = e =>{

    this.setState({
      username: e.target.value,
    })
  }

  handleComments = e =>{
    this.setState({
      comments: e.target.value,
    })
  }

  handleEmail = e =>{
    this.setState({
      email: e.target.value,
    })
  }

  submit = e => {  

    console.log(`Details : ${this.state.username}, ${this.state.email}, ${this.state.comments}`)

    e.preventDefault();
  }
  
  render(){

    return (
      <form  id="form" onSubmit={this.submit}>
        <ul>
          <li>
              <label htmlFor="username">Name:&#32; </label>
              <input 
                type="text" 
                name="username" 
                id="name" 
                value={this.state.username} 
                onChange={this.handleUserName} 
              />
          </li>
          <li>
              <label htmlFor="email">E-mail:&#32; </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={this.state.email} 
                onChange={this.handleEmail}                
              />
          </li>
          <li>
              <label htmlFor="message">Message:&#32; </label>
              <textarea 
                value={this.state.comments}
                onChange={this.handleComments}                
                name="message" 
                id="message" 
                cols="35" 
                rows="15"
              ></textarea>
              
          </li>
          <li>
              <label htmlFor="submit"></label>
              <input 
                type="submit" 
                value="Send" 
                id="submit" 
                name="submit" 
              />
          </li>
        </ul>

      </form>
    );

  }
          
        
   
}

export default ContactForm;