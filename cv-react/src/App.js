import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AOS from 'aos';
import './App.css';
import './components/2/2.css';
import 'aos/dist/aos.css';
import Header from './components/Header';

import Presentation from './components/1/Presentation'
import About from './components/2/About'
import Skills from './components/2/Skills'
import Experience from './components/3/Experience';
import Education from './components/3/Education';
import Footer from './components/4/Footer';
import { Helmet } from 'react-helmet'

function App() {
  const { color, setColor } = useState();

  AOS.init({ delay: 100 });

  return (
     
    <div className="App">
       <Helmet>
          <title>{ 'Lasse Rützou Bruntse' }</title>
        </Helmet>
      <Header position={color} />
      <Presentation />
     
      <section className="two">
        <div className="two-inner">
          <Skills />
          <About />
        </div>
      </section>

      <section className="three">
        <div data-aos="fade-in" data-aos-duration="1000" >
          <Experience />
        </div>
        <div data-aos="fade-in" data-aos-duration="1000" >
          <Education />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

    </div>

  );
}



export default App;
