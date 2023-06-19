import { SetStateAction, useState } from "react";
//import { useRouter } from "next/router";

export default function RegisterForm() {
  const [username, setUserName] = useState<string>(" ");
  const [useremail, setEmail] = useState<string>(" ");
  const [password, setPassword] = useState<string>(" ");
  const [error, setError] = useState<string>(" ");

  // const router = useRouter();

  const handleUserName = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target;
    // const { srcElement }: any = e;
    // // check if input matches pattern
    // if (
    //   srcElement.validity.patternMismatch ||
    //   srcElement.validity.tooShort ||
    //   srcElement.validity.tooLong
    // ) {
    //   //error.classList.remove("hide-error");
    //   //error.classList.add("show-error");
    //   setError("Name must not contain numbers or be less than 3 characters.");
    //   //srcElement.classList.add("dirty");
    // } else {
    //   //error.classList.add("hide-error");
    //   //error.classList.remove("show-error");
    //   setError(" ");
    //   // srcElement.classList.add("dirty");
    // }
    setUserName(value);
  };

  const handleEmails = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target;
    // const { srcElement }: any = e;

    // // regex to detect valid email
    // const emailRegExp =
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // // check if input matches pattern
    // if (!emailRegExp.test(srcElement.value)) {
    //   //error.classList.add("show-error");
    //   //error.classList.remove("hide-error");
    //   setError("Please provide a valid e-mail address!");
    //   //srcElement.classList.add("dirty");
    // } else {
    //   // error.classList.add("hide-error");
    //   // error.classList.remove("show-error");
    //   setError(" ");
    //   // srcElement.classList.add("dirty");
    // }
    setEmail(value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target;
    setPassword(value);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    // console.log(
    //   // eslint-disable-next-line react/destructuring-assignment
    //   `You have entered Username:${username}, Email: ${useremail} & Password: ${password}. This form is under maintenance and will be ready to use shortly`
    // );
    try {
      const response = await fetch("/api/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email: useremail, password }),
      });

      const result = await response.json();

      console.log(result);

      //router.push("/");
    } catch (err) {
      console.error("not working : " + err);
    }
  };

  return (
    <form id="contact-form" onSubmit={submit}>
      <span id="form-error" className="hide-error">
        {error ? error : ""}
      </span>
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
              pattern="^[a-zA-Z\s]+$"
              aria-describedby="form-error"
            />
          </label>
        </li>
        <li className="contact-form-item">
          <label htmlFor="email">
            E-mail:&#32;
            <input
              type="email"
              name="useremail"
              id="useremail"
              value={useremail}
              onChange={handleEmails}
              required
              aria-describedby="form-error"
            />
          </label>
        </li>
        <li className="contact-form-item">
          <label htmlFor="password">
            Password:&#32;
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              id="password"
              required
              aria-describedby="form-error"
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
