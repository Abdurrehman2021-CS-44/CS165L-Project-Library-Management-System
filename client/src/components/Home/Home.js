import React from 'react'
import '../Home/home.css';


const Home = () => {
    return (
        <div>

            <div class="img-slider">
                <div class="slider-one">
                    <div class="slider-one-image">
                        <div class="slider-text">
                            <h1>NOTHING IS PLEASANTER THAN EXPLORING A LIBRARY</h1>
                            <p>Walter Savage Landor (American fantasy Author and Poet)</p>
                        </div>
                    </div>
                </div>

                <div class="slider-two">
                    <div class="slider-two-image">
                        <div class="slider-text">
                            <h1>WHEN IN DOUBT GO TO LIBRARY</h1>
                            <p>J.K. Rowling (British novelist, screenwriter, and producer, best known for writing the Harry
                                Potter fantasy series)</p>
                        </div>
                    </div>
                </div>

                <div class="slider-three">
                    <div class="slider-three-image">
                        <div class="slider-text">
                            <h1>LIBRARIES STORE THE ENERGY THAT FUELS THE IMAGINATION</h1>
                            <p>Sidney Sheldon (American writer and producer)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-intro">
                <div class="text">
                    <span>Upcoming</span>
                    <p class="intro-heading">The Vein Of Gold: A Journey To Your Creative Heart</p>
                    <p class="ad-book-author">Author: Dr. Ayesha Ashfaq</p>
                    <p>Embark on a transformative odyssey into the depths of your creativity with "The Vein of Gold: A Journey
                        to Your Creative Heart," the eagerly anticipated upcoming book by our distinguished university
                        professor.She has masterfully crafted a guide that promises to ignite the spark of creativity within
                        every reader. This compelling literary journey invites you to explore the uncharted territories unearth
                        the treasures hidden within your creative heart.</p>
                </div>
                <div class="intro-img">
                    <img class="img1" src="img/book-ad.jpg" />
                </div>
            </div>

            <div class="book-shelf">
                <ul>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>                
                </ul>
            </div>

            <div class="parallax">
                <div class="festival-ad">
                    <p>Shop wide range of collections</p>
                    <p class="heading">Book Festival</p>
                    <p class="off">ALL BOOKS ARE FLAT <span>15% OFF</span></p>
                    <p class="duration">18 September till 25 October</p>
                    <button class="btn"><a href="shop.html">Shop Now</a></button>
                </div>
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

export default Home