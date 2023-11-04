import React from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'

function About() {
  return (
    <div className='container about-page'>
        <div className='text-zone'> 
            <h1>
                <AnimatedLetters  strArray={['A','b','o','u','t','','m','e']} idx={15}/>
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
    </div>
  )
}

export default About