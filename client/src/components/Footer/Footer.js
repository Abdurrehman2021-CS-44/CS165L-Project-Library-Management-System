import React from 'react'
import '../Footer/footer.css';


const Footer = () => {
    return (
        <div>
            <footer>
                <div class="info">
                    <div class="logo-detail">
                        <img src="img/AyBook's-logo-removebg.png" />
                        <p>"Libraries store the energy that fuels the imagination. They open up windows to the world and inspire
                            us to explore and achieve, and contribute to improving our quality of life."</p>
                    </div>

                    <div class="social-links">
                        <p class="link-heading">Connect with us</p>
                        <div class="instagram">
                            <img src="img/instagram.png" />
                            <p>Instagram</p>
                        </div>
                        <div class="facebook">
                            <img src="img/facebook.png" />
                            <p>Facebook</p>
                        </div>
                        <div class="twitter">
                            <img src="img/twitter.png" />
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div class="contact-us">
                        <p class="contact-heading">Contact Us</p>
                        <div class="phone">
                            <img src="img/phone.png" />
                            <p>+1 013-275-8916</p>
                        </div>
                        <div class="email">
                            <img src="img/message.png" />
                            <p>info@AyWood's.org</p>
                        </div>
                        <div class="location">
                            <img src="img/location.png" />
                            <p>2250 Crystal Springs Ds Los Angeles, CA 90027</p>
                        </div>
                    </div>
                </div>

                <div class="copyright">
                    All rights reserved. &nbsp; <span>&copy</span> Ayesha Ashfaq.
                </div>
            </footer>
        </div>
    )
}

export default Footer