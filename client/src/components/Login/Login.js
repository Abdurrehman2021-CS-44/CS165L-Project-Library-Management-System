import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/login.css';


const Login = () => {

    const [credentials, setCredentials] = useState({
        username: "", password: "", user_id: ""
    });
    
    return (
        <div>
            <div className="shop-bg">
                <p>Login</p>
            </div>
            <div className="login-signup">
                <div className="login">
                    <p className="heading">REGISTERED CUSTOMERS</p>
                    <p className="info">If you have an account with us, Please login!</p>
                    <form>
                        <input type="text" name="" id="Userame" autoComplete='off' placeholder="Userame" />
                        <input type="password" id="password" autoComplete='off' placeholder="Password" />
                        <input type="password" id="confirmPassword" autoComplete='off' placeholder="Confirm Password" />
                        <input className="btn" type="submit" name='login' id='login' value="LOGIN" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login