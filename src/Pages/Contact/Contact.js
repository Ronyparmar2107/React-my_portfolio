import React from 'react'

import './Contact.css'
function Contact() {
    return (
        <div id='Contact' className='Page'>
            <div className='titlecontainer'>
                <h2>Contact</h2>
            </div>
            <div className='contact-section'>
                <div className='contact-locations'>
                    <div className='location contact-items'>
                        <div className='contact-icon'><i class='bx bx-pin'></i></div>
                        <div className='contact-details'> Anand , Gujarat, India</div>
                    </div>
                    <div className='email contact-items'>
                        <div className='contact-icon'><i class='bx bx-envelope' ></i></div>
                        <div className='contact-details'>ronyparmar2107@gmail.com</div>
                    </div>
                    <div className='call contact-items'>
                        <div className='contact-icon'><i class='bx bx-phone-call' ></i></div>
                        <div className='contact-details'>+91 8488805119</div>
                    </div>
                </div>
                <div className='contact-form'>
                    <div className='Name-email'>
                        <input className='name-input input' type='text' placeholder='Name'></input>
                        <input className='email-input input' type='email' placeholder='Email'></input>
                    </div>
                    <div className='Subject'>
                        <input className='input' type='text' placeholder='Subject'></input>
                    </div>
                    <div className='Message'>
                        <textarea type='textbox' className='input' placeholder='Message' style={{ height: '30vh' }}></textarea>
                    </div>
                    <div className='Form-Submit'>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact