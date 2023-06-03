import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./ForgetForm.module.scss";
const ForgetForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.forgetSec}>
        <div className={styles.header}>
          <h2><span className={styles.color}>Forgot</span> <span >Password</span></h2>
        </div>
        <h5 className={styles.text}>Please enter phone number to receive
          a verification code</h5>
          <div className={styles.input_wraper}>
            <input type="email"  placeholder='Please Enter Your Email' className={styles.input_field} />
          </div>
          <div className={styles.footer}>
          <Link to="/login"><h6 className={styles.login_text}>Back to Login</h6></Link>  
            <button className={styles.btn_bg}>send</button>
         </div>
      </div>
    </div>
  )
}

export default ForgetForm;