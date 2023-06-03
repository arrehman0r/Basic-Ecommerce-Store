import React from 'react';
import styles from "./ProductItem.module.scss";
import {Link} from "react-router-dom";
const ProductItem = ({data}) => {
    return (
        <>
        
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <img src={data.img} alt={data.pTitle} />
                <Link to="detail"><button className={styles.quick_btn}>Quick View</button></Link>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>{data.subTitle}</span>
                    <h2 className={styles.card_title}>{data.pTitle}</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>{data.pPrice}</span>
                        </del>
                        <span>{data.pDiscountPrice}</span>
                    </span>
                </div>
            </div>
            </div>
        </div>
        {/* <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
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
              </div> */}
        </>
    )
}

export default ProductItem;