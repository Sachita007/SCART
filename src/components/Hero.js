import React from 'react'
import couch from "./../assets/images/couch.png"
import "./Hero.css"

function Hero() {
    return (
        <div className='heroSec'>
            <div className='heroContent'>
                <div className='heroText'>
                    <div className='heroTitle'>Modern Interior Design Studio</div>
                    <div className='heroDescription'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</div>
                    <div className='heroButtons'>
                        <button>Shop Now</button>
                        <button className='ex'>Explore</button>
                    </div>
                </div>
                <div>
                    <img src={couch} className='heroImg' alt="couch" />
                </div>
            </div>
        </div>
    )
}

export default Hero