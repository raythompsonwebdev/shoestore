import { SetStateAction, useState } from 'react'
import { useRouter } from 'next/router'

export default function RegisterForm() {
  const [username, setUserName] = useState<string>('')
  const [useremail, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  //const [error, setError] = useState<string>(' ')

  const router = useRouter()

  const handleUserName = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target
    setUserName(value)
  }

  const handleEmails = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target
    setEmail(value)
  }

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    const { value } = e.target
    setPassword(value)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, email: useremail, password }),
      })

      if (!response.ok) {
        console.log(response.status)
      }

      const result = await response.json()

      if (result) {
        router.push({
          pathname: '/thankyou',
          query: { username,useremail},
        })
      }
    } catch (err) {
      console.error('Something went wrong', err)
    }
  }

  return (
    <form id="register-form" onSubmit={submit}>
      {/* <span id="form-error" className="hide-error">
        {error ? error : ''}
      </span> */}
      <ul id="register-form-fields">
        <li className="register-form-item">
          <label htmlFor="username">
            Name:&#32;
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUserName}
              minLength={4}
              maxLength={30}
              pattern="^[a-zA-Z\s]+$"
              required={true}
              aria-describedby="form-error"
            />
          </label>
        </li>
        <li className="register-form-item">
          <label htmlFor="email">
            E-mail:&#32;
            <input
              type="email"
              name="useremail"
              id="useremail"
              value={useremail}
              onChange={handleEmails}
              required={true}
              minLength={10}
              maxLength={50}
              // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i"
              aria-describedby="form-error"
            />
          </label>
        </li>
        <li className="register-form-item">
          <label htmlFor="password">
            Password:&#32;
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              id="password"
              required={true}
              minLength={6}
              maxLength={20}
              aria-describedby="form-error"
            />
          </label>
        </li>
        <li className="register-form-item">
          <label htmlFor="submit">
            <input type="submit" value="Send" id="submit" name="submit" />
          </label>
        </li>
      </ul>
    </form>
  )
}
