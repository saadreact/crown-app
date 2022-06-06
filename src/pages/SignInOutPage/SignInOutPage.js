import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/Signup/SignUp'
import './SignInOut.scss';

const SignInOutPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div> 
  )
}

export default SignInOutPage