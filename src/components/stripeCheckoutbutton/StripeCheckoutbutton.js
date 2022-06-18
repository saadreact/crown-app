import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeCheckoutbutton.scss";

const StripeCheckoutbutton = ({ price }) => {
  const perishableKEY =
    "pk_test_51L9r9dGli9bvD6RjiIRS22iN6jqpeha7ktXyg1OYdu7CuLuyXJZOodI2a3F5u7RGRqoPNcA8wPECEpdatiFSTZOE00jx7yMSG5";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <div className="stripe-div">
      <StripeCheckout
        name="Crown clothing limited" // the pop-in header title
        ComponentClass="div"
        image="http://svgshare.com/i/CUz.svg"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now" // prepended to the amount in the bottom pay button
        label="Pay Now" // prepended to the amount in the bottom pay button
        token={onToken}
        stripeKey={perishableKEY}
      ></StripeCheckout>
    </div>
  );
};

export default StripeCheckoutbutton;
