import React from 'react';
import { Link } from 'react-router-dom';
import styles from  "./Registration.module.scss";
const RegisterForm = () => {
  return (
    <div className={styles.container}>  
    <div className={styles.sec}>
        <div className="modal-content">
                <h2 className={styles.text_heading} >Create an account</h2>
                <h6 className={styles.text}>Experience the full power of E-Commerace</h6>
            <div className='container'>
                <div className="modal-body">
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                name='name'
                             />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name='email'
                             />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name='password'
                             />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name='confirm_password'
                             />
                        </div>
                        <div className='mt-4 mb-3'>
                        <button className={styles.btn_bg}>CREATE ACCOUNT</button>
                        </div>
                        </form>
                        <div className='row'>
                            <div className="col-5"> <hr /> </div>
                            <div className="col-2 text-center"> Or </div>
                            <div className="col-5"> <hr /> </div>
                        </div>
                        <h6 className='text-center mt-5'> <Link to="/login" className={styles.text_login}>I already have an account</Link> </h6>
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default RegisterForm;