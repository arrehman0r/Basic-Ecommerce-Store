import React from 'react';
import styles from "./Filter.module.scss";
const Filter = () => {
  return (
    <div className="col-md-3 col-sm-3 col-sm-12 col-left">
    <div className={styles.side_bar}>
      <div className={styles.block_title}>
        <span>CATEGORIES</span>
      </div>
      <div className={styles.block_content}>
        <ul>
          <li>Accessories</li>
          <li>Men’s Wear</li>
          <li>Product Book</li>
          <li>Promotions</li>
          <li>Shoes & Bags</li>
          <li>Women’s Wear</li>
        </ul>
      </div>
    </div>
    <div className={styles.sidebar_block}>
      <div className={styles.block}>
        <div className={styles.title}>
          <h3>SIZE OPTION</h3>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <input type="checkbox" value="xs"/>
              <label>XS</label>
            </li>
            <li>
              <input type="checkbox" value="s"/>
              <label>S</label>
            </li>
            <li>
              <input type="checkbox" value="M"/>
              <label>M</label>
            </li>
            <li>
              <input type="checkbox" value="l"/>
              <label>L</label>
            </li>
            <li>
              <input type="checkbox" value="xl"/>
              <label>XL</label>
            </li>
          </ul>
        </div>
      </div>
       <div className={styles.block}>
        <div className={styles.title}>
          <h3>PRICE OPTION</h3>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <input type="checkbox" value="xs"/>
              <label>0 - 49$</label>
            </li>
            <li>
              <input type="checkbox" value="s"/>
              <label>50$ - 99$</label>
            </li>
            <li>
              <input type="checkbox" value="M"/>
              <label>100$ - 149$</label>
            </li>
            <li>
              <input type="checkbox" value="l"/>
              <label>200$ - 500$</label>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.title}>
          <h3>BRAND OPTION</h3>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <input type="checkbox" value="xs"/>
              <label>New Look</label>
            </li>
            <li>
              <input type="checkbox" value="s"/>
              <label>Marvis</label>
            </li>
            <li>
              <input type="checkbox" value="M"/>
              <label>Dolce & Gabbana</label>
            </li>
            <li>
              <input type="checkbox" value="l"/>
              <label>Gucci</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Filter;