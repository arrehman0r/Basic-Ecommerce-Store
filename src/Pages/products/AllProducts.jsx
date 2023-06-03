import React from 'react';
import styles from "./AllProduct.module.scss";
import { Link } from 'react-router-dom';
import {featuredData} from "../../data/index";
import Filter from '../../commonComponent/Filter/Filter';
const AllProducts = () => {
  return (
    <>
    <div className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.heading}>
              <h2>WOMEN’S WEAR</h2>
              <div className={styles.pageName}>
                <p>Home / Women’s Wear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className="row">
       <Filter/>
       <div className="col-md-9 col-sm-12 col-xs-12 col-main">
         <div className='row'>
       {featuredData.map((data)=>{
           return  (
              <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
              <div className={styles.card}>
              <img src={data.img} alt={data.pText} className='w-100' />
              <h6>{data.pText}</h6>
              <p>{data.subTitle}</p>
              <p>Price : {data.pPrice}</p>
              <div className='text-center d-block mb-3 pb-3'>
             <Link to="/detail"><button className={styles.btn}>View Detail</button></Link> 
              <button className={styles.btn}>Add To Cart</button>
              </div>
              </div>
              </div>
           )
          })}
          </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default AllProducts;