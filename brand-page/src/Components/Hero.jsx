import './Hero.css';
import '../App.css';

function HeroSection() {
    return (
        <main className="hero container">
            
            <div className='hero-content'>
                <h1>YOUR FEET 
                    DESERVE 
                    THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='hero-btn'>
                    <button className='shop-now-btn'>Shop Now</button>
                    <button className='category-btn'>Category</button>
                </div>

                <div className='shopping'>
                    <span>Also available on</span>
                </div>
                <div className="brand-icon">
                <img src = "/images/flipkart.png"/>
                <img src = "/images/amazon.png"/>
                </div>
            </div>

            <div className="hero-image" >
                <img src = "/images/shoe_image.png" />
            </div>
        </main>
    )
}

export default HeroSection;