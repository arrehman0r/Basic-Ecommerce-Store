import React from 'react';
import { Link } from 'react-router-dom';
import {discountData} from "../../data/index";
import styles from "./Discount.module.scss";

const Discounts = () => {
  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Get Big Discount</h2>
        <div className={styles.container}>
     { discountData.map((data)=>{
      return <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={styles.discount}>
            <div className={styles.discount_text}>
              <h2>{data.discountTitle}<span>%</span><span>OFF</span></h2>
              <p>{data.dText}</p>
              <Link to="/detail"><button className="btn btn-outline-dark">Shop Now</button></Link>
            </div>
            <div className={styles.discount_img}>
              <img src={data.img} alt="discount" />
            </div>
          </div>
        </div>
     })}
        </div>
      </div>
  )
}

export default Discounts;