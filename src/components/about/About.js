import React from 'react';
import './about.css';

function About(props) {
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
                    Hi again, my name is Jesse Luna. When i'm not typing awaying behind a screen you'll find me indulging in some of my hobbies such as hiking, traveling, and playing with my two frenchies.
                </p>
                <p className='a-desc'>
                    I'm also very passionate about financial literacy and teaching others. If you ever want to discuss any topics from the latest cryptocurrency developments or real estate investing, lets connect!
                </p>
                {/* <div className='a-award'>
                    <img  src='https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg' alt="" className='a-award-img' />
                    <div className="a-award-texts">
                        <h4 href="" className="a-award-title"> Internation Award</h4>
                        <div className='a-award-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias nemo, quod.</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default About;