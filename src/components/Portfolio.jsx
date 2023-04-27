import React , { useEffect }  from 'react'
import portImg1 from '../assets/img/portfolio/portfolio-1.jpg'
import portImg2 from '../assets/img/portfolio/portfolio-2.jpg'
import portImg3 from '../assets/img/portfolio/portfolio-3.jpg'
import portImg4 from '../assets/img/portfolio/portfolio-4.jpg'
import portImg5 from '../assets/img/portfolio/portfolio-5.jpg'
import portImg6 from '../assets/img/portfolio/portfolio-6.jpg'
import portImg7 from '../assets/img/portfolio/portfolio-7.jpg'
import portImg8 from '../assets/img/portfolio/portfolio-8.jpg'
import portImg9 from '../assets/img/portfolio/portfolio-9.jpg'

import AOS from 'aos';
import GLightbox from 'glightbox/dist/js/glightbox.min';
import Swiper from 'swiper';
import Isotope from 'isotope-layout';

import { Container , Row } from 'react-bootstrap';


const Portfolio = () => {

  useEffect(() => {
    let portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = document.querySelectorAll("#portfolio-flters li");

      portfolioFilters.forEach((el) => {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) => {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        });
      });
    }

    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });

    const portfolioDetailsLightbox = GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });

    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);


  return (
    <>
<section id="portfolio" className="portfolio section-bg">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <Row>
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Landing Page</li>
              <li data-filter=".filter-card">Ecommerce</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </Row>

        <Row className="portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portImg1} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>3Q</h4>
                <p>Landing Page</p>
                <div className="portfolio-links">
                  {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Landing Page"><i className="bx bx-plus"></i></a> */}
                  <a href="https://3qqueen.com" target="_blank"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portImg2} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Daijobu</h4>
                <p>Landing Page</p>
                <div className="portfolio-links">
                  {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Landing Page"><i className="bx bx-plus"></i></a> */}
                  <a href="https://www.daijobu.com.my" target="_blank"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portImg3} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a> */}
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portImg4} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portImg5} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portImg6} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portImg7} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portImg8} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portImg9} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </Row>

      </Container>
    </section>
    </>
  )
}

export default Portfolio
