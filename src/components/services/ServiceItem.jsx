import React from 'react';
import styles from "./ServiceItem.module.scss";
const ServiceItem = ({data}) => {
  return (
    <>
    <div className={styles.card_col}>
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <span className={styles.icon}>
                    <i class={data.icon}></i>
                    </span>
                </div>
                <div className={styles.card_text}>
                    <h4>{data.sTitle}</h4>
                    <p>{data.sText}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceItem;