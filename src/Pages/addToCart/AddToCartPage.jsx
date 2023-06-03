import React, { useState } from 'react';
import styles from "./Cart.module.scss";
import img from "../detailPage/tshirt.png";
const AddToCartPage = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () =>{
    setCount(count+1)
  }
  const handleDecrement = () =>{
    setCount(count-1)
  }
  return (
    <div className={styles.container}>
      <div className={styles.item_section}>
        <div className={styles.item}>
          <div className={styles.item_detail}>
            <div className={styles.img_wrap}>
            <img src={img} alt="" />
            </div>
            <div className={styles.text_wrap}>
              <h3>PRINTED BLUE TSHIRT</h3>
              <p>T-Shirt</p>
              <p>only 6 item in stock</p>
            </div>
          </div>
          <div className={styles.price_detail}>
            <h6 className={styles.Newpri}>RS.350.00</h6>
            <del className={styles.pri}>RS.750.00</del>
            <p>50%</p>
          </div>
      <div className={styles.counter}>
        <button className={styles.countBtn} onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button className={styles.countBtn} onClick={handleIncrement}>+</button>
      </div>
        </div>
      </div>
      <div className={styles.bill_section}>
        <button className={styles.final_btn}>Proceed To Pay</button>
      </div>
    </div>
  )
}

export default AddToCartPage;