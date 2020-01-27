import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, isGoogleSignIn, ...rest }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
}
