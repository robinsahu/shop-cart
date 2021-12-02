import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 10;
  const publishableKey =
    "pk_test_51K2JXQSCCuuPxn6dA2tM0SllgMwPcD4zthWm1uMxpiCAbIqLNjdp0M2Gu6GJTVp3rhwf0PyxoxKQyqeqoVERA1mz00jN6q78Qq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop-Cart Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
