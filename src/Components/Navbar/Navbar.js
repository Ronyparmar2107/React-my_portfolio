import React, { useState, useEffect } from 'react'

import { Link } from 'react-scroll';


import './Navbar.css'

function Navbar() {
    const [ShowNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 1025)
            setShowNavbar(false)
        else {
            setShowNavbar(true)
        }
    }, [])


    const ShowHandler = () => {
        if (window.innerWidth < 1025) {
            if (ShowNavbar) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
        }
    }

    return (
        <div className='navbar-maincontainer'>
            {ShowNavbar === false && <div className='hamburger-container'>
                <i className='bx bx-menu' onClick={ShowHandler}></i>
            </div>}
            {ShowNavbar === true &&
                <ul className='navbar'>
                    <li className='closebutton' ><i className='bx bx-x closebutton' onClick={ShowHandler}></i></li>
                    <li >
                        <Link
                            className='navbar-component '
                            activeClass={'active'}
                            to='Home'
                            spy={true}
                            smooth={true}
                            isDynamic={true}
                            duration={500}
                            onClick={ShowHandler}
                        >
                            <i className='bx bx-home icon' style={{ color: '#737473' }}></i>
                            <span className='NavNames'>Home</span>
                        </Link>
                    </li>
                    <li >
                        <Link
                            className='navbar-component'
                            to="About"
                            activeClass={'active'}
                            spy={true}
                            smooth={true}
                            isDynamic={true}
                            duration={500}
                            onClick={ShowHandler}

                        >
                            <i className='bx bx-user icon' style={{ color: '#737473' }}></i>
                            <span className='NavNames'>About</span>
                        </Link>
                    </li>
                    <li >
                        <Link
                            className='navbar-component'
                            to="Resume"
                            activeClass={'active'}
                            spy={true}
                            smooth={true}
                            isDynamic={true}
                            duration={700}
                            onClick={ShowHandler}
                        >
                            <i className='bx bx-file-blank icon' style={{ color: '#737473' }}></i>
                            <span className='NavNames'>Resume</span>
                        </Link>
                    </li>
                    <li >
                        <Link
                            className='navbar-component'
                            activeClass={'active'}
                            to="Portfolio"
                            spy={true}
                            smooth={true}
                            isDynamic={true}
                            duration={500}
                            onClick={ShowHandler}
                        >
                            <i className='bx bx-book-content icon' style={{ color: '#737473' }}></i>
                            <span className='NavNames'>Portfolio</span>
                        </Link>
                    </li>
                    <li >
                        <Link
                            className='navbar-component'
                            activeClass={'active'}
                            to="Contact"
                            spy={true}
                            smooth={true}
                            isDynamic={true}
                            duration={500}
                            onClick={ShowHandler}
                        >
                            <i className='bx bx-envelope icon' style={{ color: '#737473' }}></i>
                            <span className='NavNames'>Contact</span>
                        </Link>
                    </li>
                </ul>}
        </div>
    )
}

export default Navbar