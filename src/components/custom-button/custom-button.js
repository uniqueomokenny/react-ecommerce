import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, ...rest }) {
  return (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  );
}
