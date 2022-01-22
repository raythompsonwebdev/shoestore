import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      comments: " ",
      email: " ",
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleEmails = this.handleEmails.bind(this);
    // this.submit = this.submit.bind(this);
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

  handleEmails(e) {
    this.setState({
      email: e.target.value,
    });
  }

  submit = (e) => {
    // const { username, email, comments } = { ...this.state };
    // eslint-disable-next-line no-console

    // eslint-disable-next-line no-console
    // console.log(e);
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${this.state.username}, Email: ${this.state.email} & This comment: ${this.state.comments}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  render() {
    const { username, email, comments } = { ...this.state };
    return (
      <form id="form" onSubmit={this.submit}>
        <ul>
          <li>
            <label htmlFor="username">
              Name:&#32;
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={this.handleUserName}
                required
              />
            </label>
          </li>
          <li>
            <label htmlFor="email">
              E-mail:&#32;
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleEmails}
                required
              />
            </label>
          </li>
          <li>
            <label htmlFor="message">
              Message:&#32;
              <textarea
                value={comments}
                onChange={this.handleComments}
                name="message"
                id="message"
                cols="35"
                rows="10"
              />
            </label>
          </li>
          <li>
            <label htmlFor="submit">
              <input type="submit" value="Send" id="submit" name="submit" />
            </label>
          </li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
