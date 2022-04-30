import React from 'react';
import "./intro.css";

function Intro(props) {
    document.title = "Portfolio | Homepage"
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Welcome! My name is</h2>
                    <h1 className='i-name'> Jesse</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>UI/UX Designer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                    An adaptable indivisual with three years of experience in a fast-paced logistics supervisory role and before that worked for four years performing instructional design for professors at CSULB. 
                    </p>
                </div>
            </div>

            <div className='i-right'>
                <div className="i-bg"></div>
                <div>
                <img src='https://user-images.githubusercontent.com/97872070/165859266-da22866e-3c32-4933-a178-bbfee82f14c0.png' alt="Jesse Luna" className='i-img'/>
                </div>
            </div>
        </div>
    );
}

export default Intro;