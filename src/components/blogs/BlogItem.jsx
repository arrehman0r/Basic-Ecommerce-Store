import React from 'react';
import styles from "./BlogItem.module.scss";
const BlogItem = ({ img, bHead, bTitle, bText, bdImg, bWriter, bDate }) => {
  return (
    <div className={styles.blog_item}>
      <div >
        <img src={img} alt={bTitle} className={styles.img} />
      </div>
      <div className={styles.blog_body}>
        <div className={styles.blog_body_sec}>
          <div className={styles.blog_text}>
            <h6>{bHead}</h6>
            <h2>{bTitle}</h2>
            <p>{bText}</p>
          </div>
          <div className={styles.blog_writer}>
            <div className={styles.blog_writer_img}>
              <img src={bdImg} alt={bWriter} />
            </div>
            <div className={styles.blog_writer_detail}>
              <h5>{bWriter}</h5>
              <span>{bDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;