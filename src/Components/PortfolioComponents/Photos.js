import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

import Autoricksaw from '../../Images/Autoricksaw.jpeg'
import Chills from '../../Images/Chills.jpeg'
import Earphones from '../../Images/Earphones.jpeg'
import FlowerInFrame from '../../Images/FlowerInFrame.jpeg'
import Lake from '../../Images/Lake.jpeg'
import NightFlower from '../../Images/NightFlower.jpeg'
import SOU from '../../Images/SOU.jpeg'
import Street from '../../Images/Street.jpeg'
import Sunflower from '../../Images/Sunflower.jpeg'
import SunsetVibes from '../../Images/SunsetVibes.jpeg'
import Temple from '../../Images/Temple.jpeg'
import Dragonfly from '../../Images/Dragonfly.jpeg'
function Photos() {
    const Col1 = [


        {
            name: 'Auto',
            img: Autoricksaw,
            link: 'link'
        },


        {
            name: 'Flower-In-Frame',
            img: FlowerInFrame,
            link: 'link'
        },


        {
            name: 'Statue-Of-Unity',
            img: SOU,
            link: 'link'
        },


        {
            name: 'Sunset-Vibes',
            img: SunsetVibes,
            link: 'link'
        },


    ]
    const Col2 = [
        {
            name: 'Chills',
            img: Chills,
            link: 'link'
        },
        {
            name: 'Lake',
            img: Lake,
            link: 'link'
        },
        {
            name: 'Street',
            img: Street,
            link: 'link'
        },
        {
            name: 'Temple',
            img: Temple,
            link: 'link'
        },
    ]
    const Col3 = [
        {
            name: 'Earphones',
            img: Earphones,
            link: 'link'
        },
        {
            name: 'Night-Flower',
            img: NightFlower,
            link: 'link'
        },
        {
            name: 'Sun-Face-Flower',
            img: Sunflower,
            link: 'link'
        },
        {
            name: 'Dragonfly',
            img: Dragonfly,
            link: 'link'
        },
    ]
    return (
        <div id='photos' className='all-portfolio-items-maincontainer'>
            <div className='column'>{Col1.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h5>{element.name}</h5>
                        <p>{element.tech}</p>
                        <a href={element.link} className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>
                )
            })}</div>
            <div className='column'>{Col2.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h5>{element.name}</h5>
                        <p>{element.tech}</p>
                        <a href={element.link} className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>

                )
            })}</div>
            <div className='column'>{Col3.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h5>{element.name}</h5>
                        <p>{element.tech}</p>
                        <a href={element.link} className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>
                )
            })}</div>
        </div>
    )
}

export default Photos