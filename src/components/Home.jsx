import React from 'react'
import Typed from 'typed.js';
import { Container } from 'react-bootstrap';
import About from './About';
import Skill from './Skill';

const Home = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Developer", "Freelancer"],
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
    <section id="hero" className="d-flex flex-column justify-content-center">
    <Container data-aos="zoom-in" data-aos-delay="100">
      <h1>Kwok Yew Weng</h1>
      <p>I'm <span ref={el} /> </p>
      <div className="social-links">
        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
        <a href="#" className="google-plus"><i className="bx bxl-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/kwok-yew-weng-6a08331a9/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </Container>
    
  </section>

  <main id="main">
    <About />
    <Skill />
  </main>
  </>

  )
}

export default Home
