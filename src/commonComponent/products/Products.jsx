import React from 'react';
import ProductItem from './ProductItem';
// import styles from "./Products.module.scss";
import {featuredData } from "../../data/index";
const Products = () => {
  return (
    <div className="container mt-5">
      <h2 className='text-center mb-4'>FEATURED PRODUCTS</h2>
      <div className='row'>
        {featuredData.map((data)=>{
          return <ProductItem data={data}/>
        })}
        
      </div>
    </div>
  )
}

export default Products;