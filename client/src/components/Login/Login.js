import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/login.css';


const Login = () => {
    return (
        <div>
            <div class="shop-bg">
                <p>Login</p>
            </div>
            <div class="login-signup">
                <div class="login">
                    <p class="heading">REGISTERED CUSTOMERS</p>
                    <p class="info">If you have an account with us, Please login!</p>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button class="btn"><Link to="/">LOGIN</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Login