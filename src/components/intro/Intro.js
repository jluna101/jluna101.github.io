import React from 'react';
import "./intro.css";

function Intro(props) {
    // Page title
    document.title = "Welcome to Jesse's Portfolio"
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Welcome to My Portfolio</h2>
                    <h1 className='i-name'> Jesse</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>UI/UX Designer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                    An adaptable individual with three years of experience in a fast-paced logistics supervisory role and before that worked for four years performing instructional design for professors at CSULB. 
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <div>
                <img src='https://user-images.githubusercontent.com/97872070/166394507-e35883ad-48aa-4dab-a7bf-eeaae95e1fcf.png' alt="Jesse Luna" className='i-img'/>
                </div>
            </div>
        </div>
    );
} 

export default Intro;