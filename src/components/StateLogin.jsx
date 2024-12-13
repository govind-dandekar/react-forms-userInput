import { useState } from 'react';

import Input from './Input.jsx'

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // validate email on every keystroke
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && !enteredValues.password.trim().length < 6;

  function handleInputChange(value, inputIdentifier){
    setEnteredValues((previousValues) => {
      return (
        {
          ...previousValues,
          [inputIdentifier]: value
        }
      )
    })
    // once user edits field again, set didEdit to false
    // will be reset to true once user completes input (onBlur fx)
    // fires
    setDidEdit((previousValues) => ({
      ...previousValues,
      [inputIdentifier]: false
    }))
  }

  function handleInputBlur(inputIdentifier) {
    setDidEdit((previousValues) => ({
      ...previousValues,
      [inputIdentifier]: true
    }))
  }

  function handleSubmit(event){
    // prevent default browser http request
    event.preventDefault();
    console.log('userEmail: ' + enteredValues.email);
    console.log('password: ' + enteredValues.password)
    // reset form
    setEnteredValues({
      email: '',
      password: ''
    })
  }
  
  // form triggers submit event when button pressed
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input 
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange(event.target.value, "email")} 
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'} 
        />
        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange(event.target.value, "password")}
          value={enteredValues.password}
          error={emailIsInvalid && 'Please enter a valid password'} 
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* if type="button" set, then button will not submit form 
            default type="submit" */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
