import React, { useState } from 'react';
import FormInput from '../form-input/form-input';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.util';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
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
          value={values.email}
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          id='password'
          required
          value={values.password}
          handleChange={handleChange}
          label='Password'
        />

        <CustomButton type='submit'>Sign in</CustomButton>

        <CustomButton onClick={signInWithGoogle}>
          Sign in with Google
        </CustomButton>
      </form>
    </div>
  );
}
