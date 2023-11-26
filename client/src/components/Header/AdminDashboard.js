import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../Home/Home'

// import { AyBooks_logo_removebg, AyBooks_name_removebg, cart, search } from 'assets';
import AyBooks_logo from '../../assets/AyBooks_logo.png';
import AyBooks_name from '../../assets/AyBooks_name.png';
import cart from '../../assets/cart.png';
import search from '../../assets/search.png';
import Home from '../Home/Home';


// ================  IMPORT  IMAGES  ================= //

// function importAll(r) {
//     return r.keys().map(r);
// }
// const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
// const a = require.context('../../assets/', false);
// const b = a.keys().map(image => a(image));
// console.log(imageList[0]);

// let images = [];

// b.forEach(e => {
//     let img = e.split("/");
//     images.push(img[img.length - 1]);
// });

// console.log(imgList[0]);
// const myArray = imageList.split("/");

// =================================================== //


const AdminDashboard = () => {

    useEffect(() => {
        const handleHamburgerClick = () => {
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".navMenu");

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        };

        const handleNavLinkClick = () => {
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".navMenu");

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        };

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");

        if (hamburger && navMenu) {
            hamburger.addEventListener("click", handleHamburgerClick);

            document.querySelectorAll(".nav-link").forEach(element => {
                element.addEventListener("click", handleNavLinkClick);
            });

            return () => {
                hamburger.removeEventListener("click", handleHamburgerClick);
                document.querySelectorAll(".nav-link").forEach(element => {
                    element.removeEventListener("click", handleNavLinkClick);
                });
            };
        }
    });

    return (
        <div>
            <header>
                <nav>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className="navMenu">
                        <li className="library-logo"><img src={AyBooks_logo} alt="logo" /></li>
                        <li className="nav-item"> <Link className="nav-link" to="/">Home</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/book">Books</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/customer">Customers</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/category">Category</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/order">Orders</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/reviews">Reviews</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/feedback">Feedback</Link> </li>
                    </ul>

                    <div className="logo">
                        <img src={AyBooks_name} alt="AyBooks" />
                    </div>
                </nav>
            </header>

            {/* <Home/> */}

        </div >

    )
}


export default AdminDashboard
