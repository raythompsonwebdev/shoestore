import React, { useState } from "react";

function Registration() {
  const [username, setUserName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  // const [date, setDate] = useState(" ");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmails = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${username}, Email: ${email} ,  & this password ${password}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <form id="register-form" onSubmit={submit}>
      <ul>
        <li>
          <label htmlFor="username">
            Name:&#32;
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUserName}
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
              onChange={handleEmails}
              required
            />
          </label>
        </li>
        <li>
          <label htmlFor="password">
            Password: &#32;
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
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

export default Registration;
