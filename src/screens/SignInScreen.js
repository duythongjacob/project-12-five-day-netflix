import React, { useRef } from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import './SignInScreen.css'
function SignInScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email, password)
    .then( (authUser)=> {
        console.log(authUser);
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    })

  }
  const signIn = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(auth,email, password)
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      const  errorMessage = error.message
      alert(errorMessage)
    })
  }

  return (
    <div className="signupScreen">
      <form action="">
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='password' />
        
          <button type="submit" onClick={signIn} >Sign In</button>
          <h4>
            <span className='signupScreen__gray'>New to Netflix? </span>
            <span className='signupScreen__link' onClick={register}>Sign Up now</span>  </h4>
      </form>
    </div>
  )
}

export default SignInScreen