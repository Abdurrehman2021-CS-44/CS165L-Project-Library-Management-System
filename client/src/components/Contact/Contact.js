import React from 'react'
import { Link } from 'react-router-dom';
import '../Contact/contact.css';


const Contact = () => {
    return (
        <div>
            <div className="shop-bg">
                <p>Contact Us</p>
            </div>

            <div className="contact-form">
                <div className="text">
                    <span>Contact</span>
                    <p>Interested! Lets talk</p>
                </div>
                <div className="contact">
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Email Address" />
                    <textarea placeholder="Message"></textarea>
                    <button className="btn"><Link to="/">Send Message</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Contact