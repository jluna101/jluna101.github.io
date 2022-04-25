import React from 'react';
import './about.css';

function About(props) {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Photo of" className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>
                    This is a title
                </h1>
                <p className='a-sub'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <p className='a-desc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia suscipit tempora eum esse repellat distinctio ipsum ab provident, doloremque hic nulla at magnam atque aspernatur.
                </p>
                <div className='a-award'>
                    <img  src='https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg' alt="" className='a-award-img' />
                    <div className="a-award-texts">
                        <h4 href="" className="a-award-title"> Internation Award</h4>
                        <div className='a-award-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias nemo, quod.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;