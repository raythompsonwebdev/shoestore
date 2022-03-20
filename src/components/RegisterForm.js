import React, { Component } from "react";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      email: " ",
      date: " ",
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleDate = this.handleDate.bind(this);
    // this.submit = this.submit.bind(this);
  }

  handleUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  submit = (e) => {
    // const { username, email, comments } = { ...this.state };

    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${this.state.username}, Email: ${this.state.email} & This comment: ${this.state.date}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  render() {
    const { username, email, date } = { ...this.state };
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
                onChange={this.handleEmail}
                required
              />
            </label>
          </li>
          <li>
            <label htmlFor="date">
              Date:&#32;
              <input
                type="hidden"
                name="date"
                id="date"
                value={date}
                onChange={this.handleDate}
                required
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

export default RegisterForm;
