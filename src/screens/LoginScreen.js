import React from 'react'
import { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/640px-Logonetflix.png" alt="" />

            </div>
            <button className='loginScreen__button' onClick={() => setSignIn(true)}>
                Sign In
            </button>
            <div className="loginScreen__gradient"></div>
            <div className="loginScreen__body">
                    {signIn ? (<SignInScreen/>):( <>
                    <h1>Unlimited movies, TV shows, and more.
                    </h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                    <form action="">
                        <input type="email" placeholder='Email Address'/>
                        <button className='loginScreen__getStarted' onClick={()=> setSignIn(true)}>
                            Get Started
                        </button>

                    </form>
                    </div> 
                </>) }
               
            </div>
        </div>
    )
}

export default LoginScreen