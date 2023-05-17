import { SetStateAction, useState } from "react";

export default function RegisterForm() {
  const [username, setUserName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleUserName = (e: { target: { value: SetStateAction<string> } }) => {
    setUserName(e.target.value);
  };

  const handleEmails = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const submit = (e: { preventDefault: () => void }) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${username}, Email: ${email} & This comment: ${password}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <form id="contact-form" onSubmit={submit}>
      <ul id="contact-form-fields">
        <li className="contact-form-item">
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
        <li className="contact-form-item">
          <label htmlFor="email">
            E-mail:&#32;
            <input
              type="useremail"
              name="useremail"
              id="useremail"
              value={email}
              onChange={handleEmails}
              required
            />
          </label>
        </li>
        <li className="contact-form-item">
          <label htmlFor="message">
            Password:&#32;
            <input
              value={password}
              onChange={handlePassword}
              name="password"
              id="password"
            />
          </label>
        </li>
        <li className="contact-form-item">
          <label htmlFor="submit">
            <input type="submit" value="Send" id="submit" name="submit" />
          </label>
        </li>
      </ul>
    </form>
  );
}
