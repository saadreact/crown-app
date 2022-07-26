import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/slices/cartSlice";
import "./CheckOutItem.scss";

const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(toggleCart({type:"REMOVE_FROM_CART",payload:cartItem}))}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(toggleCart({type:"ADD_TO_CART",payload:cartItem}))}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => dispatch(toggleCart({type:"CLEAR_ITEM_FROM_CART",payload:cartItem}))}>&#10005;</div>
        </div>
    );
};

export default CheckOutItem;
