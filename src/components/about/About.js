import React from 'react';
import './about.css';

function About(props) {
    // Page title
    document.title = "Portfolio | About"
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src="https://user-images.githubusercontent.com/97872070/166082954-191003e3-934f-42a3-8713-b0f10db6bc92.jpeg" alt="Photo of Jesse" className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>
                Little bit about me..
                </h1>
                <p className='a-sub'>
                    Hi again, my name is Jesse Luna. When i'm not typing awaying behind a screen you'll find me hiking, traveling, or playing with my two frenchies.
                </p>
                <p className='a-desc'>
                    I'm also passionate about financial literacy & teaching others. If you ever want to discuss/learn any topics from the latest cryptocurrency developments or real estate investing, reach out!
                </p>
            </div>
        </div>
    );
}

export default About;