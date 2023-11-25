import React from 'react'
import '../Footer/footer.css';


// ================  IMPORT  IMAGES  ================= //

import AyBooks_logo from '../../assets/AyBooks_logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import phone from '../../assets/phone.png';
import message from '../../assets/message.png';
import location from '../../assets/location.png';

// =================================================== //


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="info">
                    <div className="logo-detail">
                        <img src={AyBooks_logo} alt='logo' />
                        <p>"Libraries store the energy that fuels the imagination. They open up windows to the world and inspire
                            us to explore and achieve, and contribute to improving our quality of life."</p>
                    </div>

                    <div className="social-links">
                        <p className="link-heading">Connect with us</p>
                        <div className="instagram">
                            <img src={instagram} />
                            <p>Instagram</p>
                        </div>
                        <div className="facebook">
                            <img src={facebook} />
                            <p>Facebook</p>
                        </div>
                        <div className="twitter">
                            <img src={twitter} />
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div className="contact-us">
                        <p className="contact-heading">Contact Us</p>
                        <div className="phone">
                            <img src={phone} />
                            <p>+1 013-275-8916</p>
                        </div>
                        <div className="email">
                            <img src={message} />
                            <p>info@AyWood's.org</p>
                        </div>
                        <div className="location">
                            <img src={location} />
                            <p>2250 Crystal Springs Ds Los Angeles, CA 90027</p>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    All rights reserved. &nbsp; <span>&copy;</span> Ayesha Ashfaq.
                </div>
            </footer>
        </div>
    )
}

export default Footer