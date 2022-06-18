import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import CheckOutItem from '../../components/checkOutItem/CheckOutItem';
import StripeCheckoutbutton from '../../components/stripeCheckoutbutton/StripeCheckoutbutton';
import './CheckOutPage.scss';

const CheckOutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const Total = useMemo(
    () =>
    cartItems?.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
      }, 0),
    [cartItems]
  );
  
  return (
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${Total}
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutbutton price={Total}></StripeCheckoutbutton>
  </div>
  )
}

export default CheckOutPage