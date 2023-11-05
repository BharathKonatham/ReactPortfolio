import React from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Return a cleanup function to clear the timer when the component unmounts.
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'> 
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t','','m','e']} idx={15}/>
            </h1>
            <p>
                I'm a fast paced learning web developer, I try to do things simple and faster way.
                I'm looking for a Junior level role to improve my proficiency in React and my programming skills. 
            </p>
            <p>
              A good trait in me is that i never scream for the mistakes. I try to think for the solution and 
              possibilities. Alway curious to find the positive side of the things.  
            </p>
            <p>
              This portfolio is to show that, my dedication towards learning and  eagernes for a web Developer role.
            </p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
            <div className='face1'>
                    <FontAwesomeIcon icon={faNodeJs} color='#90EE90' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGit} color='#EC4' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>

            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About