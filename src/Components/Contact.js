import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GiSmartphone } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GrCheckmark } from 'react-icons/gr';
import '../Styles/Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
 const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   function confirmSubmit () {
    if (name != "" && email != "" && message != "") {
      setSubmit(true);
    }
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    confirmSubmit();
   emailjs
      .sendForm(
        'service_4rb5ng5',
        'template_w7z1ppp',
        form.current,
        'BZOgEBtjhh-NbHy74'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

   const handleNameChange = (e)=> {
    setName(e.target.value);
  }
  const handleEmailChange = (e)=> {
    setEmail(e.target.value);
  }
 const handleMessageChange = (e)=> {
   setMessage(e.target.value);
  }
      
  return (
    <section className='contact' id='contact'>
     <div className='contact-sec'>
       <motion.div className='line' initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}>
       </motion.div>
    <motion.small
       initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>reach me via</motion.small>
    <motion.h2 initial={{x:-60}} whileInView={{x:0}} 
       transition={{duration:1, ease:"easeOut"}}>CONTACT</motion.h2>
    </div>

      <div className='form-sec'>
        { submit ? ( 
         <div className='response'>
            <h4>Message Sent <GrCheckmark size='1rem'/></h4>
            <p>Thank you {name}</p>
             <button onClick={() => setSubmit(false)}>
              Go Back
            </button>
          </div>
        ) : (
           <form ref={form} onSubmit={sendEmail}>
      <label>
        Name
 <input type="text" name='name' id="" placeholder="Your Name" onChange={handleNameChange} required />
       </label>
             
      <label>
        Email
       <input type="email" name="email" placeholder='Your Email'  onChange={handleEmailChange} required />
      </label>
     
      <label>
        Message
      <textarea name="message" col='30' row='10' placeholder='Your Message' onChange={handleMessageChange} required />
         </label>
             
      <button type='submit'>Send</button>
</form>
)}
 <motion.div className='form-details' initial={{opacity:0, x:150}}
          whileInView={{opacity : 1 , x:0}}
          transition = {{ duration:2, ease:"easeInOut"}}>
<p>Kindly drop your comment/question(s) on the message field. I would love to hear from you.
  I'm also available for collaborations. Reach out to me and let's have some techie dialogue.</p>
   <div className='contact-links'>
    <a href="tel:+2348169234987">
   <GiSmartphone size='2rem' />
 </a>

   <a href='https://wa.me/2348169234987' >
   <FaWhatsapp size='2rem' />
   </a>

   <a href='mailto:fagbemio123@gmail.com'>
     <HiOutlineMail size='2rem' />
   </a>
   </div>

      </motion.div>
      </div>
      
    </section>
  )
};

export default Contact