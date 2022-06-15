import React from 'react'

import './Skills.css'

function Skills() {
    const skills = [
        {
            Name: '<HTML>'
        },
        {
            Name: '{CSS}'
        },
        {
            Name: '{Bootstrap}'
        },
        {
            Name: 'Java<Script/>'
        },
        {
            Name: '<ReactJs />'
        },
        {
            Name: 'Adobe Lightroom'
        },
    ]

    return (
        <div className='skills-maincontainer'>
            <div className='skills-titlecontainer'>
                <h2>Skills</h2>
            </div>
            <p className='skills-info'>

            </p>
            <div className='skills-set'>

                {skills.map((Skill) => {
                    return (
                        <div className='skillbar'>
                            <p className='skill-name'>{Skill.Name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills