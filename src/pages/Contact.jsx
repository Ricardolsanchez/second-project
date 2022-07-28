import React from 'react';
import Helmet from "../../src/components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Col, Row } from "reactstrap";
import '../styles/contact.css';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact"/>
      <section>
        <Container>
          <Row>
            <Col lg="4" md="7"className='m-auto text-center'>
                  <div>
                    <h3 className='mb-4 mt-5'>For more information you can writte us to our email!</h3>
                  </div>
                
                  <form className='form__contact m-10'>
                    <div className="contact__info-name mb-2">
                      <input type="text" placeholder='Your Name' required></input>
                    </div>

                    <div className="contact__info-Email mb-2">
                      <input type="text" placeholder='Your Email' required></input>
                    </div>

                    <div className="contact__info-message mb-2">
                      <textarea placeholder='Your Message!'></textarea>
                    </div>
                    <button  type="submit" className='addToCart_BtM mb-3'>Login</button>
                </form>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Contact