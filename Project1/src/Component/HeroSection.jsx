import React from 'react'
import amazon from '../Assets/amazon.png'    
import hero from '../Assets/shoe.png'
import flip from '../Assets/flipkart.png'

const HeroSection = () => {
    return (
        <main className='hero'>

            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>
                <div className="shopoing">
                    <p>Aslo Available On</p>
                    <div className="brand-icons">
                        <img src={amazon} alt="amazonlogo" />
                        <img src={flip} alt="flipkasrtlogo" />
                       
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src={hero} alt="mainshoe" />
            </div>
        </main>
    )
}

export default HeroSection