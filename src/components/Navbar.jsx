import React, { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';


const handleScrollTo = (hash) => {
  if (document.querySelector(hash)) {
    window.scrollTo({
      top: document.querySelector(hash).offsetTop,
      behavior: 'smooth'
    });
  }
};

const handleClick = (e) => {
  e.preventDefault();
  const hash = e.currentTarget.hash;
  const body = document.querySelector('body');
  if (body.classList.contains('mobile-nav-active')) {
    body.classList.remove('mobile-nav-active');
    const navbarToggle = document.querySelector('.mobile-nav-toggle');
    navbarToggle.classList.toggle('bi-list');
    navbarToggle.classList.toggle('bi-x');
  }
  handleScrollTo(hash);
};

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

  const [isNavActive, setIsNavActive] = useState(false);

  function toggleNav() {
    setIsNavActive(!isNavActive);
  }

  useEffect(() => {
    if (isNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  },[isNavActive])


  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scrollto');
    scrollElements.forEach(element => element.addEventListener('click', handleClick));
    return () => {
      scrollElements.forEach(element => element.removeEventListener('click', handleClick));
    };
  }, []);

  return (

   <>
     {/* Mobile nav toggle button */}
   {/* <button type="button" className="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
    <i className={`bi mobile-nav-toggle d-lg-none ${isNavActive ? 'bi-x' : 'bi-list'}`} onClick={toggleNav}></i>

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
   </>

  )
}

export default Navbar
