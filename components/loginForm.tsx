import { SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../helpers";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState<string>(" ");
  const [password, setPassword] = useState<string>(" ");
  const router = useRouter();

  const handleEmails = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target;
    setPassword(value);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${email}, This comment: ${password}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();

    try {
      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        console.log(loginRes.error || "");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      if (error) {
        const errorMsg = error;
        console.log(errorMsg);
      }
    }
  };

  return (
    <form id="contact-form" onSubmit={submit}>
      <ul id="contact-form-fields">
        <li className="contact-form-item">
          <label htmlFor="email">
            E-mail:&#32;
            <input
              type="email"
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
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              id="password"
              required
            />
          </label>
        </li>
        <li className="contact-form-item">
          <label htmlFor="submit">
            <input type="submit" value="Send" id="submit" name="submit" />
          </label>
        </li>
      </ul>
      <p style={{ display: "block", lineHeight: "50px" }}>
        Not Registered?{" "}
        <Link href={`/register`} title="" style={{ display: "inline" }}>
          Register Here
        </Link>
      </p>
    </form>
  );
}
