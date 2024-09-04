import React , { useEffect , useRef , useState } from 'react'
import Typed from 'typed.js';
import { Container } from 'react-bootstrap';
import About from './About';
import Skill from './Skill';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Service from './Service';
import heroBg from '../assets/img/hero-bg.jpg';
import axios from 'axios';

const Home = () => {

    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
    const [job , setJob] = useState(['']);
    const [name , setName] = useState('');
    const [detail , setDetail] = useState(['']);

    useEffect(() => {
      axios.get('http://localhost:8081/personal%20code/portfolio-portal/public/api/react-profile')
        .then(response => {
          // Set the response data to state
          console.log(response.data);
          const data = response.data;

          setName(data.home.name);
          setJob(data.home.job);
          setDetail(data.about);

        })
        .catch(error => { 
          // Handle errors
          console.error('Error fetching profile data:', error);
        });
    }, []); // Empty dependency array ensures this runs only once
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: job,
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
      <h1>{ name }</h1>
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
    <About name={ name } detail={detail}/>
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
