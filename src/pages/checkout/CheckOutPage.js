import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import CheckOutItem from '../../components/checkOutItem/CheckOutItem';
import './CheckOutPage.scss';

const CheckOutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const Total = useMemo(
    () =>
    cartItems?.reduce((acc, item) => {
        return acc + item.price;
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
    <div className='total'>TOTAL: ${Total}</div>
  </div>
  )
}

export default CheckOutPage