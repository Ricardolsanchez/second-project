import React from 'react';
import '../styles/membership.css';
import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from '../components/UI/common-section/CommonSection.jsx';
import { Container, Row, Col } from "reactstrap";
import imgStripy from '../assets/images/stripy.png';

const Membership = () => {

  return (
    <Helmet title="title">
      <CommonSection title="Membership" />

    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="hero__content">
            <h2 className='main__title__member mb-4'>Get <span>$0 </span> 
            deliverys fees <br /> from your favorite farms</h2>
            <p className='conditions__text'>Free trials might be included as well. The duration of the trial <br />You can cancel everytime you want at 11:59pm before of the renewal day</p>
            <div className="btns__membership">
            <button className='addToCart__BTN'>Try it free</button>
            </div>
          </div>
          </Col>

          <Col lg="6" md="6">
              <div className='image__member'>
                <img src={imgStripy} alt='hero-membership' className='w-100' />
              </div>
            </Col>
        </Row>
      </Container>
    </section>

    </Helmet>
  );
};

export default Membership