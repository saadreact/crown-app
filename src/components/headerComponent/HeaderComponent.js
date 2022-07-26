import React from "react";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import { CartDropDown } from "../cartDropDown/CartDropDown";
import { toggleCart } from "../../redux/slices/cartSlice";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./HeaderComponent.styles";

const HeaderComponent = () => {
  const currentUser = useSelector(
    (state) => state.user.currentUser.currentUser
  );
  const toggler = useSelector(state => state.cart.hidden);
  const dispatch  = useDispatch();  

  return (
    <HeaderContainer>
      <LogoContainer to={"/"} className="logo-container">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to={"/shop"}>
          Shop
        </OptionLink>
        {/* <OptionLink  to={"/shop"}>
          Contact
        </OptionLink> */}
        {!currentUser ? (
          <OptionLink  to={"/signin"}>
            SignIn
          </OptionLink>
        ) : (
          <OptionLink as="div"
            onClick={() => auth.signOut()}
          >
            SignOut
          </OptionLink>
        )}
          <CartIcon  onClick={() => dispatch(toggleCart())}/>
      </OptionsContainer>
         {toggler ? <CartDropDown/> : null}
    </HeaderContainer>
  );
};

export default HeaderComponent;
