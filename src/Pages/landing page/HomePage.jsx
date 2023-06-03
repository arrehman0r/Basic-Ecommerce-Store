import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import Discounts from '../../components/discount/Discounts';
import Products from '../../commonComponent/products/Products';
import Blogs from '../../components/blogs/BlogList';
import ServiceList from '../../components/services/ServiceList';
const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <Discounts/>
      <Products/>
      <Blogs/>
      <ServiceList/>
      {/* <Partner/> */}
    </>
  )
}

export default HomePage;