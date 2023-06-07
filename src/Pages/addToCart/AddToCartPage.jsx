import React, { useState } from "react";
import styles from "./Cart.module.scss";
import img from "../detailPage/tshirt.png";
import { useSelector } from "react-redux";
import { productsList } from "../../data";
import { CONSTANTS } from "../../constants";
const AddToCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item_section}>
        {cart?.cartItems?.map((item) => {
          debugger;
          const _product = productsList?.find((p) => p.id === item.id);
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.item_detail}>
                <div className={styles.img_wrap}>
                  <img src={img} alt="" />
                </div>
                <div className={styles.text_wrap}>
                  <h3>{_product?.pText}</h3>
                  <p>{_product.subTitle}</p>
                  <p>only 6 item in stock</p>
                </div>
              </div>
              <div className={styles.price_detail}>
                <h6 className={styles.Newpri}>{CONSTANTS.currency} {_product.pDiscountPrice}</h6>
                <del className={styles.pri}>{CONSTANTS.currency} {_product.pPrice}</del>
                <p>50%</p>
              </div>
              <div className={styles.counter}>
                <button className={styles.countBtn} onClick={handleDecrement}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button className={styles.countBtn} onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.bill_section}>
        <button className={styles.final_btn}>Proceed To Pay</button>
      </div>
    </div>
  );
};

export default AddToCartPage;
