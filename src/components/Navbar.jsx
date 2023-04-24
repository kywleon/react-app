import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const Navbar = () => {

  useEffect(() => {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');

    // console.log(navbarlinks)
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {

        // console.log('Hash : ' + navbarlink.hash)

        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;

        // console.log('position: ' + position)
        // console.log('offsetTop: ' + section.offsetTop)
        // console.log('offsetHeight: ' + section.offsetHeight)

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    navbarlinksActive();
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    return () => {
      document.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  return (

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
      {/* <NavLink to='/' className='nav-link scrollto'>Home</NavLink>
      <NavLink to='/#about' className='nav-link scrollto'>About</NavLink>
      <NavLink to='/#contact' className='nav-link scrollto'>Contact</NavLink> */}
    </nav>

  )
}

export default Navbar
