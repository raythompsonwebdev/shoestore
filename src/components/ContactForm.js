import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' ',
      comments: ' ',
      email: ' ',
    };

    this.submit = this.submit.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleComments(e) {
    this.setState({
      comments: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  submit(e) {
    console.log(
      `Details : ${this.state.username}, ${this.state.email}, ${this.state.comments}`,
    );

    e.preventDefault();
  }

  render() {
    const { username, email, comments } = this.state;
    return (
      <form id="form" onSubmit={this.submit}>
        <ul>
          <li>
            <label htmlFor="username">Name:&#32;</label>
            <input
              type="text"
              name="username"
              id="name"
              value={username}
              onChange={this.handleUserName}
            />
          </li>
          <li>
            <label htmlFor="email">E-mail:&#32; </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleEmail}
            />
          </li>
          <li>
            <label htmlFor="message">Message:&#32; </label>
            <textarea
              value={comments}
              onChange={this.handleComments}
              name="message"
              id="message"
              cols="35"
              rows="15"
            />
          </li>
          <li>
            <label htmlFor="submit" />
            <input type="submit" value="Send" id="submit" name="submit" />
          </li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
