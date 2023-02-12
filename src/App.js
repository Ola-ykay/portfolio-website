import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import BeatLoader from "react-spinners/BeatLoader";
import {useState, useEffect} from 'react'

const override = {
  margin: "0 auto",
 background: '',
  border:'1px solid #002147',
  borderRadius: '10px',
position: 'absolute',
  top: '40%',
  left: '43%',

};

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
    
  },[])
  return (
        <div>
          {
            loading ? 
     <BeatLoader
        color={"#002147"}
       cssOverride={override}
        loading={loading}
        size={15}
      /> : 
  <div className='container'>
   <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
          </div>
          }
    
    
        </div>
   
  );
};

export default App;