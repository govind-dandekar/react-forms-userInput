import { useState } from 'react';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  function handleInputChange(value, inputIdentifier){
    setEnteredValues((previousValues) => {
      return (
        {
          ...previousValues,
          [inputIdentifier]: value
        }
      )
    })
  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange(event.target.value, "email")} 
            value={enteredValues.email}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(event) => handleInputChange(event.target.value, "password")}
            value={enteredValues.password}
          />
        </div>
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
