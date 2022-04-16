import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    handleForm();
  }, [email, password]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    login({ email, password });
  };

  const handleForm = () => {
    if (email.length >= 1 && password.length >= 1) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <div>
      <div>
        <label style={{ display: 'block' }} htmlFor='email'>E-mail</label>
        <input
          id='email'
          name='email'
          type='text'
          onChange={handleEmail}
          value={email}
        />
      </div>
      <div>
        <label style={{ display: 'block' }} htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={handlePassword}
          value={password}
        />
      </div>
      <button onClick={handleLogin} disabled={!formIsValid}>Login</button>
    </div>
  );
}

export default Login;
