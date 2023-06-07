import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./DetailPage.module.scss";
import img from "./tshirt.png";
import { productsList } from "../../data";
import { CONSTANTS } from "../../constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cart";

const DetailPage = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    // const id = params.id;
    const { id } = params;

    if (id) {
      const _product = productsList.find((p) => p.id === Number(id));
      if (_product) {
        setProduct(_product);
      }
    }
  }, [params]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleCartClick = () => {
    dispatch(addToCart({ id: Number(params.id), quantity: count }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.img_block}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={styles.text_block}>
        <h1>{product.pText}</h1>
        <p>{product.subTitle}</p>
        <p>{product.description}</p>
        <p className={styles.stars}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>

        {/* OPTIONAL CHAINING */}

        <b>
          Price : {CONSTANTS.currency}
          {product.pPrice?.toFixed(2)}
        </b>
        <div className={styles.counter}>
          <button className={styles.countBtn} onClick={handleDecrement}>
            -
          </button>
          <span>{count}</span>
          <button className={styles.countBtn} onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="text-center d-block mb-3 pb-3">
          <button className={styles.btn} onClick={handleCartClick}>
            Add To Cart
          </button>
          <span className="px-3"></span>
          <Link to="/cart">
            <button className={styles.btn}>Go To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
