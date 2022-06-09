import './CartDropDown.scss';
import React from 'react'
import CustomButton from '../customButton/CustomButton';

export const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
        <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
  )
}
