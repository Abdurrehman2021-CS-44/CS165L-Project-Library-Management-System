import React from 'react'
import '../Header/header.css';

// import { logo, menu, close } from "../assets";


// ================  IMPORT  IMAGES  ================= //

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

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
                        {/* <li className="library-logo"><img src="img/AyBook's-logo-removebg.png" alt="" /></li> */}
                        <li className="library-logo"><img src={images['AyBooks-logo-removebg.png']} alt="logo" /></li>
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
                        {/* <img src="img/AyBook's-name-removebg.png" alt="AyBook's Logo" /> */}
                        <img src={images['AyBooks-name-removebg.png']} alt="AyBooks" />
                    </div>
                    <div className="search header-right-icon">
                        {/* <img src="img/search.png" alt="Search here" /> */}
                        <img src={images['search.png']} alt="Search here" />
                    </div>
                    <div className="cart header-right-icon">
                        {/* <img src="img/cart.png" alt="Add items to cart" /> */}
                        <img src={images['cart.png']} alt="Add items to cart" />
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Header
