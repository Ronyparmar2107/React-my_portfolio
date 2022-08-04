import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Contact.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Contact() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')
    const [isNameValid, setIsNameValid] = useState('#b5c00c')
    const [isEmailValid, setIsEmailValid] = useState('#b5c00c')
    const [openInvalid, setOpenInvalid] = React.useState(false);
    const [openValid, setOpenValid] = React.useState(false);

    const handleOpenInvalid = () => setOpenInvalid(true);
    const handleOpenValid = () => setOpenValid(true);
    const handleCloseInvalid = () => setOpenInvalid(false);
    const handleCloseValid = () => setOpenValid(false);

    const nameValidator = "^[a-zA-Z.,?\\s]*$";
    const emailvalidator = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    const changeNameHandler = (e) => {
        if (!e.target.value.match(nameValidator)) {
            setIsNameValid('#ed3737')
            setName(e.target.value)
        }
        else {
            setIsNameValid('#b5c00c')
            setName(e.target.value)
        }
    }
    const changeEmailHandler = (e) => {
        if (!e.target.value.match(emailvalidator)) {
            setIsEmailValid('#ed3737')
            setEmail(e.target.value)
        }
        else {
            setIsEmailValid('#b5c00c')
            setEmail(e.target.value)
        }
    }

    const submitHandler = () => {
        if (isNameValid === '#ed3737' || isEmailValid === '#ed3737' || Subject.length <= 10 || Message.length <= 10) {
            handleOpenInvalid()
        }
        else {
            console.log(Name, Email, Subject, Message)
            handleOpenValid()
            setEmail('')
            setName('')
            setSubject('')
            setMessage('')
        }
    }

    return (
        <div id='Contact' className='Page'>
            <div className='titlecontainer'>
                <h2>Contact</h2>
            </div>
            <div className='contact-section'>
                <div className='contact-locations'>
                    <div className='location contact-items' >
                        <div className='contact-icon' onClick={() => { window.open('https://www.google.com/maps/place/Anand,+Gujarat/@22.5489479,72.9097145,13z/data=!3m1!4b1!4m5!3m4!1s0x395e4e7efd0c8885:0xa9a0b93c0c4b5215!8m2!3d22.5645175!4d72.928871', '_blank') }}>
                            {/* <i class='bx bx-pin'></i> */}
                            <LocationOnOutlinedIcon />
                        </div>
                        <div className='contact-details'> Anand , Gujarat, India</div>
                    </div>
                    <div className='email contact-items'>
                        <div className='contact-icon' onClick={() => { window.open('mailto:ronyparmar2107@gmail.com', '_blank') }}>
                            {/* <i class='bx bx-envelope' ></i> */}
                            <EmailOutlinedIcon />
                        </div>
                        <div className='contact-details' >ronyparmar2107@gmail.com</div>
                    </div>
                    <div className='call contact-items'>
                        <div className='contact-icon' onClick={() => { window.open('https://wa.me/+918488805119', '_blank') }}>
                            {/* <i class='bx bx-phone-call' ></i> */}
                            <ContactPhoneOutlinedIcon />
                        </div>
                        <div className='contact-details' >+91 8488805119</div>
                    </div>
                </div>
                <div className='contact-form'>
                    <div className='Name-email'>
                        <input
                            className='name-input input'
                            type='text'
                            style={{ outlineColor: isNameValid }}
                            placeholder='Name'
                            value={Name}
                            onChange={changeNameHandler} />
                        <input className='email-input input'
                            type='email'
                            style={{ outlineColor: isEmailValid }}
                            placeholder='Email'
                            value={Email}
                            onChange={changeEmailHandler} />
                    </div>
                    <div className='Subject'>
                        <input className='input'
                            type='text'
                            placeholder='Subject'
                            value={Subject}
                            onChange={(e) => { setSubject(e.target.value.toUpperCase()) }} />
                    </div>
                    <div className='Message'>
                        <textarea type='textbox'
                            className='input'
                            placeholder='Message'
                            value={Message}
                            style={{ height: '30vh' }}
                            onChange={(e) => { setMessage(e.target.value) }} />
                    </div>
                    <div className='Form-Submit'>
                        <button onClick={submitHandler}>Send Message</button>
                        <Modal
                            open={openInvalid}
                            onClose={handleCloseInvalid}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Please Enter Valid Details
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Check your name and email again. Make sure the subject and Message has more than 3 words
                                </Typography>
                            </Box>
                        </Modal>
                        <Modal
                            open={openValid}
                            onClose={handleCloseValid}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Mail Sent!
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Dear User, your mail has been sent to Rony Parmar.
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact