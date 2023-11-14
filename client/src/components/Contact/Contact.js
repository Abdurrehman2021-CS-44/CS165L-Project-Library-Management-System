import React from 'react'
import '../Contact/contact.css';


const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>
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