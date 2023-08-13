import { SetStateAction, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RegisterForm() {
  const [username, setUserName] = useState<string>('')
  const [useremail, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const router = useRouter()

  useEffect(() => {

    const form = document.querySelectorAll('#register-form input') ;
    const formError = document.querySelector('#form-error');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formElements : any = Array.from(form)

    formElements[0].addEventListener('focusout',(e: {
      preventDefault: () => void;
      target: HTMLInputElement;
    }): void => {
      e.preventDefault();


      if(formError?.textContent !== ""){
        setError("")
      }


      const {target} = e;

      if(target.validity.tooShort === true ){
        setError("Full name should be at least 4 characters long")
      }

      if(target.validity.tooLong === true ){
        setError("Full name should be less than 30 characters")
      }

      if(target.validity.patternMismatch === true ){
        setError("No Numbers or Special Characters")
      }
    })

    formElements[1].addEventListener('focusout',(e: {
      preventDefault: () => void;
      target: HTMLInputElement;
    }): void =>{
      e.preventDefault();

      if(formError?.textContent !== ""){
        setError("")
      }

      const {target} = e;

      if(target.validity.tooShort === true ){
        setError("Full email should be more than 4 characters long")
      }

      if(target.validity.tooLong === true ){
        setError("Full name should be less than 50 characters")
      }

    })

    formElements[2].addEventListener('focusout',(e: {
      preventDefault: () => void;
      target: HTMLInputElement;
    }): void =>{
      e.preventDefault();

      if(formError?.textContent !== ""){
        setError("")
      }

      const {target} = e;

      if(target.validity.tooShort === true ){
        setError("Full name should be at least 12 characters long")
      }

      if(target.validity.tooLong === true ){
        setError("Full name should be less than 25 characters")
      }

    })


  }, [])


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
      {/* <span id="form-error" className="hide-error"> */}
      <span id="form-error" >
        {error ? error : ''}
      </span>
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
              maxLength={29}
              pattern="^[a-zA-Z]+$"
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
              minLength={4}
              maxLength={30}
              required={true}
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
              minLength={12}
              maxLength={25}
              required={true}
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
