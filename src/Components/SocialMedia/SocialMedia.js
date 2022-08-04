import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './SocialMedia.css'

function SocialMedia() {
    return (
        <div className='socialmedia-maincontainer'>
            <ul className='socialmedia-groups'>
                <li className='socialmedia-component'>
                    {/* <i className='bx bxl-instagram' style={{ color: '#737473' }}  ></i> */}
                    <InstagramIcon className='bx' style={{ color: '#737473' }} onClick={() => { window.open('https://www.instagram.com/pictures_que2107/', '_blank') }} />
                </li>
                <li className='socialmedia-component'>
                    {/* <i className='bx bxl-linkedin' style={{ color: '#737473' }}  ></i> */}
                    <LinkedInIcon className='bx' style={{ color: '#737473' }} onClick={() => { window.open('https://www.linkedin.com/in/rony-parmar-73219b1b4/', '_blank') }} />
                </li>
                <li className='socialmedia-component'>
                    {/* <i className='bx bxl-github' style={{ color: '#737473' }} ></i> */}
                    <GitHubIcon className='bx' style={{ color: '#737473' }} onClick={() => { window.open('https://github.com/Ronyparmar2107', '_blank') }} />
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia