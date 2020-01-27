import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';

export default function Cart() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
