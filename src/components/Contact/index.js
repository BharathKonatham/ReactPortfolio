import Loader from 'react-loaders'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
        useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        
            // Return a cleanup function to clear the timer when the component unmounts.
            return () => {
                clearTimeout(timer);
        };      
    }, []);

    const sendEmail =(e) =>{
        e.preventDefault()
        emailjs.sendForm('service_vu7iar9',
        'template_t9pf8rl',
        refForm.current,
        'pyOqb-z1Vjt-AFPKi')
        .then((response)=>{
            alert('message successfully sent!')
            window.location.reload(false)
        }, (error)=>{
            alert('Failed to send Message')
            console.log(error)
        })
    }
    return(
        <>
        <div className='container contact-page'>
           <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}strArray={['C','o','n','t','a','c','t','','m','e']} idx={15}/>
                </h1> 
                <p>I am looking for junior level roles, which greately enhance my skills. My Goal is to develop complex web application with ease.</p>   
                <p> hello there</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>

                        <ol>
                            <li className='half'>
                                <input type='text' name='name' placeholder='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li> 
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send'/>
                            </li> 
                        </ol>
                    
                    </form>
                </div>
            </div> 
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Contact