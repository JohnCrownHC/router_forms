import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import './StepOne.scss';

const StepOne = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameValid, setNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)

  const passwordHandler = (e) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    setPasswordValid(password.match(regex));
    setPassword(e.target.value);
  }

  const emailHandler = (e) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    setEmail(e.target.value);
    setEmailValid(email.match(regex));
  }

  const nameHandler = (e) => {
    console.log(name);
    const regex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/

    setName(e.target.value);
    setNameValid(name.match(regex));
  }

  const buttonChecker = () => {
    return (name && nameValid && email && emailValid && password && passwordValid)
  }

  return (
    <form className="step-one">
      <TextField
        className="step-one__field"
        value={name}
        onChange={nameHandler}
        required
        autoComplete='off'
        label="Name"
        variant="outlined"
        error={!nameValid}
        helperText={!nameValid && 'Incorrect name'}
      />
      <TextField
        className="step-one__field"
        required
        autoComplete='off'
        value={email}
        onChange={emailHandler}
        label="Email"
        type="email"
        variant="outlined"
        error={!emailValid}
        helperText={!emailValid && 'Incorrect email'}
      />
      <TextField
        className="step-one__field"
        required
        autoComplete='off'
        value={password}
        onChange={passwordHandler}
        label="Password"
        type="password"
        variant="outlined"
        error={!passwordValid}
        helperText={!passwordValid && 'Incorrect password'}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        type="submit"
        disabled={!buttonChecker()}
      >
        <Link className="step-one__link" to='/step/2'>
          Next step!
        </Link>
      </Button>
    </form>
  )
}

export default StepOne;
