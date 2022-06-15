import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import './Resume.css'



function Resume() {
    return (
        <div id='Resume' >
            <div className='resume-titlecontainer'>
                <h2>Resume</h2>
            </div>
            <div className='resume-description'>
                <p> I'm Rony Parmar,a front-end Web developer on his way to becoming a MERN Stack Developer. In my spare time, I like photography. I am an IT Engineering student at Guajart Technical University. I am a self-taught web developer. In December 2021, I began studying web development.
                </p>
            </div>
            <div className='education-experirence'>
                <div className='education timeline-container'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            icon={<WorkIcon />}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#ffb400", color: "#fff" }}
                        >
                            <div className="education-experirence-element">
                                <span className='Dates'>06/2022 - PRESENT</span>
                                <h5>CHAIRPERSON <span> - ISTE MBIT SC</span></h5>
                                <ul>
                                    <li>I am the current chairperson of the ISTE MBIT SC!</li>
                                    <li>I am the core team leader for the ISTE MBIT SC!</li>
                                    <li>I Working as a team member rather than an ordering leader!</li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            icon={<WorkIcon />}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#ffb400", color: "#fff" }}
                        >
                            <div className="education-experirence-element">
                                <span className='Dates'>03/2022 - PRESENT</span>
                                <h5>FRONTEND DEVELOPER <span> - MBIT</span></h5>
                                <ul>
                                    <li>I'm one of the developer in the team of three for developing
                                        our college new website!</li>
                                    <li>Developed responsive web pages of official site of our
                                        college new website!</li>
                                    <li>Solved the issues arrised during the development of the
                                        website!</li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            icon={<WorkIcon />}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#ffb400", color: "#fff" }}
                        >
                            <div className="education-experirence-element">
                                <span className='Dates'>06/2021- 06/2022</span>
                                <h5>SECRATARY <span> - ISTE MBIT SC</span></h5>
                                <ul>
                                    <li>I was the secratary for ISTE MBIT SC!</li>
                                    <li>Managed the teams and resources for the many official ISTE MBIT events!</li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            icon={<SchoolIcon />}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#ffb400", color: "#fff" }}
                        >
                            <div className="education-experirence-element">
                                <span className='Dates'>03/2022 - PRESENT</span>
                                <h5>BACHELOR DEGREE<span> - MBIT</span></h5>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Resume