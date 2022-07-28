import React from 'react';
import "../../../styles/category.css";
import Helmet from '../../Helmet/Helmet';
import CommonSection from '../common-section/CommonSection';
import socialImg from '../../../assets/images/store.png';

const Category = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="From the Farm to your house!"/>
        <div className="social__media">
            <img src={socialImg} alt="social-media" className='w-150 my__image' />
        </div>
    </Helmet>
  );
};

export default Category;