import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from './commonComponent/Navbar/Navbar';
import HomePage from './Pages/landing page/HomePage';
import AllProducts from "./Pages/products/AllProducts";
import BlogsPage from "./Pages/blogs/BlogsPage";
import AboutPage from  "./Pages/about/AboutPage"
import ContactPage from "./Pages/contact/ContactPage";
import LoginPage from "./Pages/auth/LoginPage";
import AddToCartPage from "./Pages/addToCart/AddToCartPage";
import DetailPage from "./Pages/detailPage/DetailPage";
import Footer from './commonComponent/Footer/Footer';
import RegisterForm from './Pages/auth/RegisterForm';
import ForgetForm from './Pages/auth/ForgetForm';

function App() {
  return (
    <React.Fragment>
    <Router>
      <AppNavbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<AddToCartPage/>}/>
          <Route path='/detail' element={<DetailPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/forget'  element={<ForgetForm/>}/>
       </Routes>
      <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
