import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user.action';

function SignUp(props) {
  const [values, setValue] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = values;

  const handleSubmit = e => {
    const { signUpStart } = props;
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match!");
      return;
    }

    signUpStart(displayName, email, password);

    // setValue({
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    // });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          required
          handleChange={onChange}
        />

        <FormInput
          type='emai'
          name='email'
          label='Email'
          value={email}
          required
          handleChange={onChange}
        />

        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          required
          handleChange={onChange}
        />

        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          required
          handleChange={onChange}
        />

        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
