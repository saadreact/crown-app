import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import { CartDropDown } from "../cartDropDown/CartDropDown";
import { toggleCart } from "../../redux/slices/cartSlice";

const HeaderComponent = () => {
  const currentUser = useSelector(
    (state) => state.user.currentUser.currentUser
  );
  const toggler = useSelector(state => state.cart.hidden);
  const dispatch  = useDispatch();  

  return (
    <div className="header">
      <Link to={"/"} className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={"/shop"}>
          Shop
        </Link>
        <Link className="option" to={"/shop"}>
          Contact
        </Link>
        {!currentUser ? (
          <Link className="option" to={"/signin"}>
            SignIn
          </Link>
        ) : (
          <div
            className="option"
            style={{ cursor: "pointer" }}
            onClick={() => auth.signOut()}
          >
            SignOut
          </div>
        )}
          <CartIcon  onClick={() => dispatch(toggleCart())}/>
      </div>
         {toggler ? <CartDropDown/> : null}
    </div>
  );
};

export default HeaderComponent;
