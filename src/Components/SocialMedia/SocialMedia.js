import React from 'react'

import './SocialMedia.css'

function SocialMedia() {
    return (
        <div className='socialmedia-maincontainer'>
            <ul className='socialmedia-groups'>
                <li className='socialmedia-component'><i class='bx bxl-instagram' style={{ color: '#737473' }}  ></i></li>
                <li className='socialmedia-component'><i class='bx bxl-linkedin' style={{ color: '#737473' }}  ></i></li>
                <li className='socialmedia-component'><i class='bx bxl-github' style={{ color: '#737473' }} ></i></li>
            </ul>
        </div>
    )
}

export default SocialMedia