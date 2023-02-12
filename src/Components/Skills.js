import React from "react";
import { FaHtml5, FaCss3Alt, FaVuejs, FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from 'react-icons/tb';
import '../Styles/Skills.css';
import { motion } from "framer-motion";


 const Skills = () => {
   
  return (
    <div>
      <section className='skills'  id='skills'>
        <div className='skills-sec'>
       <motion.div className='line' initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}></motion.div>
          
    <motion.small initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>my</motion.small>
          
     <motion.h2 initial={{x:-60}} whileInView={{x:0}} 
       transition={{duration:1, ease:"easeOut"}}>SKILLS</motion.h2>
    </div>
        <div className='my-skills'>
          
        <motion.div className='skill-logo' 
        initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <FaHtml5  size='4.2rem'/>
          <p>HTML</p>
        </motion.div>

          <motion.div className='skill-logo'
              initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <FaCss3Alt  size='4.2rem'/>
            <p>CSS</p>
        </motion.div>

          <motion.div className='skill-logo'
             initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <TbBrandJavascript size='4.2rem' />
            <p>JAVASCRIPT</p>
          </motion.div>
 
          <motion.div className='skill-logo' initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <FaGitAlt  size='4.2rem'/>
            <p>GIT</p>
        </motion.div>

          <motion.div className='skill-logo' initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <FaReact size='4.2rem' />
            <p>REACT</p>
        </motion.div>

          <motion.div className='skill-logo' initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <FaVuejs  size='4.2rem'/>
            <p>VUE</p>
        </motion.div>
 </div>
      </section>
    </div>
  );
}

export default Skills;