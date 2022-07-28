import React, {useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/Login.css';

const Register = () => {

  const signupNameRef = useRef()
  const signupPasswordRef = useRef() 
  const signEmailRef = useRef()

  const submitHandler = (e) =>{
    e.preventDefault()
  }


  return (
    <Helmet title="Signup">
      <CommonSection title="Sign Up"/>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='m-auto text-center'>
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" placeholder='Full Name' required ref={signupNameRef}/>
                 </div>
                 <div className="form__group">
                  <input type="text" placeholder='Email' required ref={signEmailRef}/>
                 </div>
                 <div className="form__group">
                  <input type="password" placeholder='Password' required ref={signupPasswordRef}/>
                 </div>
                 <button  type="submit" className='addToCart_BtM'>SignUp</button>
              </form>
              <Link to="/Login">I do have an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register;