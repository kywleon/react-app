import React from 'react'
import aboutImg from '../assets/img/profile-img.jpg'
import { Container , Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <section id="about" className="about">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          {/* <p></p> */}
        </div>

        <Row>
          <div className="col-lg-4">
            <img src={aboutImg} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Software Enginner &amp; Web Developer.</h3>
            <p className="fst-italic">
            Hi, I am Kwok Yew Weng, who creates websites and applications that are optimized for performance, user-friendly, visually appealing, and focused on achieving business goals.
            </p>
            <Row>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 November 1996</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.developyw.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+013 6465907</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Selangor, Malaysia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Education:</strong> <span>Degree</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kywleon@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </Row>
            {/* <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> */}
          </div>
        </Row>

      </Container>
    </section>
    </>
  )
}

export default About
