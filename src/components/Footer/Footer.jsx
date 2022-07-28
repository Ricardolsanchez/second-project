import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6"></Col>
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Frubi</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatibus similique autem dolorem culpa minus, 
              quae quis aut, dicta necessitatibus ipsam, 
              blanditiis ducimus optio. Sequi, modi quo. Ducimus, illum provident.</p>
            </div>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thrusday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <p>Location: New York - New York</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: example@gmail.com</span>
        
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your Email' />
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg="6" md="6">
            <p className='copyright__text'>Copyright - 2022, website made by Ricardo Sanchez. All rights reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className='m-0'>Follow:</p>
                <span><Link to="#"><i class="ri-facebook-line"></i></Link></span> 
                <span><Link to="#"><i class="ri-github-line"></i></Link></span>
                <span><Link to="#"><i class="ri-youtube-line"></i></Link></span>
            </div>
            </Col> 
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;