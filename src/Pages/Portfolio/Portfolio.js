import React, { useState } from 'react'
import All from '../../Components/PortfolioComponents/All'
import Photos from '../../Components/PortfolioComponents/Photos'
import Websites from '../../Components/PortfolioComponents/Websites'


import './Portfolio.css'

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
                    <button className={NavbarState === 'Photos' && 'activeNav'} onClick={() => { setNavbarState('Photos') }}>Photography</button>
                </div>
                <div className='portfolio-items'>
                    {NavbarState === 'All' ? <All /> : NavbarState === 'Websites' ? <Websites /> : <Photos />}
                </div>
            </div>
        </div>
    )
}

export default Portfolio