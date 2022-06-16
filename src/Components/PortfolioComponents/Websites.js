import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

import DIC from '../../Images/DIC.PNG'
import MagicalNotes from '../../Images/MAGICALNOTES.PNG'
import TextUtils from '../../Images/TEXTUTILS.PNG'
function Websites() {
    const items = [
        {
            name: 'DIC-GTU-Clone-Website',
            img: DIC,
            link: 'link'
        },
        {
            name: 'Magical-Notes',
            img: MagicalNotes,
            link: 'link'
        },
        {
            name: 'Text-Utils',
            img: TextUtils,
            link: 'link'
        },
    ]

    return (
        <div>
            <div id='websites' className='all-portfolio-items-maincontainer'>
                {items.map((element) => {
                    return (<div className='portfolio-item websites'>
                        <img src={element.img} alt={element.name}></img>
                        <div className='portfolio-backdrop'>
                            <h5>{element.name}</h5>
                            <p>{element.tech}</p>
                            <a href={element.link} className='portfolio-link'><LinkIcon /></a>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Websites