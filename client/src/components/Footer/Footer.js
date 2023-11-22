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
                <div class="info">
                    <div class="logo-detail">
                        <img src={AyBooks_logo} alt='logo' />
                        <p>"Libraries store the energy that fuels the imagination. They open up windows to the world and inspire
                            us to explore and achieve, and contribute to improving our quality of life."</p>
                    </div>

                    <div class="social-links">
                        <p class="link-heading">Connect with us</p>
                        <div class="instagram">
                            <img src={instagram} />
                            <p>Instagram</p>
                        </div>
                        <div class="facebook">
                            <img src={facebook} />
                            <p>Facebook</p>
                        </div>
                        <div class="twitter">
                            <img src={twitter} />
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div class="contact-us">
                        <p class="contact-heading">Contact Us</p>
                        <div class="phone">
                            <img src={phone} />
                            <p>+1 013-275-8916</p>
                        </div>
                        <div class="email">
                            <img src={message} />
                            <p>info@AyWood's.org</p>
                        </div>
                        <div class="location">
                            <img src={location} />
                            <p>2250 Crystal Springs Ds Los Angeles, CA 90027</p>
                        </div>
                    </div>
                </div>

                <div class="copyright">
                    All rights reserved. &nbsp; <span>&copy;</span> Ayesha Ashfaq.
                </div>
            </footer>
        </div>
    )
}

export default Footer