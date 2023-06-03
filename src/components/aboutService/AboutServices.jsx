import React from 'react';
import styles from "./AboutServices.module.scss";
import {aboutServicesData} from "../../data/index";
import AboutServiceItem from './AboutServiceItem';

const AboutServices = () => {
  return (
    <div className={styles.services_container}>
        <div className={styles.text_heading}>
        <h2>What We Provide?</h2>
        <div><img src="	https://cdn.shopify.com/s/files/1/0652/4570/8532/files/wave.png?v=1659606064&width=150" alt="" /></div>
        </div>
        <div className={styles.services_section}>
            <div className={styles.services_cards}>
               {aboutServicesData.map((data)=>{
                 return <AboutServiceItem data={data}/>
               })}
            </div>
        </div>
    </div>
  )
}

export default AboutServices;