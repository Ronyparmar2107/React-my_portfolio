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
            Name: '<React Native/>'
        },
    ]

    return (
        <div className='skills-maincontainer'>
            <div className='titlecontainer'>
                <h2>Skills</h2>
            </div>
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