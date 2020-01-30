import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.action';

function SignIn(props) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { email, password } = values;

  const { googleSignInStart, emailSignInStart } = props;

  const handleSubmit = e => {
    e.preventDefault();

    emailSignInStart(email, password);
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
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
