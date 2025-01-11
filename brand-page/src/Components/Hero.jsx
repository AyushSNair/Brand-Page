import './Hero.css';
import '../App.css';

function HeroSection() {
    return (
        <main className="hero-class">
            
            <div className='hero-content'>
                <h1>YOUR FEET 
                    DESERVE 
                    THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div>
                    <span>Also available on</span>
                </div>
                <div>
                <img src = "/images/flipkart.png"/>
                <img src = "/images/amazon.png"/>
                </div>
            </div>

            <div>
                <img src = "/images/shoe_image.png" />
            </div>
        </main>
    )
}

export default HeroSection;