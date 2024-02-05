import React from 'react';
import "./Hero.css"
const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seemless and Visually Stunning Web Solutions
                </p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/react.png" alt="" />
                    </div>
                    <img src="./assets/images/hero.png" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/js.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/html-5.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/css-3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
