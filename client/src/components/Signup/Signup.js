import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Signup/signup.css';


const Signup = () => {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "", CNIC: "", email: "", phone: "", address: "", debit_card: "", mm_yy: "", cvc: "", password: "", cPassword: ""
    });

    const handleInput_customer = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setCustomer((prev) => {
            return { ...prev, [name]: value };
        });
    };

    // =============================================== //
    
    const [formErrors, setFormErrors] = useState({});

    const handleErrors = (e) =>{
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
    }


    const validate = () => {
        const errors = {};
        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
        const regexe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        const { name, CNIC, address, debit_card, mm_yy, cvc, phone, email, password, cPassword } = customer;
    
        if (!name || !CNIC || !address || !debit_card || !mm_yy || !cvc || !phone || !email || !password || !cPassword) {
            errors.empty = "Fill all fields";
        }
    
        if(CNIC.length > 13 || CNIC.length < 13){
            errors.CNIC = "CNIC must contain 13 digits"
        }
        else if(debit_card.length > 16 || debit_card.length < 16){
            errors.debit_card = "Debit Card must contain 16 digits"
        }
        else if(mm_yy.length > 4 || mm_yy.length < 4){
            errors.mm_yy = "MM/YY must contain 4 digits"
        }
        else if(cvc.length > 4 || cvc.length < 3){
            errors.cvc = "MM/YY must contain 4 digits"
        }
        else if(phone.length > 4 || phone.length < 3){
            errors.phone = "Phone Number must contain 11 digits"
        }
        else if(!regexe.test(email)){
            errors.email = "Invalid email format"
        }
        else if (!regexp.test(password)) {
            errors.password = "Passsword must contain atleast one Uppercase, Lowercase, Number, Special character";
        }
        else if (password != cPassword) {
            errors.password = "Password should be same";
        }
    
        return errors;
    }
    

    // =============================================== //

    const PostData = async (e) => {
        e.preventDefault();

        const { name, CNIC, address, debit_card, mm_yy, cvc, phone, email, password, cPassword } = customer;

        
        // if(errors){
        //     return res.status(422).json({ error: "Fill all fields" });
        // }

        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, CNIC, address, debit_card, mm_yy, cvc, phone
            })
        });

        if (res.status === 422 || !res) {
            window.alert('Invalid Registration');
        }
        else if (res.status === 500) {
            window.alert(res.json);
        }
        else {
            window.alert('Registration successfull');
            navigate('/login');
        }
    }


    return (
        <div>
            <div className="shop-bg">
                <p>Registration</p>
            </div>
            <div className="login-signup">
                <div className="signup">
                    <p className="heading">NEW CUSTOMERS</p>
                    <p className="info">If you doesn't have an account with us, Please Signup!</p>

                    {/* <p className='error'>{errors}</p> */}

                    <form method='POST'>
                        <input type="text" name="name" id="name" value={customer.name} onChange={handleInput_customer} placeholder="Name" />
                        <input type="number" name="CNIC" id="cnic" value={customer.CNIC} onChange={handleInput_customer} placeholder="CNIC" />
                        <input type="email" name="email" id="email" value={customer.email} onChange={handleInput_customer} placeholder="Email" />
                        <input type="number" name="phone" id="phone" value={customer.phone} onChange={handleInput_customer} placeholder="Phone Number" />
                        <input type="text" name="address" id="address" value={customer.address} onChange={handleInput_customer} placeholder="Address" />
                        <input type="number" name="debit_card" id="debit" value={customer.debit_card} onChange={handleInput_customer} placeholder="Debit Card Number" />
                        <input type="number" name="mm_yy" id="mm_yy" value={customer.mm_yy} onChange={handleInput_customer} placeholder="MM/YY" />
                        <input type="number" name="cvc" id="cvc" value={customer.cvc} onChange={handleInput_customer} placeholder="CVC" />
                        <input type="password" name="password" id="password" value={customer.password} onChange={handleInput_customer} placeholder="Password" />
                        <input type="password" name="CPassword" id="confirmPassword" placeholder="Confirm Password" />
                        <input className="btn" type="submit" name='signup' id='signup' value="REGISTER" onClick={PostData} />
                    </form>
                    {/* <button className="btn"><Link to="/">REGISTER</Link></button> */}

                </div>
            </div>
        </div>
    )
}

export default Signup
