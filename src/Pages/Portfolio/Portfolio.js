import React, { useState } from 'react'
import Data from './Dataset'


import './Portfolio.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

function Portfolio() {

    const [NavbarState, setNavbarState] = useState('All')

    return (
        <div id='Portfolio' className='Page'>

            <div className='titlecontainer'>
                <h2>Portfolio</h2>
            </div>
            <div className='portfolio-description'>
                <p>Since last December, I've been learning web development, and these are a couple of my projects. I've also started pursuing photography as a side hobby since 2019.</p>
            </div>
            <div className='portfolio-items-container'>
                <div className='portfolio-navbar'>
                    <button className={NavbarState === 'All' && 'activeNav'} onClick={() => { setNavbarState('All') }}>All</button>
                    <button className={NavbarState === 'Websites' && 'activeNav'} onClick={() => { setNavbarState('Websites') }}>Websites</button>
                    <button className={NavbarState === 'apps' && 'activeNav'} onClick={() => { setNavbarState('apps') }}>Mobile App</button>
                    <button className={NavbarState === 'pics' && 'activeNav'} onClick={() => { setNavbarState('pics') }}>Clicks</button>
                </div>
                <div >
                    {NavbarState === 'All' ?
                        Data.map((element) => {
                            return (
                                <div className='portfolio-items'>
                                    {element.websites.map((data) => {
                                        return (
                                            <div className='portfolio-item' onClick={() => { window.open(data.link, '_blank') }}>
                                                <ProjectCard Image={data.img} Link={data.link} Name={data.name} Tech={data.tech} />
                                            </div>
                                        )
                                    })}
                                    {element.apps.map((data) => {
                                        return (
                                            <div className='portfolio-item'>
                                                <ProjectCard Image={data.img} Name={data.name} Tech={data.tech} />
                                            </div>
                                        )
                                    })}
                                    {element.pics.map((data) => {
                                        return (
                                            <div className='portfolio-item' onClick={() => { window.open('https://www.instagram.com/pictures_que2107/', '_blank') }}>
                                                <ProjectCard Image={data.img} Name={data.name} Tech={['This is one of my many clicks']} />
                                            </div>
                                        )
                                    })}
                                </div>

                            )
                        }) : NavbarState === 'Websites' ?
                            Data.map((element) => {
                                return (
                                    <div className='portfolio-items'>
                                        {element.websites.map((data) => {
                                            return (
                                                <div className='portfolio-item' onClick={() => { window.open(data.link, '_blank') }}>
                                                    <ProjectCard Image={data.img} Link={data.link} Name={data.name} Tech={data.tech} />
                                                </div>
                                            )
                                        })}
                                    </div>

                                )
                            }) : NavbarState === 'apps' ?
                                Data.map((element) => {
                                    return (
                                        <div className='portfolio-items'>
                                            {element.apps.map((data) => {
                                                return (
                                                    <div className='portfolio-item'>
                                                        <ProjectCard Image={data.img} Name={data.name} Tech={data.tech} />
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    )
                                }) : Data.map((element) => {
                                    return (
                                        <div className='portfolio-items'>
                                            {element.pics.map((data) => {
                                                return (
                                                    <div className='portfolio-item' onClick={() => { window.open('https://www.instagram.com/pictures_que2107/', '_blank') }}>
                                                        <ProjectCard Image={data.img} Name={data.name} Tech={['This is one of my many clicks']} />
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    )
                                })}
                </div>
            </div >
        </div >
    )
}

export default Portfolio