import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import {auth} from './../../firebase/firebase.utils'

const HeaderComponent = ({currentUser}) => {
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
        {
          !currentUser ? 
          <Link className="option" to={"/signin"}>
            SignIn
          </Link> :
          <div className="option" style={{cursor:"pointer"}} onClick={() => auth.signOut()}>SignOut</div>
        }
      </div>
      </div>
  );
};

export default HeaderComponent;
