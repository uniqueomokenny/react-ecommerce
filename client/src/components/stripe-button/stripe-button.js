import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jPO1MtcAbyylYSkZe0RGmRHw00QcwqEVKQ';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment successful');
      })
      .catch(err => {
        console.log('Payment error', JSON.parse(err));
        alert(
          'There was an error with your payment. You can make use of the test credit card'
        );
      });
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
