import React from 'react';
import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
  return (
  <div className='mt-5'>
    <Container >
 <Row>
    <Col>
        <h5>About</h5>
        <p>Our Story</p>
        <p>Our Blog</p>
        <p>Careers</p>
        <p>Gurus</p>

    </Col>
    <Col>
        <h5>Quick Links</h5>

        <p>Projects in Pakistan</p>
        <p>Project in Karachi</p>
        <p>Project in Islamabad</p>
        <p>Project in Lahore</p>
    </Col>
    <Col>
        <h5>Contact Us</h5>
        <div>
        <i class="bi bi-envelope"> km775.ali@gmail.com</i>    
        </div>
        <div>
        <i class="bi bi-telephone"> 111-555-555</i>
        </div>
    </Col>
    <Col >
        <h5>Follow Us</h5>
        <div className='iconImg'>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-facebook"></i>
        </div>           
    </Col>
    
        </Row>
</Container>
<div className='text-center bg-dark text-light mt-5' >
        <p>Copyright 2023 Kamran Ali. All rights reserved</p>
        <p>Terms & Conditions | Privacy Policy | Disclaimer</p>
</div>
  </div>
  )
}

export default Footer;