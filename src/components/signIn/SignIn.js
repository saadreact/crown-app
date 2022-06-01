import React, { useState } from 'react'
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';
import "./Sign-in.scss";

const SignIn = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <div className="sign-in">
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput name="email" value={state.email} handleChange={handleChange} label="Email" type="email" />
                <FormInput name="password" value={state.password} handleChange={handleChange} label="Password" type="password" />

                <CustomButton onClick={handleSubmit}>Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn