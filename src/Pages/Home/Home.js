import React from 'react'
import Typewriter from 'typewriter-effect';

import wave from '../../Images/wave.svg'
import myPic from '../../Images/Main.png'
import './Home.css'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
function Home() {
    return (
        <div id='Home' className='Page'>
            <div className='backdrop'></div>
            <img src={wave} alt='' className='wave'></img>
            <img src={myPic} alt='' className='my-pic'></img>
            <div className='my-name-title'>
                <h1 className='my-name'>Rony Parmar</h1>
                <h2 className='my-title'>
                    <div>I'm</div>
                    <div className='Typewriter'>
                        <Typewriter
                            options={{
                                strings: [' Web Developer', 'Front End Developer', ' Photographer'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                </h2>
                <SocialMedia />
            </div>

        </div>
    )
}

export default Home