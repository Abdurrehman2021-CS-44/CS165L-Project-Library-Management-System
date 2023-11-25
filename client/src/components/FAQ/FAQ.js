import React, { useEffect } from 'react'
import '../FAQ/faq.css';

const FAQ = () => {

    useEffect(() => {
        const handleAccordionClick = (event) => {
            const { target } = event;
            target.classNameList.toggle('active');
            const panel = target.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        };

        const accElements = document.getElementsByClassNameclassNameName('accordion');

        Array.from(accElements).forEach((element) => {
            element.addEventListener('click', handleAccordionClick);
        });

        return () => {
            Array.from(accElements).forEach((element) => {
                element.removeEventListener('click', handleAccordionClick);
            });
        };
    });

    return (

        <div>
            <div className="shop-bg">
                <p>Frequently Asked Questions</p>
            </div>
            <div className="faq-section">
                <div className="topics">
                    <p>Payment</p>
                    <p>Delivery</p>
                    <p>Discount</p>
                    <p>Orders</p>
                    <p>Refunds</p>
                    <p>Books</p>
                    <p>Account</p>
                </div>
                <div className="questions">
                    <button className="accordion">What payment methods do you accept?</button>
                    <div className="panel">
                        <p>We accept credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.</p>
                    </div>

                    <button className="accordion">What is your return policy?</button>
                    <div className="panel">
                        <p>Our return policy allows you to return items within 30 days of purchase for a full refund or exchange. Please refer to our Return Policy page for more details.</p>
                    </div>

                    <button className="accordion">How do I track my order?</button>
                    <div className="panel">
                        <p>You can easily track your order by visiting the "Order Tracking" page on our website. Enter your order number and email address to get real-time updates on your shipment.</p>
                    </div>

                    <button className="accordion">What are your shipping options and delivery times?</button>
                    <div className="panel">
                        <p>We offer standard shipping (3-5 business days) and expedited shipping (1-2 business days) options. Shipping times may vary depending on your location.</p>
                    </div>

                    <button className="accordion">Do you offer international shipping?</button>
                    <div className="panel">
                        <p>Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on your location.</p>
                    </div>

                    <button className="accordion">Are my payment details and personal information secure?</button>
                    <div className="panel">
                        <p>Yes, we prioritize the security of your information. We use SSL encryption to protect your payment details, and we do not store your credit card information on our servers.</p>
                    </div>

                    <button className="accordion">Can I change or cancel my order after it's been placed?</button>
                    <div className="panel">
                        <p>You may be able to change or cancel your order within a certain time frame. Please contact our customer support as soon as possible for assistance.</p>
                    </div>

                    <button className="accordion">What is your privacy policy?</button>
                    <div className="panel">
                        <p>Our privacy policy outlines how we collect, use, and protect your personal information. You can find the full policy on our Privacy Policy page.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ======================================== //

// if (document.getElementsByClassNameclassNameName("accordion")) {

//     var acc = document.getElementsByClassNameclassNameName("accordion");
//     var i;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             this.classNameList.toggle("active");
//             var panel = this.nextElementSibling;
//             if (panel.style.display === "block") {
//                 panel.style.display = "none";
//             } else {
//                 panel.style.display = "block";
//             }
//         });
//     }
// }

// ======================================== //

export default FAQ