import "./CartDropDown.scss";
import React from "react";
import CustomButton from "../customButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../redux/slices/cartSlice";
import {useLocation} from 'react-router-dom';

export const CartDropDown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      { location.pathname !== '/checkout' ? 
          <CustomButton
            onClick={() => {
              dispatch(toggleCart({type:"TOGGLE_CART"}));
              navigate("/checkout");
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        : 
          <CustomButton
            onClick={() => {
              dispatch(toggleCart({type:"TOGGLE_CART"}));
              navigate("/");
            }}
          >
            GO TO HOME PAGE
          </CustomButton> 
      }
    </div>
  );
};
