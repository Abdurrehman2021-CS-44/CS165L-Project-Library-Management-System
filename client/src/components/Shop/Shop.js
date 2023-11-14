import React from 'react'
import '../Shop/shop.css';


const Shop = () => {
    return (
        <div>

            <div id="filters">
                <nav id="menu-area">
                    <ul>
                        <li><Link to="/">Categories</Link>
                            <ul class="categories-submenu">
                                <li><Link to="/">Horror</Link></li>
                                <li><Link to="/">Comedy</Link></li>
                                <li><Link to="/">Romance</Link></li>
                                <li><Link to="/">Education</Link></li>
                                <li><Link to="/">Thrilling</Link></li>
                                <li><Link to="/">Comics</Link></li>
                            </ul>
                        </li>

                        <li><Link to="">Price</Link>
                            <ul class="price-submenu">
                                <li><Link to="/">$10000 - $15000</Link></li>
                                <li><Link to="/">$5000 - $10000</Link></li>
                                <li><Link to="/">$1000 - $5000</Link></li>
                                <li><Link to="/">$500 - $1000</Link></li>
                                <li><Link to="/">$100 - $500</Link></li>
                                <li><Link to="/">$50 - $100</Link></li>
                            </ul>
                        </li>

                        {/* <!-- <li><Link to="">Color</Link>
                    <ul class="color-submenu">
                        <li><span></span> <Link to="/">White</Link> </li>
                        <li><span></span> <Link to="/">Dark Salmon</Link> </li>
                        <li><span></span> <Link to="/">Light Blue</Link> </li>
                        <li><span></span> <Link to="/">Burlywood</Link> </li>
                        <li><span></span> <Link to="/">Black</Link> </li>
                        <li><span></span> <Link to="/">Light Brown</Link> </li>
                    </ul>
                </li> --> */}
                    </ul>
                </nav>
            </div>

            <div class="shop-products-grid">

                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" />
                    <div class="info">
                        <p class="name">The Tragedy Paper</p>
                        <p class="price">$1750</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" />
                    <div class="info">
                        <p class="name">Little Red Riding Head</p>
                        <p class="price">$555</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>

                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" />
                    <div class="info">
                        <p class="name">The Great Gatsby</p>
                        <p class="price">$300</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" />
                    <div class="info">
                        <p class="name">The PsychoPath Test</p>
                        <p class="price">$545</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" />
                    <div class="info">
                        <p class="name">End Accent Table</p>
                        <p class="price">$672</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" />
                    <div class="info">
                        <p class="name">Vintage End table</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>


                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" />
                    <div class="info">
                        <p class="name">Custom Set</p>
                        <p class="price">$715</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" />
                    <div class="info">
                        <p class="name">Side Cabinet</p>
                        <p class="price">$260</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>

                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" />
                    <div class="info">
                        <p class="name">Multi-cabinet Cupboard</p>
                        <p class="price">$688</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" />
                    <div class="info">
                        <p class="name">The PsychoPath Test</p>
                        <p class="price">$545</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" />
                    <div class="info">
                        <p class="name">End Accent Table</p>
                        <p class="price">$672</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" />
                    <div class="info">
                        <p class="name">Vintage End table</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>


                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" />
                    <div class="info">
                        <p class="name">Custom Set</p>
                        <p class="price">$715</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" />
                    <div class="info">
                        <p class="name">Side Cabinet</p>
                        <p class="price">$260</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>

                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" />
                    <div class="info">
                        <p class="name">Multi-cabinet Cupboard</p>
                        <p class="price">$688</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" />
                    <div class="info">
                        <p class="name">Custom Set</p>
                        <p class="price">$715</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" />
                    <div class="info">
                        <p class="name">Side Cabinet</p>
                        <p class="price">$260</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>

                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" />
                    <div class="info">
                        <p class="name">Multi-cabinet Cupboard</p>
                        <p class="price">$688</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" />
                    <div class="info">
                        <p class="name">Table Chair Set</p>
                        <p class="price">$897</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" />
                    <div class="info">
                        <p class="name">End Accent Cabinet</p>
                        <p class="price">$710</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img class="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" />
                    <div class="info">
                        <p class="name">Ancient Wood Frame</p>
                        <p class="price">$676</p>
                    </div>
                    <div class="toggle-info">
                        <p>Add to Cart</p>
                        <div class="img">
                            <img class="view" src="img/eye.png" />
                            <img class="wishlist" src="img/wishlist.png" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="pagination">
                <button class="button" id="startBtn" disabled>
                    <i class="fa-solid fa-angles-left"></i>
                </button>
                <button class="button prevNext" id="prev" disabled>
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <div class="links">
                    <Link to="/" class="link active">1</Link>
                    <Link to="/" class="link">2</Link>
                    <Link to="/" class="link">3</Link>
                    <Link to="/" class="link">4</Link>
                    <Link to="/" class="link">5</Link>
                </div>
                <button class="button prevNext" id="next">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="button" id="endBtn">
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>

            <div class="partners">
                <div class="text">
                    <h1><span>Our </span>Publishers</h1>
                </div>
                <div class="partners-grid">
                    <img class="img1" src="img/urduTimes-removebg.png" />
                    <img class="img1" src="img/jang-removebg.png" />
                    <img class="img1" src="img/caravan-removebg.png" />
                    <img class="img1" src="img/kawish.png" />
                </div>

            </div>

        </div>
    )
}

export default Shop