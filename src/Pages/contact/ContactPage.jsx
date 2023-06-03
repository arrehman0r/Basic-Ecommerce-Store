import React from 'react';
import styles from "./ContactPage.module.scss";
const ContactPage = () => {
  return (
    <div className='container'>
    <div className={styles.container}>
      <div className={styles.form_section}>
        <h4>Contact form</h4>
        <h2>Drop Us a Line</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form className={styles.contact_form}>
          <div className={styles.form_fields}>
            <div className={styles.field_input}>
              <input type="text" placeholder='Your Name'/>
            </div>
            <div className={styles.field_input}>
              <input type="email" placeholder='Your Email'/>
            </div>
            <div className={styles.field_input}>
              <input type="tel" placeholder='Your Phone'/>
            </div>
            <div className={styles.field_input}>
              <input type="text" placeholder='Subject'/>
            </div>
            <div className={styles.field_text_area}>
              <textarea type="text" placeholder='Message' rows="10"/>
            </div>
          </div>
          <div className={styles.button}>
            <button className={styles.btn}>Send Message</button>
          </div>
        </form>
      </div>
      <div className={styles.form_img}>
        <img src="	https://cdn.shopify.com/s/files/1/0652/4570/8532/files/contact-2.png?v=1660808456&width=385" alt="" />
      </div>
    </div>
    </div>
  )
}

export default ContactPage;