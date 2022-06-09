import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/slices/cartSlice";
import { ReactComponent as ShoppingIcon } from "./../../assets/shoppingBag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
