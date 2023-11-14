import React from 'react'
import '../Signup/signup.css';


const Signup = () => {
    return (
        <div>
            <div class="login-signup">
                <div class="signup">
                    <p class="heading">NEW CUSTOMERS</p>
                    <p class="info">If you doesn't have an account with us, Please Signup!</p>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm password" />
                    <button class="btn"><Link to="/">REGISTER</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Signup