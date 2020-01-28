import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...rest
}) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
}

// import { CustomButtonContainer } from './custon-button.styles';

// export default function CustomButton({ children, ...props }) {
//   return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
// }
