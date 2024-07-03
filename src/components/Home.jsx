import React , { useEffect , useRef }from 'react'
import Typed from 'typed.js';
import { Container } from 'react-bootstrap';
import About from './About';
import Skill from './Skill';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Service from './Service';

import heroBg from '../assets/img/hero-bg.jpg';

const Home = () => {

    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Web Developer", "Software Engineer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    });

  return (

   <>
    <section id="hero" className="d-flex flex-column justify-content-center"
    style={{
      width: '100%',
      height: '100vh',
      background: `url(${heroBg}) top right no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
    }}
    >
    <Container data-aos="zoom-in" data-aos-delay="100">
      <h1>Kwok Yew Weng</h1>
      <p>I'm <span ref={el} /> </p>
      <div className="social-links">
        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
        <a href="https://api.whatsapp.com/send?phone=60136465907" className="google-plus"><i className="bx bxl-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/kwok-yew-weng-6a08331a9/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </Container>
    
  </section>

  <main id="main">
    <About />
    <Skill />
    <Resume />
    <Portfolio />
    <Service />
    <Contact />
  </main>
  </>

  )
}

export default Home
