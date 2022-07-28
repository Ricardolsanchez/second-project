import React, {useState, useEffect} from 'react';
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import '../styles/hero-section.css';
import heroImg from '../assets/images/heroo.jpg';
import { Link } from "react-router-dom";
import Category from '../components/UI/Category/Category.jsx';
import "../styles/home.css";
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.jsx';
import foodCategoryImg01 from "../assets/images/pepperr.png";
import foodCategoryImg02 from "../assets/images/fruitss.png";
import foodCategoryImg03 from "../assets/images/bebidass.png";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from '../assets/images/location.png';
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
import Modal from '../components/UI/Modal/Modal';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "lorem ipsum dolor"
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: "lorem ipsum dolor"
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03, 
    desc: "lorem ipsum dolor"
  }
]

const Home = () => {

  const [showModal, setShowModal] = useState(true); // trigger

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() =>{
    const filteredPizza = products.filter(item=> item.category === 'Fruits')
    const slicePizza = filteredPizza.slice(0,4);
    setHotPizza(slicePizza)
  },[])

  useEffect(()=>{
    if(category === "ALL"){
      setAllProducts(products)
    }

    if(category === 'VEGETABLES'){
      const filteredProducts = products.filter(item=> item.category === 'Vegetables')

      setAllProducts(filteredProducts)
    }
    if(category === 'FRUITS'){
      const filteredProducts = products.filter(item=> item.category === 'Fruits')

      setAllProducts(filteredProducts)
    }
    if(category === 'BEVERAGES'){
      const filteredProducts = products.filter(item=> item.category === 'Beverage')

      setAllProducts(filteredProducts)
    }
  },[category])
  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className='mb-3'>Easy Way to Make an Order</h5>
                <h1 className='mb-4 hero__title'><span>Hungry?</span> Just Wait <br /> food<span> at your door</span></h1> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, deleniti a repellat aliquid excepturi voluptate quaerat optio reiciendis in. In commodi explicabo saepe dolorem dolor sapiente possimus assumenda tempora facilis.
                </p> 

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i class="ri-arrow-right-s-line"></i></button>

                  <button className='all__foods-btn'><Link to="/foods">See all foods</Link></button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5'>
                  <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i
                   class="ri-car-line"></i></span>No Shipping Charge</p>

                  <p className='d-flex align-items-center gap-2 '><span className='shipping__icon'><i
                   class="ri-shield-check-line"></i></span>100% secure checkout</p>
                </div>
              </div>
            </Col>  

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
            <Row>
              <Col lg='12' className='text-center mb-10'>
                <h5 className='feature__subtitle mb-5'>What we serve</h5>
                <h2 className='feature__title'>Just sit back at home</h2>
                <h2 className="feature__title">we Will <span>take care</span></h2>

                <p className="mb-1 mt-4 feature__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis id iure eos illum molestiae dignissimos ratione vero fugit sit consequuntur non, 
                  omnis sequi laudantium ipsam eligendi? Provident minima nemo porro!</p>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente explicabo ullam odio deleniti sint. Perspiciatis nobis sit facere quo placeat! Aspernatur velit, 
                  illum possimus ipsam omnis obcaecati enim cupiditate alias?</p>
              </Col>

              {
                featureData.map((item,index) => (
                  <Col lg="4" md="4" sm="6" key={index} className='mt-5'>
                    <div className="feature__item text-center px-5 py-3" >
                      <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3'/>
                      <h5 className='fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('ALL')}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'VEGETABLES' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('VEGETABLES')}><img src={foodCategoryImg01} alt="" />Vegetables</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'FRUITS' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('FRUITS')}><img src={foodCategoryImg02} alt="" />Fruits</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BEVERAGES' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BEVERAGES')}><img src={foodCategoryImg03} alt="" />Beverage</button>
              </div>
            </Col>

            {
              allProducts.map(item => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={whyImg} alt="why-tasty-treat" className='w-100' />
              </Col>

              <Col lg="6" md="6">
                <div className="why__tasty-treat">
                  <h2 className='tasty__treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                  <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum repudiandae vero voluptates
                     maxime sequi deserunt voluptas in debitis nam quas, earum esse itaque eveniet atque nulla amet molestiae
                      ipsa.</p>

                  <ListGroup className='mt-4'>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                      Fresh and Tasy foods</p>
                      <p className="choose__us-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odio quaerat assumenda dolore accusantium asperiores, porro, earum, repellendus aut molestiae libero 
                        aliquam voluptatem exercitationem maxime natus vero eos aliquid iste.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                      Quality Support foods</p>
                      <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem obcaecati repudiandae dolore numquam ratione molestias quae 
                        similique debitis, quis perferendis voluptatum assumenda nam ad ea veritatis eligendi animi maiores.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                      any Location</p>
                      <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem obcaecati repudiandae dolore numquam ratione molestias quae 
                        similique debitis, quis perferendis voluptatum assumenda nam ad ea veritatis eligendi animi maiores.</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore deserunt nesciunt, incidunt reprehenderit quod omnis cumque? 
                  Voluptatum possimus tenetur maiores optio qui aliquid voluptatibus, fugit architecto labore, sint tempore.</p>

                  <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className='w-100'/>
            </Col>

            {showModal && <Modal setShowModal={setShowModal} /> }
          </Row>
        </Container>
      </section>
    </Helmet>

  );
};

export default Home;