import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/slices/cartSlice";
import { ReactComponent as ShoppingIcon } from "./../../assets/shoppingBag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  const memoisedLength = useMemo(
    () =>
      items?.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0),
    [items]
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart({type:"TOGGLE_CART"}))}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{memoisedLength}</span>
    </div>
  );
};

export default CartIcon;
