import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../firebase/firebase.utils";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./Sign-in.scss";
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();     
  const navigate = useNavigate();


  // functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "email"){
        if(isEmail(value)){
            setState({ ...state, [name]: value ,emailValidator:false });

        } else {
            setState({ ...state, [name]: value ,emailValidator:true });
        }
    } else {
        setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = async (e) => {

    const id = toast.loading("Loading...")

    e.preventDefault();
    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setCurrentUser({
          currentUser: {
            id: user.uid,
            email: user.email,
            createdAt: user.metadata.creationTime,
            displayName: user.displayName
        }
        }));

        toast.update(id, { render: "Logged in successfully", type: "success", isLoading: false,autoClose:3000 });
        navigate("/home");
        toast.clearWaitingQueue();
        
        setState({
            email: "",
            password: "",
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);

      });
  };

  const signInfun = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        dispatch(setCurrentUser({
          currentUser: {
            id: user.uid,
            email: user.email,
            createdAt: user.metadata.creationTime,
            displayName: user.displayName
          }
        }));
        toast.update({ render: "Logged in successfully", type: "success", isLoading: false,autoClose:3000 });
        navigate("/home");

        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        toast.error(errorMessage);
      });
  };
  return (
    <div className="sign-in">
      <div className="title">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            label="Email"
            required
            error={state.emailValidator}
            helperText={state.emailValidator ? "Invalid email format" : null}

        />
        <FormInput
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          type="password"
          inputProps={{maxLength:12}}
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={() => signInfun()} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
