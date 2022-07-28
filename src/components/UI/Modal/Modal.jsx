import React from 'react';
import Slider from 'react-slick';
import '../../../styles/Modal.css';
import imageNew from '../../../assets/images/freedelivery.png';
import imageSecond from '../../../assets/images/secondimg.png';
import { Link } from "react-router-dom";

const Modal = ({setShowModal}) => {
        const settings = {
            dots: true,
            arrows: false,
            autoplay: true,
            inifinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1
    };
  return (
            <div className="modal__wrapper">
                <div className="single__modal__log">
              
                    <div className="cart__close">
                        <span onClick={()=> setShowModal(false)}><i class="ri-close-fill"></i></span>
                    </div>  

                    <div className='main__title text-center mb-5'>
                        <h2><span>Frubi +</span> is the premium membership!</h2>
                            <Slider {...settings}>
                        
                                <div className="slider__content__new align-items-center">
                                    <img src={imageNew} alt="promo-img" className="w-70 rounded" />
                                    <p>Save 5$ for each order !</p>
                                    
                                </div>
                                <div className="slider__content__new align-items-center">
                                    <img src={imageSecond} alt="promo-img" className="w-70 rounded" />
                                    <p>Free deliveries for a whole month!</p>
                                </div>  
                                </Slider>   
                        </div>
                        <div className="btns__promo md-center">
                            <button onClick={()=> setShowModal(false)} type="submit" className='addToCart__btn me-4'>Back</button>
                            <Link to="/membership"><button type="submit" className='addToCart__btn'>Continue</button></Link>
                        </div>
                    </div>
                </div>
    );
};

export default Modal;