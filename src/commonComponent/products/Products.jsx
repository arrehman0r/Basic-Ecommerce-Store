import React from "react";
import ProductItem from "./ProductItem";
// import styles from "./Products.module.scss";
import { productsList } from "../../data";
const Products = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">FEATURED PRODUCTS</h2>
      <div className="row g-4">
        {productsList.map((data) => {
          return <ProductItem data={data} />;
        })}
      </div>
    </div>
  );
};

export default Products;
