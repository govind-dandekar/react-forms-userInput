import { useRef, useState } from 'react';

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event){
    // prevent default browser http request
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid){
      setEmailIsInvalid(true);
      // ensure no other code after executes if invalid data entered
      return;
    }

    setEmailIsInvalid(false);

    console.log('Sending HTTP Request...')

    // reset form  - should typically have React update DOM
    // and not make imperative changes to DOM
    // emailRef.current.value = '';
    // passwordRef.current.value = '';
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
            ref={emailRef} 
            formNoValidate
          />
            <div className="control-error">
              {emailIsInvalid && <p>Please input a valid email address</p>}
            </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={passwordRef} 
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
