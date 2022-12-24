import { useState } from "react";
import { AppInput } from "./AppInput"

export function RegisterForm({ onSubmit }) {
  const [user, setUserData] = useState({ email: '', password: ''})
  
  const setUserEmail = (e) => {
    const email = e.target.value;
    setUserData({ ...user, email })
  }

  const setUserPassword = (e) => {
    const password = e.target.value;
    setUserData({ ...user, password })
  }

  const handleFormSubmit = (e) => {
    
    e.preventDefault()
    e.stopPropagation()


    const { email, password } = user

    if (!email.includes('@')) {
      return
    }

    if (!password.trim()) {
      return
    }

    onSubmit(user)
  }

  return (
    <>
      <h1>Please, register</h1>

      <form onSubmit={handleFormSubmit}>
        <AppInput
          name="email"
          label="Label"
          type="email"
          onChange={setUserEmail}
          value={user.email}
          required={true}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="password"
          onChange={setUserPassword}
          value={user.password}
          required={true}
        />

        {JSON.stringify(user)}

        <button>Submit</button>
      </form>
    </>
  )
}
