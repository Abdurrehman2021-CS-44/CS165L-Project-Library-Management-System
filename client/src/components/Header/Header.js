import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

// import { AyBooks_logo_removebg, AyBooks_name_removebg, cart, search } from 'assets';
import AyBooks_logo from '../../assets/AyBooks_logo.png';
import AyBooks_name from '../../assets/AyBooks_name.png';
import cart from '../../assets/cart.png';
import search from '../../assets/search.png';


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


const Header = () => {
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
                        <li className="nav-item"> <Link className="nav-link" to="/shop">Catalog</Link> </li>
                        {/* <li className="nav-item shop">Books <span>&rsaquo;</span> </Link> */}
                        {/* <!-- <ul className="shop-dropdown">
                            <li> <Link className="nav-link" to="shop.html">Products</Link> </li>
                            <li> <Link className="nav-link" to="cart.html">Cart</Link> </li>
                            <li> <Link className="nav-link" to="wishlist.html">Wishlist</Link> </li>
                            <li> <Link className="nav-link" to="checkout.html">Checkout</Link> </li>
                        </ul> --> */}

                        <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/signup">SignUp</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/faq">FAQ</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/contact">Privacy Policy</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/contact">Contact</Link> </li>
                    </ul>
                    <div className="logo">
                        <img src={AyBooks_name} alt="AyBooks" />
                    </div>
                    <div className="search header-right-icon">
                        <img src={search} alt="Search here" />
                    </div>
                    <div className="cart header-right-icon">
                        <img src={cart} alt="Add items to cart" />
                    </div>
                </nav>
            </header>
        </div >
    )
}


// =================================================== //

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navMenu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(element => {
//     element.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     })
// });

// =================================================== //


export default Header
