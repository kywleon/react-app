import React , { useEffect } from 'react'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  // console.log(year);

  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top')

    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add('active')
        } else {
          backToTop.classList.remove('active')
        }
      }

      toggleBackToTop();
      window.addEventListener('load', toggleBackToTop)
      document.addEventListener('scroll', toggleBackToTop)

      return () => {
        document.removeEventListener('scroll', toggleBackToTop)
      }
    }
  }, [])


  return (

    <>
      <footer id="footer">
        <div className="container">
          {/* <h3>Kwok Yew Weng</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
          {/* <div className="social-links">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div> */}
          <div className="copyright">Copyright &copy; by <strong><span>Kwok Yew Weng</span></strong>. All rights reserved.
        </div>
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    
    </>
  )
}

export default Footer
