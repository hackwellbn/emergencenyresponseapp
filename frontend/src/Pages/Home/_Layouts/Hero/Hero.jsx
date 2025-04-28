import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom'


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1>Emergency Response App</h1>
                <p>Get help in an emergency with just one click.</p>
                <button className="hero__button">Get Help</button>
            </div>
        </div>
    );
}
export default Hero;
