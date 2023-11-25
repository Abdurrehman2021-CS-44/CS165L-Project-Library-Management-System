import React from 'react'
import { Link } from 'react-router-dom';
import '../Shop/shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

// ================  IMPORT  IMAGES  ================= //

import eye from '../../assets/eye.png';
import wishlist from '../../assets/wishlist.png';
import urduTimes from '../../assets/urduTimes.png';
import jang from '../../assets/jang.png';
import caravan from '../../assets/caravan.png';
import kawish from '../../assets/kawish.png';

// =================================================== //

const Shop = () => {
    return (
        <div>

            <div className="shop-bg">
                <p>Shop Books</p>
            </div>

            <div id="filters">
                <nav id="menu-area">
                    <ul>
                        <li><Link to="/">Categories</Link>
                            <ul className="categories-submenu">
                                <li><Link to="/">Horror</Link></li>
                                <li><Link to="/">Comedy</Link></li>
                                <li><Link to="/">Romance</Link></li>
                                <li><Link to="/">Education</Link></li>
                                <li><Link to="/">Thrilling</Link></li>
                                <li><Link to="/">Comics</Link></li>
                            </ul>
                        </li>

                        <li><Link to="">Price</Link>
                            <ul className="price-submenu">
                                <li><Link to="/">$10000 - $15000</Link></li>
                                <li><Link to="/">$5000 - $10000</Link></li>
                                <li><Link to="/">$1000 - $5000</Link></li>
                                <li><Link to="/">$500 - $1000</Link></li>
                                <li><Link to="/">$100 - $500</Link></li>
                                <li><Link to="/">$50 - $100</Link></li>
                            </ul>
                        </li>

                        {/* <!-- <li><Link to="">Color</Link>
                    <ul className="color-submenu">
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

            <div className="shop-products-grid">

                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" />
                    <div className="info">
                        <p className="name">The Tragedy Paper</p>
                        <p className="price">$1750</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" />
                    <div className="info">
                        <p className="name">Little Red Riding Head</p>
                        <p className="price">$555</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>

                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" />
                    <div className="info">
                        <p className="name">The Great Gatsby</p>
                        <p className="price">$300</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" />
                    <div className="info">
                        <p className="name">The PsychoPath Test</p>
                        <p className="price">$545</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" />
                    <div className="info">
                        <p className="name">End Accent Table</p>
                        <p className="price">$672</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" />
                    <div className="info">
                        <p className="name">Vintage End table</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>


                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" />
                    <div className="info">
                        <p className="name">Custom Set</p>
                        <p className="price">$715</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" />
                    <div className="info">
                        <p className="name">Side Cabinet</p>
                        <p className="price">$260</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>

                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" />
                    <div className="info">
                        <p className="name">Multi-cabinet Cupboard</p>
                        <p className="price">$688</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" />
                    <div className="info">
                        <p className="name">The PsychoPath Test</p>
                        <p className="price">$545</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" />
                    <div className="info">
                        <p className="name">End Accent Table</p>
                        <p className="price">$672</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" />
                    <div className="info">
                        <p className="name">Vintage End table</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>


                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" />
                    <div className="info">
                        <p className="name">Custom Set</p>
                        <p className="price">$715</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" />
                    <div className="info">
                        <p className="name">Side Cabinet</p>
                        <p className="price">$260</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>

                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" />
                    <div className="info">
                        <p className="name">Multi-cabinet Cupboard</p>
                        <p className="price">$688</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" />
                    <div className="info">
                        <p className="name">Custom Set</p>
                        <p className="price">$715</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" />
                    <div className="info">
                        <p className="name">Side Cabinet</p>
                        <p className="price">$260</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>

                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" />
                    <div className="info">
                        <p className="name">Multi-cabinet Cupboard</p>
                        <p className="price">$688</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" />
                    <div className="info">
                        <p className="name">Table Chair Set</p>
                        <p className="price">$897</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" />
                    <div className="info">
                        <p className="name">End Accent Cabinet</p>
                        <p className="price">$710</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img className="img1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" />
                    <div className="info">
                        <p className="name">Ancient Wood Frame</p>
                        <p className="price">$676</p>
                    </div>
                    <div className="toggle-info">
                        <p>Add to Cart</p>
                        <div className="img">
                            <img className="view" src={eye} />
                            <img className="wishlist" src={wishlist} />
                        </div>
                    </div>
                </div>

            </div>

            <div classNameName="pagination">
                <button classNameName="button" id="startBtn" disabled>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button classNameName="button prevNext" id="prev" disabled>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div classNameName="links">
                    <Link to="/" classNameName="link active">1</Link>
                    <Link to="/" classNameName="link">2</Link>
                    <Link to="/" classNameName="link">3</Link>
                    <Link to="/" classNameName="link">4</Link>
                    <Link to="/" classNameName="link">5</Link>
                </div>
                <button classNameName="button prevNext" id="next">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button classNameName="button" id="endBtn">
                    <FontAwesomeIcon icon={faAnglesRight} />
                </button>
            </div>

            <div className="partners">
                <div className="text">
                    <h1><span>Our </span>Publishers</h1>
                </div>
                <div className="partners-grid">
                    <img src={urduTimes} />
                    <img src={jang} />
                    <img src={caravan} />
                    <img src={kawish} />
                </div>

            </div>

        </div>
    )
}

export default Shop