import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./SignUp.scss";

const SignUp = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await createUserProfileDocument(user, { displayName }); //storing new user data to db
                setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
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
                />
                <FormInput
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
