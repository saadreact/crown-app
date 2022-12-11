import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./SignUp.scss";
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        emailValidator:false
    });
    
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
        //do something else
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = state;
        
        if (password !== confirmPassword) {
            toast.error("Passwords don't match!");
            return;
        }
        const id = toast.loading("Loading...")
        
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            await createUserProfileDocument(user, { displayName }); //storing new user data to db
            
            debugger;
            setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            // ...
            toast.update(id, { render: "Sign up successfull!", type: "success", isLoading: false,autoClose:3000  });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                // ..
                toast.error(errorMessage);
            });
    };
    return (
        <div className="sign-up">
            <div className="title">
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
            </div>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={state.displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
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
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    label="Password"
                    required
                    inputProps={{maxLength:12}}

                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                    inputProps={{maxLength:12}}

                />
                <div className="buttons">
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </div>

            </form>
        </div>
    );
};

export default SignUp;
