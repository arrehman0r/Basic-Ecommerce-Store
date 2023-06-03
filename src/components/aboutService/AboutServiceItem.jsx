import React from 'react';
import styles from "./AboutServiceItem.module.scss";
const AboutServiceItem = ({data}) => {
  return (
    <>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class={data.icon}></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>{data.sTitle}</h4>
          <p className={styles.sub_text}>{data.sText}</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutServiceItem;