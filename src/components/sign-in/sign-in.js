import React, { useState } from 'react';
import FormInput from '../form-input/form-input';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { email, password } = values;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    setValues({
      email: '',
      password: ''
    });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          id='email'
          required
          label='Email'
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          id='password'
          required
          value={password}
          handleChange={handleChange}
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
