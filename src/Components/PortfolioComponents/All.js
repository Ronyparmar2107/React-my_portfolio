import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

import DIC from '../../Images/DIC.PNG'
import MagicalNotes from '../../Images/MAGICALNOTES.PNG'
import TextUtils from '../../Images/TEXTUTILS.PNG'
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


function All() {
    const Col1 = [
        {
            name: 'DIC-GTU-Clone-Website',
            img: DIC,
            link: 'https://dic-gtu-clone-ronyparmar.netlify.app/',
            tech: 'HTML,CSS'
        },


        {
            name: 'Auto',
            img: Autoricksaw,
            link: 'link',
            tech: ''
        },


        {
            name: 'Flower-In-Frame',
            img: FlowerInFrame,
            link: 'link',
            tech: ''
        },


        {
            name: 'Statue-Of-Unity',
            img: SOU,
            link: 'link',
            tech: ''
        },


        {
            name: 'Sunset-Vibes',
            img: SunsetVibes,
            link: 'link',
            tech: ''
        },


    ]
    const Col2 = [
        {
            name: 'Magical-Notes',
            img: MagicalNotes,
            link: 'https://rony-javascript-magicalnotes.netlify.app/',
            tech: 'Javascript'
        },
        {
            name: 'Chills',
            img: Chills,
            link: 'link',
            tech: ''
        },
        {
            name: 'Lake',
            img: Lake,
            link: 'link',
            tech: ''
        },
        {
            name: 'Street',
            img: Street,
            link: 'link',
            tech: ''
        },
        {
            name: 'Temple',
            img: Temple,
            link: 'link',
            tech: ''
        },
    ]
    const Col3 = [
        {
            name: 'Text-Utils',
            img: TextUtils,
            link: 'https://rony-react-textutils.netlify.app/',
            tech: 'ReactJs'
        },
        {
            name: 'Earphones',
            img: Earphones,
            link: 'link',
            tech: ''
        },
        {
            name: 'Night-Flower',
            img: NightFlower,
            link: 'link',
            tech: ''
        },
        {
            name: 'Sun-Face-Flower',
            img: Sunflower,
            link: 'link',
            tech: ''
        },
        {
            name: 'Dragonfly',
            img: Dragonfly,
            link: 'link',
            tech: ''
        },
    ]

    return (
        <div id='all' className='all-portfolio-items-maincontainer'>
            <div className='column'>{Col1.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h3>{element.name}</h3>
                        <p>{element.tech}</p>
                        <a href={element.link} target='_blank' rel='noreferrer' className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>
                )
            })}</div>
            <div className='column'>{Col2.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h3>{element.name}</h3>
                        <p>{element.tech}</p>
                        <a href={element.link} target='_blank' rel='noreferrer' className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>

                )
            })}</div>
            <div className='column'>{Col3.map((element) => {
                return (<div className='portfolio-item'>
                    <img src={element.img} alt={element.name}></img>
                    <div className='portfolio-backdrop'>
                        <h3>{element.name}</h3>
                        <p>{element.tech}</p>
                        <a href={element.link} target='_blank' rel='noreferrer' className='portfolio-link'><LinkIcon /></a>
                    </div>
                </div>
                )
            })}</div>
        </div>
    )
}

export default All