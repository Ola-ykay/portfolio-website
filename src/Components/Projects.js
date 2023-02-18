import React from "react";
import { FiExternalLink } from 'react-icons/fi';
import '../Styles/Projects.css';
import { motion } from "framer-motion";
import asso from '../Images/asso.png';
import calc from '../Images/calc.png';
import card from '../Images/card.png';
import redactr from '../Images/redactr.png';
import counter from '../Images/counter.png';
import clock from '../Images/clock.png';

 const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects-sec'>
       <motion.div className='line' initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}></motion.div>
    <motion.small initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>some of my</motion.small>
        
    <motion.h2 initial={{x:-60}} whileInView={{x:0}} 
       transition={{duration:1, ease:"easeOut"}}>PROJECTS</motion.h2>
    </div>

      <div className="grid">
      <motion.div className='project-cont' 
        initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}} >
      <img src= {asso} alt='' />
        <h3>Association Website</h3>
      <p>This is an association website which was developed with Reactjs. It gives detailed information about the association and has different layout which are the Home, About, Gallery, Library and Contact. </p>
        <a href='https://association-web-mj66-ola-ykay.vercel.app/' className='project- link'> 
          <FiExternalLink /> 
        </a>
      </motion.div>


         <motion.div className='project-cont'
           initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}} >
      <img src= {counter} alt=''/>
           <h3>Counter App</h3>
      <p> A counter app is an application which helps to gather and keep track of data or number and perform different functions like increment, decrement, reset and set value. </p>
           <a href='https://altschool-exam-project-ruby.vercel.app/' className='project-link'>
            <FiExternalLink /> 
           </a>
      </motion.div>

         <motion.div className='project-cont' 
          initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}}>
      <img src= {redactr} alt=''/> 
           <h3>Redactr App</h3>
      <p>This App helps you to censor words that you don't want to make public. Using this app, you can select your symbol type to replace your words with.</p>
           <a href='https://redactr-app.netlify.app/' className='project-link'>
           <FiExternalLink /> 
           </a>
      </motion.div>

         <motion.div className='project-cont' 
         initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}}>
      <img src= {card} alt=''/>
           <h3>Cardly</h3>
      <p>Cardly is an open-source profile card design where you create and design a catchy profile card for yourself thereby showcasing your web skills.
      </p>
           <a href='https://profile-caard.netlify.app/' className='project-link'>
           <FiExternalLink /> 
           </a> 
      </motion.div>
        
         <motion.div className='project-cont'
           initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}}>
      <img src= {clock} alt='' />
           <h3>Clock App</h3>
      <p>A clock was designed using HTML, CSS and JavaScript.</p>
           <a href='https://neumo-clock.netlify.app/' className='project-link'>
           <FiExternalLink />
           </a>
      </motion.div>

         <motion.div className='project-cont' 
          initial={{y:80}} 
             whileInView={{y:0}} 
             transition={{ staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,}}>
      <img src= {calc} alt=''/>
           <h3>A Neumorphic Calculator</h3>
      <p>A neumorphic calculator designed with HTML, CSS and JavaScript</p>
           <a href='https://olayinka-calculator.netlify.app/' className='project-link'>
           <FiExternalLink />
           </a>
      </motion.div>

      
     
      </div>
    </section>
  );
}

export default Projects;