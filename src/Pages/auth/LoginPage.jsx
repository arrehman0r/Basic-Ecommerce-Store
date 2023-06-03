import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./LoginForm.module.scss";
const LoginPage = () => {
  const [login, setLogin] = useState({ email: "", password: "", });
  const [formError, setFormError] = useState({})

  const validation = (login) => {
    let errors = {};
    if (!login.email) {
      errors.email = "Email Required"
    }
    if (!login.password) {
      errors.password = "Password Required"
    }
    return errors;
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setFormError(validation(login));
  }
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (Object.keys(formError).length === 0 && (login.email !== "" && login.password !== "")) {
      alert("You Are Login");
    }
  }, [formError])

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className="modal-content">
          <h2 className={styles.text_heading} >Sign in to your account</h2>
          <h6 className={styles.text}>Welcome back!</h6>
          <div className='container'>
            <div className="modal-body">
              <form onSubmit={handlerSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name='email'
                    value={login.email}
                    onChange={handleChange} />
                  {formError.email && <p className='text-danger'>{formError.email}</p>}
                </div>

                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name='password'
                    value={login.password}
                    onChange={handleChange} />
                  {formError.password && <p className='text-danger'>{formError.password}</p>}
                </div>

                <button className={styles.btn_bg}>Login</button>
              </form>
              <div className='text-center mt-3 mb-3'>
                <small id="emailHelp" ><Link to="/forget" className='text-danger'>Forgot Password?</Link></small>
              </div>
              <div className='row'>
                <div className="col-5"> <hr /> </div>
                <div className="col-2 text-center"> Or </div>
                <div className="col-5"> <hr /> </div>
              </div>
              <p className='text-center mt-5'> <Link to="/register" className={styles.register_text}> Don’t have an account? Register Now</Link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;