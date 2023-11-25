import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Signup/signup.css';


const Signup = () => {

    const [customer, setCustomer] = useState({
        name: "", CNIC: "", email: "", phone: "", address: "", debit_card: "", mm_yy: "", cvc: "", password: "", cPassword: ""
    });

    const handleInput_customer = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // alert(value)

        setCustomer((prev) => {
            return { ...prev, [name]: value };
        });
    };

    
    // const [credentials, setCredentials] = useState({
    //     username: "", password: "", user_id: ""
    // });

    // const handleInput_credentials = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     console.log(value);

    //     setCredentials((prev) => {
    //         return { ...prev, name: value };
    //     });
    // };

    return (
        <div>
            <div className="shop-bg">
                <p>Registration</p>
            </div>
            <div className="login-signup">
                <div className="signup">
                    <p className="heading">NEW CUSTOMERS</p>
                    <p className="info">If you doesn't have an account with us, Please Signup!</p>
                    <form>
                        <input type="text" name="name" id="name" value={customer.name} onChange={handleInput_customer} placeholder="Name"  autoComplete='off'/>
                        <input type="number" name="CNIC" id="cnic" value={customer.CNIC} onChange={handleInput_customer} placeholder="CNIC" />
                        <input type="email" name="email" id="email" value={customer.email} onChange={handleInput_customer} placeholder="Email" />
                        <input type="phone" name="phone" id="phone" value={customer.phone} onChange={handleInput_customer} placeholder="Phone Number" />
                        <input type="text" name="address" id="address" value={customer.address} onChange={handleInput_customer} placeholder="Address" />
                        <input type="number" name="debit_card" id="debit" value={customer.debit_card} onChange={handleInput_customer} placeholder="Debit Card Number" />
                        <input type="number" name="mm_yy" id="mm_yy" value={customer.mm_yy} onChange={handleInput_customer} placeholder="MM/YY" />
                        <input type="number" name="cvc" id="cvc" value={customer.cvc} onChange={handleInput_customer} placeholder="CVC" />
                        <input type="password" name="password" id="password" value={customer.password} onChange={handleInput_customer} placeholder="Password" autoComplete='off' />
                        <input type="password" name="CPassword" id="confirmPassword" placeholder="Confirm Password" autoComplete='off' />
                        <input className="btn" type="submit" name='signup' id='signup' value="REGISTER" />
                    </form>
                    {/* <button className="btn"><Link to="/">REGISTER</Link></button> */}

                </div>
            </div>
        </div>
    )
}

export default Signup
