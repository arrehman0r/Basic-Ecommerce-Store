import React from 'react';
import styles from "./HeroSection.module.scss";

import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className='container'>
      <div className={styles.hero_section}>
      <div className='row'>
        <div className='col pt-4'>
          <h1 className={styles.heading }>CUSTOMIZED PRINTED TEES</h1>
          <p>Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.</p>
         <Link to="/products"> <button type="button" className="btn btn-outline-dark">EXPLORE STORE</button></Link>
        </div>
        <div className='col'>
          <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png" alt="hero section img" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection;