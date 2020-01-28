import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jPO1MtcAbyylYSkZe0RGmRHw00QcwqEVKQ';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='React E-commerce'
      shippingAddress
      billingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
