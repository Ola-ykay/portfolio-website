import React from "react";
import { motion } from "framer-motion";
import '../Styles/About.css';


 const About = () => {
  return (

    <section className="about" id="about">
    <div className='about-sec'>
       <motion.div className='line'
          initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}
         >
       </motion.div>
    <motion.small
       initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
      what to know
    </motion.small>
    
      <motion.h2
        initial={{x:-60}} 
             whileInView={{x:0}} 
             transition={{duration:1, ease:"easeOut"}}>
        ABOUT ME
      </motion.h2>
    </div>
      <motion.p  initial={{opacity:0, x:100}}
          whileInView={{opacity : 1 , x:0}}
          viewport={{once : false}}
          transition = {{ duration:2, bounce: 3,stiffness:80,
              ease:"easeInOut"}}>
        I am Olayinka Fagbemi, currently based in Nigeria. I transitioned from viewing micro-organisms on a culture plate to writing lines of codes on a web page.   
       I am hardworking, innovative, goal driven and have keen interest in frontend engineering as I love to create accessible applications with beautiful and delightful user experiences, solve problems and share knowledge. I aim to make the world a better place with my skillset.
       
I'm excited to make this leap as I continue to work on projects to hone my skill. For leisure, I surf the internet and code. 
      </motion.p>
    </section>
   
  );
}

export default About;