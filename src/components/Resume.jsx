import React from 'react'

import { Container , Row } from 'react-bootstrap';

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <Row>
          <div className="col-lg-6">
            {/* <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Brandon Johnson</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div> */}

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor's Degree in Computer Science/Information Technology</h4>
              <h5>2018 - 2019</h5>
              <p><em>UCSI University</em></p>
              {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
            </div>
            <div className="resume-item">
              <h4>Diploma in Computer Science/Information Technology</h4>
              <h5>2015 - 2017</h5>
              <p><em>UCSI University</em></p>
              {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Lead Software Engineer</h4>
              <h5>Apr 2021 - Present</h5>
              {/* <p><em>Experion, New York, NY </em></p> */}
              <ul>
                <li>My duty is supervise our project client progress, monitoring subordinate work tasks.</li>
                <li>Fix all the bug issue and update change request from client which related frontend (CSS,Javascript, JQuery ,PHP and API).</li>
                <li>Integrate API new function from backend to frontend to existing project</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Junior WordPress Developer</h4>
              <h5>July 2020 - Mar 2021</h5>
              {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
              <p>My duty was developed websites with WordPress for our client. The project related many field like payment gateway and E-commerce. In this role need study WordPress pure core (PHP) and custom plugin and theme to meet expected to our client.</p>
              <ul>
                <li>To Develop & build responsive websites with PHP, CSS ,HTML ,JavaScript, JQuery and MySQL Database</li>
                <li>To support and maintain the existing websites and client websites</li>
                <li>To troubleshoot and fix software bugs</li>
                <li>To ensure our software documentation is up-to-date, and continuous development and research on modern web technologies.</li>
              </ul>
            </div>
          </div>
        </Row>

      </Container>
    </section>
    </>
  )
}

export default Resume
