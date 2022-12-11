import React from "react";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import { CartDropDown } from "../cartDropDown/CartDropDown";
import { toggleCart } from "../../redux/slices/cartSlice";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./HeaderComponent.styles";
import { setCurrentUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const currentUser = useSelector(
    (state) => state.user.currentUser.currentUser
  );
  const toggler = useSelector(state => state.cart.hidden);
  const dispatch  = useDispatch();  
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoContainer to={"/home"} className="logo-container">
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
          <OptionLink  to={"/"}>
            SignIn
          </OptionLink>
        ) : (
          <OptionLink as="div"
            onClick={() => {
              auth.signOut();
              dispatch(setCurrentUser({
                currentUser: undefined
              }));
              navigate("/");
            }}
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
